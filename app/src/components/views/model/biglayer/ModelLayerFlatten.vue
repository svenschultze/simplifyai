<template>
    <div v-if="expanded" class="layer-expanded">
        <svg v-if="expanded" width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <path id="PuzzleBase" d="M159.085,102.687l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.112,0l0,9.313l-31.831,0l0,-9.313Z" style="fill:#7657f0;" />
            <text id="PuzzleOutput" x="175px" y="106.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">
                {{layer.outputSize}}
            </text>
            <g id="Header">
                <g id="Remove" @click="removeLayer" class="non-drag">
                    <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
                    <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#7657f0;fill-rule:nonzero;" />
                </g>
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Flatten</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#8565ff;" />
                <g id="Symbol">
                    <path id="in" d="M82.321,60.474l0,5.188l-5.187,0l0,-5.188l5.187,0Zm17.957,0l0,5.188l-5.187,0l0,-5.188l5.187,0Zm-11.971,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm5.986,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm-11.972,-5.986l0,5.188l-5.187,0l0,-5.188l5.187,0Zm17.957,0l0,5.188l-5.187,0l0,-5.188l5.187,0Zm-11.971,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm5.986,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm-11.972,-6.013l0,5.188l-5.187,0l0,-5.188l5.187,0Zm17.957,0l0,5.188l-5.187,0l0,-5.188l5.187,0Zm-11.971,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm5.986,0l0,5.188l-5.188,0l0,-5.188l5.188,0Zm-11.972,-5.985l0,5.187l-5.187,0l0,-5.187l5.187,0Zm17.957,0l0,5.187l-5.187,0l0,-5.187l5.187,0Zm-11.971,0l0,5.187l-5.188,0l0,-5.187l5.188,0Zm5.986,0l0,5.187l-5.188,0l0,-5.187l5.188,0Z" style="fill:#fff;" />
                    <rect id="out" x="119.843" y="42.091" width="5.176" height="23.998" style="fill:#fff;" />
                    <g id="arrow">
                        <path d="M104.014,54.089l12.996,0" style="fill:none;stroke:#fff;stroke-width:1.6px;" />
                        <path d="M117.01,54.089l-3.533,3.894" style="fill:none;stroke:#fff;stroke-width:1.6px;" />
                        <path d="M117.01,54.089l-3.669,-3.893" style="fill:none;stroke:#fff;stroke-width:1.6px;" />
                    </g>
                </g>
                <text id="PuzzleOutput1" serif:id="PuzzleOutput" x="100.41px" y="74.666px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:5px;fill:#fff;">
                    {{layer.inputSize}}x{{layer.inputSize}}x{{layer.inputDepth}} = {{layer.outputSize}}
                </text>
                <g id="Input">
                    <path id="InputBase" d="M63.43,23.425c0,-0.922 -0.748,-1.67 -1.67,-1.67l-52.316,0c-0.922,0 -1.67,0.748 -1.67,1.67l0,69.234c0,0.921 0.748,1.669 1.67,1.669l52.316,0c0.922,0 1.67,-0.748 1.67,-1.669l0,-69.234Z" style="fill:#435361;" />
                    <foreignObject id="InputVis" x="10.938" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <tensor3 :size="layer.inputSize" v-if="layer.inputDepth == 3"></tensor3>
                        <tensor8 :size="layer.inputSize" v-else-if="layer.inputDepth == 8"></tensor8>
                        <tensor16 :size="layer.inputSize" v-else-if="layer.inputDepth == 16"></tensor16>
                        <tensor32 :size="layer.inputSize" v-else-if="layer.inputDepth == 32"></tensor32>
                        <tensor64 :size="layer.inputSize" v-else-if="layer.inputDepth == 64"></tensor64>
                    </foreignObject>
                    <text id="InputTitle" x="12.504px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">I<tspan x="14.29px 18.217px 22.144px 26.071px 28.211px 30.352px 32.138px 35.713px 40.356px 41.903px 46.546px 49.048px 51.549px 55.125px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">nput: 3D Array</tspan></text>
                </g>
                <g id="Output">
                    <path id="OutputBase" d="M228.82,23.932c0,-1.202 -0.975,-2.177 -2.177,-2.177l-86.525,0c-1.202,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.975,2.177 2.177,2.177l86.525,0c1.202,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <foreignObject id="OutputVis" x="141.769" y="35.267" width="83.7" height="55.646" style="fill:#fff;">
                        <neurons :size="layer.outputSize"></neurons>
                    </foreignObject>
                    <text id="OutputTitle" x="157.605px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">O<tspan x="162.605px 166.532px 168.673px 172.6px 176.527px 178.667px 180.808px 182.594px 186.169px 190.812px 192.359px 197.002px 199.504px 202.005px 205.581px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">utput: 1D Array</tspan></text>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/lsgnHFQNez8?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M159.085,16.48l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-12.52c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,12.52c0,1.092 -0.883,1.979 -1.972,1.98l-157.112,0l0,9.312l-31.831,0l0,-9.312Z" style="fill:#7657f0;" />
        <text id="PuzzleOutput" x="175.466px" y="20.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">
            {{layer.outputSize}}
        </text>
        <g id="Remove" @click="removeLayer" class="non-drag">
            <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
            <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#7657f0;fill-rule:nonzero;" />
        </g>
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Flatten</tspan></text>
            <g id="ExpandButton" @click="expanded=true" class="non-drag">
                <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                <path id="Expand" d="M15.395,8.223l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
            </g>
        </g>
    </svg>
</template>

<script>    
    import Tensor64 from './datatypes/Tensor64.vue'
    import Tensor32 from './datatypes/Tensor32.vue'
    import Tensor16 from './datatypes/Tensor16.vue'
    import Tensor8 from './datatypes/Tensor8.vue'
    import Tensor3 from './datatypes/Tensor3.vue'
    import Neurons from './datatypes/Neurons.vue'

    export default {
        name: 'ModelLayerFlatten',
        components: {
            'tensor64': Tensor64,
            'tensor32': Tensor32,
            'tensor16': Tensor16,
            'tensor8': Tensor8,
            'tensor3': Tensor3,
            'neurons': Neurons
        },
        props: {
            modelIndex: Number
        },
        computed: {
            layer: function() {
                return this.$store.getters['model/getLayer'](this.modelIndex)
            }
        },
        data: function() {
            return {
                expanded: true,
                videoStarted: false
            }
        },
        methods: {
            removeLayer: function() {
                this.$store.commit('model/removeLayer', this.modelIndex)
            }
        }
    }
</script>

<style scoped>
    #ExpandButton {
        cursor: pointer;
    }
    
    #Remove {
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