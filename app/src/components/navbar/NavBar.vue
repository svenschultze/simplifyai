<template>
    <div class="base navigation">
        <div v-for="(view, index) in views" class="steps">
            <RightArrow v-if="index" @activate="activate(index)" :disabled="(navigationSkill + 1 < index)"></RightArrow>
            <Link @activate="activate(index)" :disabled="(navigationSkill + 1 < index)" :class="{active:(activeViewID===index)}">
                {{ view.title }}
            </Link>
        </div>
        <Feedback />
    </div>
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
        computed: {
            navigationSkill: function() {
                return this.$store.getters['views/getNavigationSkill']
            },
            activeViewID: function() {
                return this.$store.getters['views/getActiveView']
            }
        },
        props: {
            views: Array
        },
        methods: {
            activate: function(id) {
                if(id != this.activeViewID)
                    this.$store.dispatch('views/setView', id)
                else 
                    this.$store.commit('views/toggleInfo', this.activeViewID)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .base {
        z-index: 11;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #1471c1;
    }

    .active {
        background-color: #278be4;
    }

    .steps {
        float: left;
    }
    
    .navigation {
        box-shadow: 0 3px 10px #0002;
    }
</style>
