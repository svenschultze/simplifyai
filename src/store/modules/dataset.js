import Vue from 'vue'

const state = {
    classes: ["Dogs", "Cats"],
    data: [[], []],
    split: 50
}

const mutations = {
    setClass: function(state, payload) {
        Vue.set(state.classes, payload.i, payload.newClass)
    },
    setData: function(state, payload) {
        Vue.set(state.data, payload.i, payload.newData)
    },
    unsetData: function(state, i) {
        Vue.set(state.data, i, new Array(200).fill(false))
    },
    replaceImage: function(state, payload) {
        Vue.set(state.data[payload.i], payload.position, false)
    },
    setImage: function(state, payload) {
        Vue.set(state.data[payload.i], payload.position, payload.image)
    },
    setSplit: function(state, newSplit) {
        state.split = newSplit
    }
}

const getters = {
    getClass: state => i => {
        return state.classes[i]
    },
    getData: state => i => {
        return state.data[i]
    },
    getSplit: state => {
        return state.split
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
