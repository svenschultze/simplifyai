import Vue from 'vue'

const state = {
    handlers: {}
}

const mutations = {
    setHandler: function(state, { name, handler }) {
        Vue.set(state.handlers, name, handler)
    }
}

const getters = {
    getHandler: state => name => {
        return state.handlers[name]
    }
}

const actions = {
    notify: function(context, name) {
        context.getters['getHandler'](name)()
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
