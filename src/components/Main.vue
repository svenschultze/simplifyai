<template>
    <div>
        <transition name="slide-modal">
            <feedback-modal v-if="modal_enabled" />
        </transition>
        <div class="blur-transition" :class="{'blurred': modal_enabled}">
            <nav-bar :views="views" />
            <component :is="activeView" />
            <notifier />
        </div>
    </div>
</template>

<script>
import NavBar from "./navbar/NavBar.vue"

import FeedbackModal from "./modal/FeedbackModal.vue"
import Notifier from "./notifier/Notifier.vue"

import Problem from "./views/problem/Problem.vue"
import Data from "./views/data/Data.vue"
import Preprocess from "./views/preprocess/Preprocess.vue"
import Model from "./views/model/Model.vue"
import Train from "./views/train/Train.vue"
import Evaluate from "./views/evaluate/Evaluate.vue"
import Test from "./views/upload/Upload.vue"

export default {
    name: "Main",
    components: {
        "nav-bar": NavBar,
        "problem-view": Problem,
        "data-view": Data,
        "preprocess-view": Preprocess,
        "model-view": Model,
        "train-view": Train,
        "evaluate-view": Evaluate,
        "upload-view": Test,
        "feedback-modal": FeedbackModal,
        notifier: Notifier
    },
    data: function() {
        return {
            views: [
                { component: "problem-view", title: "PROBLEM" },
                { component: "data-view", title: "DATA" },
                { component: "preprocess-view", title: "PREPROCESS" },
                { component: "model-view", title: "MODEL" },
                { component: "train-view", title: "TRAIN" },
                { component: "evaluate-view", title: "EVALUATE" },
                { component: "upload-view", title: "UPLOAD" }
            ]
        }
    },
    computed: {
        activeViewID: function() {
            return this.$store.getters["views/getActiveView"]
        },
        activeView: function() {
            return this.views[this.activeViewID].component
        },
        modal_enabled: function() {
            return this.$store.getters["views/isModalEnabled"]
        }
    }
}
</script>

<style lang="scss">
@import "~vue-snotify/styles/material";
.snotify-error {
    background-color: #9e2c2c;
}

.snotify-info {
    background-color: #1471c1;
}

.snotify-success {
    background-color: #2a896d;
}

.snotify {
    width: 350px;
}

.container {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    text-align: justify;
    transition: all 0.8s linear;
}

.blurred {
    filter: blur(10px);
    pointer-events: none;
    user-select: none;
}

.blur-transition {
    -webkit-transition: 0.3s -webkit-filter linear;
    -moz-transition: 0.3s -moz-filter linear;
    -o-transition: 0.3s -o-filter linear;
    transition: 0.3s filter linear;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

body {
    background-color: #f4faff;
}

img {
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
}

.slide-fade-leave-active,
.slide-fade-enter-active {
    transition: all 0.5s linear;
}

.slide-fade-leave-to,
.slide-fade-enter {
    transform: translateY(-100%);
    opacity: 1;
}

.slide-modal-leave-active,
.slide-modal-enter-active {
    transition: all 0.3s linear;
    opacity: 1;
}

.slide-modal-leave-to,
.slide-modal-enter {
    opacity: 0;
}
</style>
