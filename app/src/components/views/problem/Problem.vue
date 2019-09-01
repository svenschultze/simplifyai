<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 0)">
                In the last years, the increase in computational capability
                and the availability of large amounts of data have led to big
                breakthroughs in the area of deep learning. It is an approach to
                computational intelligence that is based upon our knowledge of the
                human brain. Deep learning uses so called neural networks, which
                are complex structures of interconnected artificial neurons, to
                solve a vast amount of problems that were not solvable before.
                This is possible, because the neural networks are able to learn
                from large amounts of data to compute a solution to the problem.
                Thus, a user of this technology only needs to understand the problem
                and its answers, not the solution itself.
            </info>
        </transition>
        <div id="content" :class="{'blurred': info_enabled}">
            <v-container>
                <div class="card">
                    <div class="text">
                        <h2>Image Processing in Deep Learning</h2>
                        <p>
                            Image processing is one of the many applications of deep learning. For example, you can use deep learning to classify images.
                            Given a large amount of images, you want to sort them into two classes: Dogs and Cats. Traditionally, you would have to sort them manually by dragging them into their respective folder. Try it out:
                        </p>
                    </div>
                    <div class="demo-overlay">
                        <problem-classification-demo/>
                    </div>
                </div>
            </v-container>
            <div class="container card">
                <div class="text">
                    <h2>Classifying Images with Neural Networks</h2>
                    <p>
                        As you can tell, this is very inefficient for a very large amount of images.
                        This is where deep learning can help. Instead of sorting the images manually,
                        we use a trained neural network to predict for each image, if it shows a cat or a dog.
                        The neural network will return two values from zero to one,
                        which represent the probabilities that the image belongs to the respective class.
                    </p>
                </div>
                <div class="demo-overlay">
                    <img src="@/assets/Automated.svg">
                </div>
            </div>

            <div class="container card">
                <div class="text">
                    <h2>Next Steps</h2>
                    <p>
                        The navigation bar on the top shows different steps of the deep learning workflow.
                        You can start by selecting the DATA tab to build your dataset. Whenever you finish a step,
                        just select the next tab to proceed. In the end, please select the FEEDBACK button on the top right
                        to help us improve this application.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'

    import ProblemClassificationDemo from './children/ProblemClassificationDemo.vue'

    export default {
        name: 'Problem',
        components: {
            'info': Info,
            'problem-classification-demo': ProblemClassificationDemo
        },
        computed: {
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](0)
            }
        }
    }
</script>

<style scoped lang="scss">

    #content {
        transition: all .8s linear;
        .container {
            position: static;
            width: calc(40% + 300px);
            max-width: 90vw;
            margin-right: auto;
            margin-left: auto;
            text-align: justify;
            margin-bottom: 60px;
            margin-top: 70px;
            padding: 0;
        }
    }

    .text {
        position: relative;
        color: #1471c1;
        font-size: 1.6em;
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
        padding: 20px 50px;
    }

    .card {
        background-color: #FFF;
        border-radius: 10px;
        -moz-box-shadow: 0 0 10px #000000;
        -webkit-box-shadow: 0 0 10px #00000022;
        box-shadow: 0 0 10px #00000022;
        overflow: hidden;
    }

    .demo-overlay {
        background-color: #1471c1;
        padding: 50px 50px;
    }

    .base {
        padding-top: 50px;
        margin-bottom: 20vh;
    }
</style>
