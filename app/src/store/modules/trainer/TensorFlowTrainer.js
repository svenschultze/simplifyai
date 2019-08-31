import * as tf from '@tensorflow/tfjs'

/*
const model = tf.sequential()
model.add(tf.layers.inputLayer({ inputShape: [75, 75, 3] }));

model.add(tf.layers.conv2d({ kernelSize: 5, filters: 128, activation: 'relu' }))
model.add(tf.layers.maxPooling2d({ poolSize: 2 }))

model.add(tf.layers.conv2d({ kernelSize: 5, filters: 64, activation: 'relu' }))
model.add(tf.layers.maxPooling2d({ poolSize: 2 }))

model.add(tf.layers.conv2d({ kernelSize: 3, filters: 32, activation: 'relu' }))
model.add(tf.layers.maxPooling2d({ poolSize: 2 }))

model.add(tf.layers.flatten())

//model.add(tf.layers.dropout({ rate: 0.5 }))
model.add(tf.layers.dense({ units: 512, activation: 'relu' }))
model.add(tf.layers.dense({ units: 2, activation: 'softmax' }))
model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
})
model.summary()
*/

const buildModel = function(context) {
    console.log('Creating Model')
    const layers = context.rootGetters['model/getLayers']

    const model = tf.sequential()
    model.add(tf.layers.inputLayer({ inputShape: [75, 75, 3] }));
    for (let layer of layers) {
        if (layer.type === 'Convolution') {
            model.add(tf.layers.conv2d({ kernelSize: layer.filterSize, filters: layer.outputDepth, activation: 'relu' }))
        } else if (layer.type === 'Pooling') {
            model.add(tf.layers.maxPooling2d({ poolSize: layer.poolSize }))
        } else if (layer.type === 'Flatten') {
            model.add(tf.layers.batchNormalization())
            model.add(tf.layers.flatten())
        } else if (layer.type === 'Dense') {
            model.add(tf.layers.dense({ units: layer.outputSize, activation: 'relu' }))
        }
    }
    //model.add(tf.layers.dropout({rate: 0.1}))
    model.add(tf.layers.dense({ units: 2, activation: 'sigmoid' }))
    console.log('Model created. Compiling...')
    model.compile({
        optimizer: tf.train.adam(0.0005),
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    })
    model.summary()
    return model
}

const trainModel = async(context, inputTensor, labelsTensor, split) => {
    const model = buildModel(context)

    const plannedEpochs = context.getters['getPlannedEpochs']
    console.log('Training started for ' + plannedEpochs + ' epochs.')

    model.fit(inputTensor, labelsTensor, {
        epochs: plannedEpochs,
        batchSize: 32,
        validationSplit: 0.3,
        callbacks: {
            onEpochEnd: async(epoch, logs) => {
                const nextEpoch = context.getters['getNextEpoch']
                const { val_loss, val_acc, loss, acc } = logs

                console.log(logs)
                context.commit('pushEpoch', [
                    nextEpoch + '',
                    acc,
                    val_acc
                ])
                const plannedEpochs = context.getters['getPlannedEpochs']
                if (plannedEpochs < 1) {
                    context.commit('setTrainingActive', false)
                } else if (context.getters['isTrainingActive']) {
                    //trainModel(context, inputTensor, labelsTensor, split)
                }
            }
        }
    })
}

const buildDataset = async(context, images, labels) => {
    console.log('Images loaded: ' + images.length)
    const split = context.rootGetters['dataset/getSplit']
    console.log('Initializing tensors...')
    const inputTensor = tf.tensor4d([].concat.apply([], images), [images.length, 75, 75, 3])
    const labelsTensor = tf.tensor2d(labels)
    console.log('Tensors created.')
    trainModel(context, inputTensor, labelsTensor, (split / 100) * images.length)
}

const loadImages = function(context, urls, labels) {
    const images = []
    const labelsInOrder = []
    for (let i = 0; i < urls.length; i++) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")
        const img = new Image()
        img.crossOrigin = "*";
        img.onload = async() => {
            ctx.drawImage(img, 0, 0)
            const imgData = ctx.getImageData(0, 0, 75, 75)

            // convert rgba to rgb
            const array = []
            for (let k = 0; k < imgData.data.length; k++) {
                if (k % 4 != 3) array.push(imgData.data[k])
            }
            images.push(array)
            labelsInOrder.push(labels[i])
            if (images.length == urls.length) {
                buildDataset(context, images, labelsInOrder)
            }
        }
        img.src = urls[i]
    }
}

const startTraining = function(context) {
    context.commit('setTrainingActive', true)
    const flickrImages0 = context.rootGetters['dataset/getData'](0)
    const flickrImages1 = context.rootGetters['dataset/getData'](1)
    const urls = []
    const labels = []
    for (let i = 0; i <= Math.min(flickrImages0.length, flickrImages1.length); i++) {
        if (flickrImages0[i] != undefined) {
            urls.push(flickrImages0[i].url_sq /*.replace('s.jpg', 'q.jpg')*/ )
            labels.push([1, 0])
        }
        if (flickrImages1[i] != undefined) {
            urls.push(flickrImages1[i].url_sq /*.replace('s.jpg', 'q.jpg')*/ )
            labels.push([0, 1])
        }
    }
    loadImages(context, urls, labels)
}

const pauseTraining = function(context) {
    context.commit('setTrainingActive', false)
}

const resetTraining = function(context) {
    context.commit('setTrainingActive', false)
    context.commit('reset')
}

export default {
    startTraining,
    pauseTraining,
    resetTraining
}
