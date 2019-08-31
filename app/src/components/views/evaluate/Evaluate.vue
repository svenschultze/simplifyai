<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 5)">
                This view shows the images from the test dataset divided in four categories. 
                True Dogs and True Cats are images that were correctly classified as their respective class, 
                while False Dogs and False cats were classified as the wrong class. Under each image, 
                you can see the output of the neural network for that image.
                You can use this data to identify problems in your dataset, model or training.
            </info>
        </transition>
        <div class="container" :class="{'blurred': info_enabled}">
            <grid :columns="layout.columns" :gap="layout.gap">
                <grid-item class="image">
                    <h2 class="blue">True {{class0}}</h2>
                    <grid :columns="imgGrid.columns" :gap="imgGrid.gap">
                        <grid-item v-for="(prediction, index) in trueClass0" :key="prediction.url + index">
                            <prediction :image="prediction.url" :class0="class0" :class1="class1" :prediction="prediction.prediction" :correct="true"/>
                        </grid-item>
                    </grid>
                </grid-item>
                <grid-item class="image">
                    <h2 class="red">False {{class0}}</h2>
                    <grid :columns="imgGrid.columns" :gap="imgGrid.gap">
                        <grid-item v-for="(prediction, index) in falseClass0" :key="prediction.url + index">
                            <prediction :image="prediction.url" :class0="class0" :class1="class1" :prediction="prediction.prediction" :correct="false"/>
                        </grid-item>
                    </grid>
                </grid-item>
                <grid-item class="image">
                    <h2 class="blue">True {{class1}}</h2>
                    <grid :columns="imgGrid.columns" :gap="imgGrid.gap">
                        <grid-item v-for="(prediction, index) in trueClass1" :key="prediction.url + index">
                            <prediction :image="prediction.url" :class0="class0" :class1="class1" :prediction="prediction.prediction" :correct="true"/>
                        </grid-item>
                    </grid>
                </grid-item>
                <grid-item class="image">
                    <h2 class="red">False {{class1}}</h2>
                    <grid :columns="imgGrid.columns" :gap="imgGrid.gap">
                        <grid-item v-for="(prediction, index) in falseClass1" :key="prediction.url + index">
                            <prediction :image="prediction.url" :class0="class0" :class1="class1" :prediction="prediction.prediction" :correct="false"/>
                        </grid-item>
                    </grid>
                </grid-item>
            </grid>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'
    import EvaluatePrediction from './children/EvaluatePrediction.vue'

    export default {
        name: 'Evaluate',
        components: {
            'info': Info,
            'prediction': EvaluatePrediction
        },
        props: {
            data: Array
        },
        data: function() {
            return {
                layout: {
                    columns: ['22%', '22%', '22%', '22%'],
                    gap: '4%'
                },
                imgGrid: {
                    columns: ['auto'],
                    gap: '10px'
                }
            }
        },
        computed: {
            class0: function() {
                return this.$store.getters['dataset/getClass'](0)
            },
            class1: function() {
                return this.$store.getters['dataset/getClass'](1)
            },
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](5)
            },
            predictions: function() {
                return this.$store.getters['prediction/getPrediction']
            },
            trueClass0: function() {
                const predictions = this.$store.getters['prediction/getPrediction']
                const result = []
                for (let prediction of predictions) {
                    if (prediction.groundTruth[0] === 1 && prediction.groundTruth[1] === 0 && (prediction.prediction[0] > prediction.prediction[1])) {
                        result.push(prediction)
                    }
                }
                return result
            },
            falseClass0: function() {
                const predictions = this.$store.getters['prediction/getPrediction']
                const result = []
                for (let prediction of predictions) {
                    if (prediction.groundTruth[0] === 0 && prediction.groundTruth[1] === 1 && (prediction.prediction[0] > prediction.prediction[1])) {
                        result.push(prediction)
                    }
                }
                return result
            },
            trueClass1: function() {
                const predictions = this.$store.getters['prediction/getPrediction']
                const result = []
                for (let prediction of predictions) {
                    if (prediction.groundTruth[0] === 0 && prediction.groundTruth[1] === 1 && (prediction.prediction[1] > prediction.prediction[0])) {
                        result.push(prediction)
                    }
                }
                return result
            },
            falseClass1: function() {
                const predictions = this.$store.getters['prediction/getPrediction']
                const result = []
                for (let prediction of predictions) {
                    if (prediction.groundTruth[0] === 1 && prediction.groundTruth[1] === 0 && (prediction.prediction[1] > prediction.prediction[0])) {
                        result.push(prediction)
                    }
                }
                return result
            }
        }
    }
</script>

<style scoped>
    .base {
        margin-top: 50px;
        margin-bottom: 30vh;
    }

    h2.blue {
        color: #2699FB;
        text-align: center;
    }

    h2.red {
        color: #9e2c2c;
        text-align: center;
    }

    .image {
        background-color: #FFF;
        padding: 25px;
        box-shadow: 0px 0px 10px #0001;
    }
</style>
