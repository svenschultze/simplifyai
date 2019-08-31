<template>
    <div v-if="expanded" class="layer-expanded">
        <svg width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#0cc18b;" />
            <text id="PuzzleOutput" x="175.466px" y="106.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">
                {{layer.outputSize}}x{{layer.outputSize}}x{{layer.outputDepth}}
            </text>
            
            <g id="Header">
                <g id="Remove" @click="removeLayer" class="non-drag">
                    <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
                    <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#0cc18b;fill-rule:nonzero;" />
                </g>
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Convolution</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#15d49b;" />
                <path id="Star" d="M71.997,51.878c0.034,-0.486 0.034,-1.32 -0.841,-1.32c-0.539,0 -0.977,0.452 -0.876,0.903l0,0.452l0.471,5.381l-4.31,-3.229c-0.303,-0.174 -0.37,-0.243 -0.606,-0.243c-0.496,0.038 -0.89,0.459 -0.909,0.973c0,0.555 0.337,0.694 0.674,0.868l4.781,2.361l-4.647,2.326c-0.539,0.278 -0.808,0.417 -0.808,0.938c0.007,0.517 0.408,0.946 0.909,0.972c0.236,0 0.303,0 1.145,-0.66l3.771,-2.812l-0.505,5.833c0,0.008 0,0.016 0,0.024c0,0.482 0.384,0.878 0.851,0.878c0.009,0 0.017,0 0.025,0c0.019,0.001 0.038,0.002 0.058,0.002c0.467,0 0.851,-0.396 0.851,-0.878c0,-0.009 0,-0.018 0,-0.027l-0.505,-5.832l4.31,3.229c0.303,0.173 0.37,0.243 0.606,0.243c0.496,-0.039 0.89,-0.46 0.909,-0.972c0,-0.521 -0.303,-0.695 -0.707,-0.903c-2.021,-1.042 -2.088,-1.042 -4.748,-2.327l4.647,-2.326c0.539,-0.278 0.808,-0.417 0.808,-0.937c-0.008,-0.518 -0.408,-0.946 -0.91,-0.973c-0.235,0 -0.303,0 -1.144,0.66l-3.771,2.812l0.471,-5.416Z" style="fill:#fff;fill-rule:nonzero;" />
                <path id="Equals" d="M148.115,56.635l0,-2.976l11.328,0l0,2.976l-11.328,0Zm0,5.789l0,-3.234l11.328,0l0,3.234l-11.328,0Z" style="fill:#fff;fill-rule:nonzero;" />
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
                <g id="Filter" class="non-drag">
                    <path id="FilterBase" d="M146.025,23.769c0,-1.111 -0.903,-2.014 -2.014,-2.014l-63.119,0c-1.112,0 -2.015,0.903 -2.015,2.014l0,68.545c0,1.112 0.903,2.014 2.015,2.014l63.119,0c1.111,0 2.014,-0.902 2.014,-2.014l0,-68.545Z" style="fill:#435361;" />
                    <text id="FilterTitle" x="104.593px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">F<tspan x="108.52px 110.306px 112.092px 114.233px 117.808px " y="29.958px 29.958px 29.958px 29.958px 29.958px ">ilter</tspan></text>
                    <foreignObject id="FilterVis" x="82.274" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <filter3 v-if="layer.filterSize == 3"/>
                        <filter5 v-if="layer.filterSize == 5"/>
                        <filter7 v-if="layer.filterSize == 7"/>
                    </foreignObject>
                    <g id="FilterButtons">
                        <g class="button" :class="{'button-active': (layer.filterSize == 7)}" id="_7x7" serif:id="7x7" @click="updateFilterSize(7)">
                            <path d="M142.628,74.754c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-163.085,288.102)">
                                <text x="200.829px" y="303.85px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">7x7</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.filterSize == 5)}" id="_5x5" serif:id="5x5" @click="updateFilterSize(5)">
                            <path d="M142.628,55.408c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-143.738,268.756)">
                                <text x="200.829px" y="284.504px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">5x5</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.filterSize == 3)}" id="_3x3" serif:id="3x3" @click="updateFilterSize(3)">
                            <path d="M142.628,36.061c0,-0.438 -0.356,-0.794 -0.795,-0.794l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,15.364c0,0.438 0.356,0.794 0.795,0.794l6.357,0c0.439,0 0.795,-0.356 0.795,-0.794l0,-15.364Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-124.392,249.409)">
                                <text x="200.829px" y="265.158px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">3x3</text>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Output" class="non-drag">
                    <path id="OutputBase" d="M228.82,23.769c0,-1.111 -0.902,-2.014 -2.014,-2.014l-63.119,0c-1.112,0 -2.014,0.903 -2.014,2.014l0,68.545c0,1.112 0.902,2.014 2.014,2.014l63.119,0c1.112,0 2.014,-0.902 2.014,-2.014l0,-68.545Z" style="fill:#435361;" />
                    <text id="OutputTitle" x="169.471px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">O<tspan x="174.471px 178.398px 180.539px 184.466px 188.392px 190.533px 192.674px 194.46px 198.035px 202.678px 204.225px 208.868px 211.37px 213.871px 217.447px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">utput: 3D Array</tspan></text>
                    <foreignObject id="OutputVis" x="165.07" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <tensor8 :size="layer.outputSize" v-if="layer.outputDepth == 8"></tensor8>
                        <tensor16 :size="layer.outputSize" v-else-if="layer.outputDepth == 16"></tensor16>
                        <tensor32 :size="layer.outputSize" v-else-if="layer.outputDepth == 32"></tensor32>
                        <tensor64 :size="layer.outputSize" v-else-if="layer.outputDepth == 64"></tensor64>
                    </foreignObject>
                    <g id="OutputButtons">
                        <g class="button" :class="{'button-active': (layer.outputDepth == 64)}" id="_64" serif:id="64" @click="updateOutputDepth(64)">
                            <path d="M225.423,79.127c0,-0.438 -0.356,-0.794 -0.794,-0.794l-6.358,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.358,0c0.438,0 0.794,-0.356 0.794,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-80.2893,370.897)">
                                <text x="282.938px" y="303.85px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">64</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputDepth == 32)}" id="_32" serif:id="32" @click="updateOutputDepth(32)">
                            <path d="M225.423,64.772c0,-0.439 -0.356,-0.795 -0.794,-0.795l-6.358,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.358,0c0.438,0 0.794,-0.356 0.794,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-65.9339,356.542)">
                                <text x="282.938px" y="289.495px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">32</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputDepth == 16)}" id="_16" serif:id="16" @click="updateOutputDepth(16)">
                            <path d="M225.423,50.417c0,-0.439 -0.356,-0.795 -0.794,-0.795l-6.358,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,10.99c0,0.438 0.356,0.794 0.795,0.794l6.358,0c0.438,0 0.794,-0.356 0.794,-0.794l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-51.5785,342.186)">
                                <text x="282.938px" y="275.139px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">16</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputDepth == 8)}" id="_8" serif:id="8" @click="updateOutputDepth(8)">
                            <path d="M225.423,36.061c0,-0.438 -0.356,-0.794 -0.794,-0.794l-6.358,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.358,0c0.438,0 0.794,-0.356 0.794,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-37.2232,327.831)">
                                <text x="284.606px" y="260.784px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">8</text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/kYPtXUwRfGY?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,12.481c0,1.093 -0.883,1.98 -1.972,1.98l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-12.481c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#0cc18b;" />
        <text id="PuzzleOutput" x="175.466px" y="20.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">{{layer.outputSize}}x{{layer.outputSize}}x{{layer.outputDepth}}</tspan></text>
        <g id="Remove" @click="removeLayer" class="non-drag">
            <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
            <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#0cc18b;fill-rule:nonzero;" />
        </g>
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Convolution</tspan></text>
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
    import Filter7 from './datatypes/Filter7.vue'
    import Filter5 from './datatypes/Filter5.vue'
    import Filter3 from './datatypes/Filter3.vue'

    export default {
        name: 'ModelLayerConvolution',
        components: {
            'tensor64': Tensor64,
            'tensor32': Tensor32,
            'tensor16': Tensor16,
            'tensor8': Tensor8,
            'tensor3': Tensor3,
            'filter7': Filter7,
            'filter5': Filter5,
            'filter3': Filter3
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
            updateFilterSize: function(size) {
                this.$store.commit('model/updateLayer', {
                    index: this.modelIndex,
                    key: 'filterSize',
                    value: size
                })
            },
            updateOutputDepth: function(size) {
                this.$store.commit('model/updateLayer', {
                    index: this.modelIndex,
                    key: 'outputDepth',
                    value: size
                })
            },
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

    .button {
        cursor: pointer;
        fill: #586a7a;
    }

    .button:hover {
        fill: #687B8B;
    }

    .button-active {
        fill: #768B9D !important;
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
