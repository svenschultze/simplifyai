import Vue from 'vue'

const state = {
    activeView: 0,
    navigationSkill: 0,
    infosEnabled: new Array(7).fill(true),
    modal_enabled: false
}

const mutations = {
    setView: function(state, newView) {
        state.activeView = newView
        if (newView > state.navigationSkill) {
            state.navigationSkill = newView
        }
    },
    setSkill: function(state, newSkill) {

    },
    toggleInfo: function(state, viewID) {
        Vue.set(state.infosEnabled, viewID, !state.infosEnabled[viewID])
    },
    toggleModal: function(state) {
        state.modal_enabled = !state.modal_enabled
    }
}

const actions = {
    setView: function(context, newView) {
        if (newView <= 3) {
            context.commit('setView', newView)
            return
        }
        if (newView >= 4) {
            if (!context.rootGetters['model/isValid']) {
                context.dispatch('notifications/notify', 'invalidModel', { root: true })
                return
            } else if (newView == 4) {
                context.commit('setView', newView)
            }
        }
        if (newView >= 5) {
            if (context.rootGetters['prediction/getPrediction'].length > 0) {
                context.commit('setView', newView)
            } else {
                context.dispatch('notifications/notify', 'modelNotTrained', { root: true })
            }
            return
        }
    }
}

const getters = {
    getActiveView: state => {
        return state.activeView
    },
    getNavigationSkill: state => {
        return state.navigationSkill
    },
    isInfoEnabled: state => i => {
        return state.infosEnabled[i]
    },
    isModalEnabled: state => {
        return state.modal_enabled
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
