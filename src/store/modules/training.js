import Vue from 'vue'

const state = {
    epochs: [],
    plannedEpochs: 10,
    trainingActive: false,
    columns: ['Epoch', 'Train', 'Test'],
    connected: true
}

const mutations = {
    pushEpoch: function(state, payload) {
        state.epochs.push(payload)
        state.plannedEpochs--
    },
    reset: function(state) {
        state.epochs = []
    },
    setPlannedEpochs: function(state, plannedEpochs) {
        state.plannedEpochs = plannedEpochs
    },
    setTrainingActive: function(state, active) {
        state.trainingActive = active
    },
    setConnected: function(state, connected) {
        state.connected = connected
    }
}

import actions from './trainer/BackendTrainer.js'

const getters = {
    getEpochs: state => {
        return state.epochs
    },
    getPlannedEpochs: state => {
        return state.plannedEpochs
    },
    isTrainingActive: state => {
        return state.trainingActive
    },
    getNextEpoch: state => {
        return state.epochs.length
    },
    getChartData: state => {
        let copy = state.epochs.slice()
        copy.unshift(state.columns)
        for (let i = 1; i <= state.plannedEpochs; i++) {
            copy.push([(state.epochs.length + i) + "", NaN, NaN])
        }
        if (state.plannedEpochs == 0 && state.epochs.length == 0) {
            copy.push(["", NaN, NaN])
        }
        return copy
    },
    isConnected: state => {
        return state.connected
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
