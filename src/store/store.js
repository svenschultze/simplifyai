import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import dataset from './modules/dataset.js'
import model from './modules/model.js'
import views from './modules/views.js'
import training from './modules/training.js'
import prediction from './modules/prediction.js'
import notifications from './modules/notifications.js'

import imageLoader from '@/plugins/imageLoader.js'
import modelBuilder from '@/plugins/modelBuilder.js'

import createPersistedState from 'vuex-persistedstate'

import { createSocketioPlugin } from 'vuex-socketio-plugin'
import * as io from 'socket.io-client'

export default new Vuex.Store({
    modules: {
        dataset,
        model,
        views,
        training,
        prediction,
        notifications
    },
    plugins: [
        imageLoader,
        modelBuilder,
        createSocketioPlugin('http://dev.sschultze.de:4444/training')
        //createPersistedState()
    ]
})
