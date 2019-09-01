<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 2)">
                Now, you have to split the dataset into two parts. The first part of the dataset is used in the training process. 
                This is the part that the neural network is exposed to in order to learn, how to classify the images. The second 
                part is used to test the performance of the neural network. These images will never effect the state of the neural 
                network to preserve valid results in the test. The more images in the train dataset, the better the neural network 
                will perform. The more images in the test dataset, the more representative will the test results be.
            </info>
        </transition>
        <div class="container" :class="{'blurred': info_enabled}">
            <preprocess-slider/>
            <preprocess-visual/>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'
    
    import PreprocessSlider from './children/PreprocessSlider.vue'
    import PreprocessVisual from './children/PreprocessVisual.vue'

    export default {
        name: 'Preprocess',
        components: {
            'info': Info,
            'preprocess-slider': PreprocessSlider,
            'preprocess-visual': PreprocessVisual
        },
        data: function() {
            return {
                tweened_split: this.$store.getters['dataset/getSplit'],
                columns: [
                    '2.4vw', 
                    'calc(' + this.animatedNumber + '% - 2.4vw)', 
                    'calc(' + (100 - this.animatedNumber) + '% - 2.4vw)', 
                    '2.4vw'
                ]
            }
        },
        computed: {
            animatedNumber: function() {
                return this.tweened_split.toFixed(0);
            },
            class0: function() {
                return this.$store.getters['dataset/getClass'](0)
            },
            class1: function() {
                return this.$store.getters['dataset/getClass'](1)
            },
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](2)
            }
        },
        methods: {
            setSplit: function(newSplit) {
                this.$store.commit('dataset/setSplit', newSplit)
                this.$tween.to(this.$data, 1, { tweened_split: newSplit });
            }
        }
    }
</script>

<style scoped>
    .base {
        margin-top: 50px;
    }
</style>
