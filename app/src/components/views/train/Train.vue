<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 4)">
                This view represents the training process. You can use the buttons on the right to start or reset the training process. 
                The graph on the left shows the accuracies on the train and test dataset during the process. This step requires a lot of trial and error. 
                Too few epochs can result in underfitting, too many in overfitting. To learn more about these concepts, watch the video on the right. 
                Do not be afraid to go back to the MODEL tab to experiment with different architectures. 
                When you are satisfied with your results, proceed to the TEST tab to see the neural network in action.
            </info>
        </transition>
        <div class="content" :class="{'blurred': info_enabled}">
            <train-controls/>
            <train-statistic/>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'
    
    import TrainControls from './children/TrainControls.vue'
    import TrainStatistics from './children/TrainStatistics.vue'

    export default {
        name: 'Train',
        components: {
            'info': Info,
            'train-controls': TrainControls,
            'train-statistic': TrainStatistics
        },
        computed: {
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](4)
            },
            activeViewID: function() {
                return this.$store.getters['views/getActiveView']
            }
        }
    }
</script>

<style scoped>
    .content {
        transition: all .8s linear;
    }

    .base {
        margin-top: calc(50px + 3vh);
    }
</style>
