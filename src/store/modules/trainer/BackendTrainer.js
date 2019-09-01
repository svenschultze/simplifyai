var client = undefined

const keepAlive = function() {
    if(client != undefined) {
        client.emit('keepAlive')
    }
}
setInterval(keepAlive, 100000)

const startTraining = function(context) {
    context.commit('setTrainingActive', true)
    const trainingData = JSON.stringify({
        model: context.rootGetters['model/getLayers'],
        inputSize: context.rootGetters['model/getInputSize'],
        datasetClass0: context.rootGetters['dataset/getData'](0),
        datasetClass1: context.rootGetters['dataset/getData'](1),
        split: context.rootGetters['dataset/getSplit'] / 100,
        epochs: context.rootGetters['training/getPlannedEpochs']
    })

    client.emit('requestTraining', trainingData)
    
    context.dispatch('notifications/notify', 'loadingImages', { root: true })
}

const socket_epochFinished = function(context, payload) {
    const nextEpoch = context.getters['getNextEpoch']
    context.commit('pushEpoch', [
        nextEpoch + 1 + '',
        payload.data[0].acc[0],
        payload.data[0].val_acc[0]
    ])
    const plannedEpochs = context.getters['getPlannedEpochs']
    if (plannedEpochs < 1) {
        context.commit('setTrainingActive', false)
    }
    
    context.dispatch('notifications/notify', 'trainingStarted', { root: true })
}

const pauseTraining = function(context) {
    context.commit('setTrainingActive', false)
    client.emit('pauseTraining')
}

const resetTraining = function(context) {
    context.commit('setTrainingActive', false)
    client.emit('resetTraining')
}

const socket_predictionFinished = function(context, payload) {
    context.commit('prediction/setPrediction', payload, { root: true })
    context.dispatch('notifications/notify', 'trainingFinished', { root: true })
}

const requestPrediction = function(context, payload) {
    console.log(payload)
    client.emit('predict', JSON.stringify(payload))
}

const socket_uploadPredicted = function(context, payload) {
    context.commit('prediction/addUpload', payload.data[0], { root: true })
}

const socket_reset = function(context, payload) {
    context.commit('reset')
}

const socket_connect = function(context, payload) {
    console.log('Connected to backend')
    client = payload.client
    context.commit('setConnected', true)
}

const socket_reconnect = function(context, payload) {
    console.log('Connected to backend')
    client = payload.client
    context.commit('setConnected', true)
    context.dispatch('notifications/notify', 'reconnected', { root: true })
}

const socket_connect_error = function(context, payload) {
    console.log('Connection Error')
    if(context.getters['isConnected']) {
        context.commit('setConnected', false)
        context.dispatch('notifications/notify', 'disconnected', { root: true })
    }
}

export default {
    startTraining,
    pauseTraining,
    resetTraining,
    requestPrediction,
    socket_reset,
    socket_connect,
    socket_reconnect,
    socket_connect_error,
    socket_epochFinished,
    socket_predictionFinished,
    socket_uploadPredicted
}
