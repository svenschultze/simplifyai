import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#2C40DF",
                primary_dark: "#05131f",
                secondary: "#913191",
                secondary_dark: "#5c2e73",
                accent: "#82B1FF",
                error: "#ba2323",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
                light_grey: "#f4f5f7"
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
})
