<template lang="pug">
.base
    transition(name='slide-fade')
        info(v-if='info_enabled' @closed="$store.commit('views/toggleInfo', 0)")
            | In recent years, the growth of computational capability
            | and the availability of large amounts of data have led to big
            | breakthroughs in the area of deep learning. It is an approach to
            | computational intelligence that is based upon our knowledge of the
            | human brain. Deep learning uses so called neural networks, which
            | are complex structures of interconnected artificial neurons, to
            | solve a vast amount of problems that were not solvable before.
            | This is possible, because the neural networks are able to learn
            | from large amounts of data to compute a solution to the problem.
            | Thus, a user of this technology only needs to understand the problem
            | and its answers, not the solution itself.
    #content(:class="{'blurred': info_enabled}")
        v-container
            v-card
                .text
                    h2 Image Processing in Deep Learning
                    p
                    | Image processing is one of the many applications of deep learning. For example, you can use deep learning to classify images.
                    | Given a large amount of images, you want to sort them into two classes: Dogs and Cats. Traditionally, you would have to sort them manually by dragging them into their respective folder. Try it out:
                .demo-overlay
                    problem-classification-demo
        v-container
            v-card
                .text
                    h2 Classifying Images with Neural Networks
                    p
                    | As you can tell, this is very inefficient for a very large amount of images.
                    | This is where deep learning can help. Instead of sorting the images manually,
                    | we use a trained neural network to predict for each image, if it shows a cat or a dog.
                    | The neural network will return two values from zero to one,
                    | which represent the probabilities that the image belongs to the respective class.
                .demo-overlay
                    img(src='@/assets/Automated.svg')
        v-container
            v-card
                .text
                    h2 Next Steps
                    p
                    | The navigation bar on the top shows different steps of the deep learning workflow.
                    | You can start by selecting the DATA tab to build your dataset. Whenever you finish a step,
                    | just select the next tab to proceed. In the end, please select the FEEDBACK button on the top right
                    | to help us improve this application.
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
        info_enabled: function () {
            return this.$store.getters['views/isInfoEnabled'](0)
        }
    }
}
</script>

<style scoped lang="scss">
#content {
    transition: all 0.8s linear;

    .container {
        width: calc(40% + 400px);
        max-width: 100%;
    }
}

.text {
    position: relative;
    color: rgb(45, 63, 179);
    font-size: 1.3em;
    padding: 20px 50px;
}

.demo-overlay {
    background-color: rgb(45, 63, 179);
    padding: 50px 50px;
}

.base {
    padding-top: 50px;
    margin-bottom: 20vh;
}
</style>
