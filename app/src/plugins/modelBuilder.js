import Vue from 'vue'

const initialLayerValues = {
    Convolution: { filterSize: 3, inputSize: NaN, inputDepth: NaN, outputSize: NaN, outputDepth: 32, outputCompatible: true },
    Pooling: { poolSize: 2, inputSize: NaN, inputDepth: NaN, outputSize: NaN, outputDepth: NaN, outputCompatible: true },
    Flatten: { inputSize: NaN, inputDepth: NaN, outputSize: NaN, outputCompatible: true },
    Dense: { inputSize: NaN, outputSize: 64, outputCompatible: true }
}

const layerOutputFunctions = {
    Convolution: function() {
        this.outputSize = this.inputSize - this.filterSize + 1
    },
    Pooling: function() {
        this.outputSize = Math.floor(this.inputSize / this.poolSize)
        this.outputDepth = this.inputDepth
    },
    Flatten: function() {
        this.outputSize = this.inputSize * this.inputSize * this.inputDepth
    },
    Dense: function() {}
}

const layerCompatibility = {
    Input: { output: 'Tensor' },
    Convolution: { input: 'Tensor', output: 'Tensor' },
    Pooling: { input: 'Tensor', output: 'Tensor' },
    Flatten: { input: 'Tensor', output: 'Vector' },
    Dense: { input: 'Vector', output: 'Vector' },
    Output: { input: 'Vector' }
}

const initializeLayer = function(store, payload) {
    const layer = store.getters['model/getLayer'](payload.index)

    for (var key in initialLayerValues[layer.type]) {
        Vue.set(layer, key, initialLayerValues[layer.type][key])
    }

    const currentLayerKey = store.getters['model/getCurrentLayerKey']
    Vue.set(layer, 'key', currentLayerKey)
    store.commit('model/incrementCurrentLayerKey')

    const layerOutputFunction = layerOutputFunctions[layer.type]
    Vue.set(layer, 'calculateOutput', layerOutputFunction)
}

const checkCompatibility = function(store, index) {
    const layer = store.getters['model/getLayer'](index)
    const nextLayer = store.getters['model/getLayer'](index + 1)
    // determine compatibility
    const compatibility = layerCompatibility[layer.type].output === layerCompatibility[nextLayer.type].input
    if(index == -1)
        store.commit('model/updateInputCompatibility', compatibility)
    else
        Vue.set(layer, 'outputCompatible', compatibility)
    
    // repeat for next layer if not output
    if(nextLayer.type != 'Output')
        checkCompatibility(store, index + 1)
}

const updateModel = function(store, indexOfChange) {
    const previousLayer = store.getters['model/getLayer'](indexOfChange - 1)

    // stop condition
    if (indexOfChange >= store.getters['model/getModelSize']) {
        if (previousLayer.outputCompatible) {
            store.commit('model/updateOutputSize', previousLayer.outputSize)
        }
        else {
            store.commit('model/updateOutputSize', NaN)
        }
        return
    }
    
    const layer = store.getters['model/getLayer'](indexOfChange)
    
    // determine input of layer
    if (previousLayer.outputCompatible) {
        Vue.set(layer, 'inputSize', previousLayer.outputSize)
        Vue.set(layer, 'inputDepth', previousLayer.outputDepth)
    }
    else {
        Vue.set(layer, 'inputSize', NaN)
        Vue.set(layer, 'inputDepth', NaN)
    }

    layer.calculateOutput()
    
    // repeat for next layer
    updateModel(store, indexOfChange + 1)
}

const init = function(store) {
    store.subscribe((mutation) => {
        if (mutation.type === 'model/insertLayer') {
            initializeLayer(store, mutation.payload)
            checkCompatibility(store, mutation.payload.index - 1)
            updateModel(store, mutation.payload.index)
        }
        else if (mutation.type === 'model/updateLayer') {
            updateModel(store, mutation.payload.index)
        }
        else if (mutation.type === 'model/updateInputSize') {
            updateModel(store, 0)
        }
        else if (mutation.type === 'model/moveLayer') {
            const lowerIndex = Math.min(mutation.payload.from, mutation.payload.to)
            checkCompatibility(store, lowerIndex - 1)
            updateModel(store, lowerIndex)
        }
        else if (mutation.type === 'model/removeLayer') {
            checkCompatibility(store, mutation.payload - 1)
            updateModel(store, mutation.payload)
        }
    })
}

export default store => init(store)
