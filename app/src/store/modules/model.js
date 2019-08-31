import Vue from 'vue'

const state = {
    inputSize: 75,
    inputDepth: 3,
    inputCompatible: true,
    layers: [],
    currentLayerKey: 0,
    outputSize: NaN
}

const mutations = {
    insertLayer: function(state, payload) {
        state.layers.splice(payload.index, 0, {
            type: payload.type
        })
    },
    removeLayer: function(state, index) {
        state.layers.splice(index, 1)
    },
    moveLayer: function(state, payload) {
        console.log(payload)
        const fromLayer = state.layers[payload.from]
        state.layers.splice(payload.from, 1)
            state.layers.splice(payload.to, 0, fromLayer)
    },
    updateLayer: function(state, payload) {
        Vue.set(state.layers[payload.index], payload.key, payload.value)
    },
    updateInputCompatibility: function(state, compatibility) {
        state.inputCompatible = compatibility
    },
    updateInputSize: function(state, size) {
        state.inputSize = size
    },
    updateOutputSize: function(state, size) {
        state.outputSize = size
    },
    incrementCurrentLayerKey: function(state) {
        state.currentLayerKey++
    }
}

const getters = {
    getLayer: state => i => {
        if (i < 0) return { type: 'Input', outputDepth: state.inputDepth, outputSize: state.inputSize, outputCompatible: state.inputCompatible }
        if (i >= state.layers.length) return { type: 'Output' }
        return state.layers[i]
    },
    getLayers: state => {
        return state.layers
    },
    getCurrentLayerKey: state => {
        return state.currentLayerKey
    },
    isInputCompatible: state => {
        return state.inputCompatible
    },
    getInputSize: state => {
        return state.inputSize
    },
    getModelSize: state => {
        return state.layers.length
    },
    getOutputSize: state => {
        return state.outputSize
    },
    isValid: state => {
        if(state.layers.length == 0 || !state.inputCompatible) return false
        for(let layer of state.layers) {
            if(!layer.outputCompatible) {
                return false
            }
        }
        return true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
