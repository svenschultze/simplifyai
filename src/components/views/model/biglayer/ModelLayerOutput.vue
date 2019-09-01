<template>
    <div v-if="expanded" class="layer-expanded">
        <svg width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="PuzzleBase" d="M191.837,0l156.191,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-346.056,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0l0,9.338l33.664,0l0,-9.338Z" style="fill:#506373;" />
            <g id="Header">
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Output</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#647c90;" />
                <g id="Input">
                    <path id="InputBase" d="M97.683,23.932c0,-1.202 -0.976,-2.177 -2.177,-2.177l-85.555,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l85.555,0c1.201,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <foreignObject id="InputVis1" serif:id="InputVis" x="10.774" y="35.267" width="83.7" height="55.646" style="fill:#fff;">
                        <neurons :size="inputSize"></neurons>
                    </foreignObject>
                    <text id="InputTitle" x="29.631px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">I<tspan x="31.417px 35.343px 39.27px 43.197px 45.338px 47.479px 49.265px 52.84px 57.482px 59.03px 63.672px 66.174px 68.676px 72.251px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">nput: 1D Array</tspan></text>
                </g>
                <path id="Expand1" serif:id="Expand" d="M118.297,58.041l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
                <g id="Output">
                    <path id="OutputBase" d="M228.82,23.932c0,-1.202 -0.975,-2.177 -2.177,-2.177l-95.646,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l95.646,0c1.202,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <foreignObject id="InputVis1" serif:id="InputVis" x="131.774" y="35.267" width="94" height="55.646" style="fill:#fff;">
                        <prediction :class0="class0" :class1="class1" />
                    </foreignObject>
                    <text id="OutputTitle" x="150.609px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">O<tspan x="155.609px 159.536px 161.677px 165.604px 169.53px 171.671px 173.812px 175.598px 179.886px 182.388px 185.963px 189.89px 191.676px 195.251px 197.392px 199.178px 203.105px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">utput: Prediction</tspan></text>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/Z0KVRdE_a7Q?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M191.837,0l156.191,0c1.088,0 1.972,0.887 1.972,1.98l0,12.52c0,1.092 -0.883,1.979 -1.972,1.98l-346.056,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-12.52c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0l0,9.338l33.664,0l0,-9.338Z" style="fill:#506373;" />
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Output</tspan></text>
            <g id="ExpandButton" @click="expanded=true" class="non-drag">
                <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                <path id="Expand" d="M15.395,8.223l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
            </g>
        </g>
    </svg>
</template>

<script>
    import Neurons from './datatypes/Neurons.vue'
    import Prediction from './datatypes/Prediction.vue'
    
    export default {
        name: 'ModelLayerOutput',
        components: {
            'neurons': Neurons,
            'prediction': Prediction
        },
        data: function() {
            return {
                expanded: true,
                videoStarted: false
            }
        },
        computed: {
            class0: function() {
                return this.$store.getters['dataset/getClass'](0)
            },
            class1: function() {
                return this.$store.getters['dataset/getClass'](1)
            },
            inputSize: function() {
                return this.$store.getters['model/getOutputSize']
            }
        }
    }
</script>

<style scoped>
    #ExpandButton {
        cursor: pointer;
    }
    
    .layer-expanded {
        position: relative;
    }
    
    .video {
        position: absolute;
        top: 15%;
        right: 0.9%;
        width: 31.5%;
        height: 73%;
        border-radius: 10px;
        overflow: hidden;
        background-color: #000;
    }
    
    .video iframe {
        width: 100%;
        height: 100%;
    }
    
    .video .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #2b343b;
        cursor: pointer;
    }
    
    .video .overlay:hover {
        background-color: #151719;
        cursor: pointer;
    }
    
    .video .overlay svg {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        font-size: 5vw;
        color: #c12121;
    }
</style>