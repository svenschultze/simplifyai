import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

/* Router */
import router from './router'

/* Vuex */
import store from './store/store.js'

/* Grid Layout */
import { CssGrid, CssGridItem, ViewportListener } from 'vue-css-grid'
Vue.component('grid', CssGrid)
Vue.component('grid-item', CssGridItem)
Vue.component('viewport-listener', ViewportListener)

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
library.add(fab)
Vue.component('icon', FontAwesomeIcon)

/* File Drop */
import { Drop } from 'vue-drag-drop';
Vue.component('drop', Drop);

/* Drag & Drop */
import { Container, Draggable } from "vue-smooth-dnd";
Vue.component('container', Container);
Vue.component('draggable', Draggable);

/* Slider */
import vueSlider from 'vue-slider-component';
Vue.component('slider', vueSlider)

/* Google Charts */
import VueGoogleCharts from 'vue-google-charts'
Vue.use(VueGoogleCharts)

/* Animated Numbers */
import TweenMax from "gsap/TweenMax";
Object.defineProperty(Vue.prototype, '$tween', { value: TweenMax });

/* Nif */
import Snotify, { SnotifyPosition } from 'vue-snotify'
const options = {
  toast: {
    position: SnotifyPosition.leftBottom
  }
}

Vue.use(Snotify, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
