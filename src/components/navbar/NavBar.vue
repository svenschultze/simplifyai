<template lang="pug">
    .navbar
        .links(v-for="(view, index) in views")
            v-btn.arrow(v-if="index" dark icon x-large @click="activate(index)")
                v-icon mdi-chevron-right
            v-btn(text dark x-large @click="activate(index)" activate-class="active" :class="{active:(activeViewID===index)}") {{ view.title }}
        v-btn.feedback(text dark x-large @click="enableModal") FEEDBACK
</template>

<script>
import Link from './children/NavBarLink.vue'
import RightArrow from './children/NavBarArrow.vue'
import Feedback from './children/NavBarFeedback.vue'

export default {
    name: 'NavBar',
    components: {
        'Link': Link,
        'RightArrow': RightArrow,
        'Feedback': Feedback
    },
    props: {
        views: Array
    },
    computed: {
        navigationSkill: function () {
            return this.$store.getters['views/getNavigationSkill']
        },
        activeViewID: function () {
            return this.$store.getters['views/getActiveView']
        }
    },
    methods: {
        activate: function (id) {
            if (id != this.activeViewID)
                this.$store.dispatch('views/setView', id)
            else
                this.$store.commit('views/toggleInfo', this.activeViewID)
        },
        enableModal: function () {
            this.$store.commit('views/toggleModal')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    background: rgb(45, 63, 179);
    position: fixed;
    width: 100%;
    z-index: 100;

    .links {
        float: left;
        button {
            font-size: 1em;
            border-radius: 0;

            &.arrow {
                width: 40px !important;
            }

            &.active {
                background: rgb(68, 91, 224);
            }

        }
    }

    button.feedback {
        float: right;
        border-radius: 0;
    }
}

.container {
    padding-top: 0;
    padding-bottom: 0;

    .logo {
        width: 4.5em;
    }

    button {
        color: white !important;
        font-size: 1em;
        border-radius: 0;
    }

    .links {
        float: right;
    }

    .burger {
        float: right;
    }
}
</style>
