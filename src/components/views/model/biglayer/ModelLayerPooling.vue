<template>
    <div v-if="expanded" class="layer-expanded">
        <svg width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#a86ecf;" />
            <text id="PuzzleOutput" x="175.466px" y="106.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">
                {{layer.outputSize}}x{{layer.outputSize}}x{{layer.inputDepth}}
            </text>
            <g id="Header">
                <g id="Remove" @click="removeLayer" class="non-drag">
                    <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
                    <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#a86ecf;fill-rule:nonzero;" />
                </g>
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Pooling</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#c07ded;" />
                <path id="Equals" d="M156.928,56.635l0,-2.976l11.328,0l0,2.976l-11.328,0Zm0,5.789l0,-3.234l11.328,0l0,3.234l-11.328,0Z" style="fill:#fff;fill-rule:nonzero;" />
                <path id="Expand1" serif:id="Expand" d="M74.327,64.463l-5.665,-5.665l1.688,-1.687l3.977,3.977l3.976,-3.977l1.688,1.687l-5.664,5.665Zm0,-5.49l-5.665,-5.665l1.688,-1.688l3.977,3.978l3.976,-3.978l1.688,1.688l-5.664,5.665Z" style="fill:#fff;fill-rule:nonzero;" />
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
                    <path id="FilterBase" d="M151.871,23.769c0,-1.111 -0.903,-2.014 -2.015,-2.014l-63.118,0c-1.112,0 -2.015,0.903 -2.015,2.014l0,68.545c0,1.112 0.903,2.014 2.015,2.014l63.118,0c1.112,0 2.015,-0.902 2.015,-2.014l0,-68.545Z" style="fill:#435361;" />
                    <text id="FilterTitle" x="98.592px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">P<tspan x="102.88px 106.807px 110.734px 112.52px 114.306px 118.233px 122.16px 123.707px 128.35px 130.851px 134.427px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">ooling Area</tspan></text>
                    <foreignObject id="FilterVis" x="88.12" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <filter2 v-if="layer.poolSize == 2"/>
                        <filter3 v-if="layer.poolSize == 3"/>
                        <filter4 v-if="layer.poolSize == 4"/>
                    </foreignObject>
                    <g id="FilterButtons">
                        <g class="button" :class="{'button-active': (layer.poolSize == 4)}"  id="_4x4" serif:id="4x4" @click="updatePoolSize(4)">
                            <path d="M148.474,74.754c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z"/>
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-157.239,293.948)">
                                <text x="206.675px" y="303.85px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">4x4</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.poolSize == 3)}"  id="_3x3" serif:id="3x3" @click="updatePoolSize(3)">
                            <path d="M148.474,55.408c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z"/>
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-137.892,274.601)">
                                <text x="206.675px" y="284.504px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">3x3</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.poolSize == 2)}"  id="_2x2" serif:id="2x2" @click="updatePoolSize(2)">
                            <path d="M148.474,36.061c0,-0.438 -0.356,-0.794 -0.795,-0.794l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,15.364c0,0.438 0.356,0.794 0.795,0.794l6.357,0c0.439,0 0.795,-0.356 0.795,-0.794l0,-15.364Z"/>
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-118.546,255.255)">
                                <text x="206.675px" y="265.158px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">2x2</text>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Output">
                    <path id="OutputBase" d="M228.82,23.425c0,-0.922 -0.748,-1.67 -1.669,-1.67l-52.317,0c-0.922,0 -1.67,0.748 -1.67,1.67l0,69.234c0,0.921 0.748,1.669 1.67,1.669l52.317,0c0.921,0 1.669,-0.748 1.669,-1.669l0,-69.234Z" style="fill:#435361;" />
                    <foreignObject id="OutputVis" x="176.328" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <tensor3 :size="layer.outputSize" v-if="layer.inputDepth == 3"></tensor3>
                        <tensor8 :size="layer.outputSize" v-else-if="layer.inputDepth == 8"></tensor8>
                        <tensor16 :size="layer.outputSize" v-else-if="layer.inputDepth == 16"></tensor16>
                        <tensor32 :size="layer.outputSize" v-else-if="layer.inputDepth == 32"></tensor32>
                        <tensor64 :size="layer.outputSize" v-else-if="layer.inputDepth == 64"></tensor64>
                    </foreignObject>
                    <text id="OutputTitle" x="175.217px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">O<tspan x="180.217px 184.144px 186.285px 190.212px 194.138px 196.279px 198.42px 200.206px 203.781px 208.424px 209.971px 214.614px 217.115px 219.617px 223.192px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">utput: 3D Array</tspan></text>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/rgEkgQfmeNU?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,12.481c0,1.093 -0.883,1.98 -1.972,1.98l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-12.481c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#a86ecf;" />
        <text id="PuzzleOutput" x="175.466px" y="20.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">
            {{layer.outputSize}}x{{layer.outputSize}}x{{layer.inputDepth}}
        </text>
        <g id="Remove" @click="removeLayer" class="non-drag">
            <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
            <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#a86ecf;fill-rule:nonzero;" />
        </g>
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Pooling</tspan></text>
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
    import Filter4 from './datatypes/Filter4.vue'
    import Filter3 from './datatypes/Filter3.vue'
    import Filter2 from './datatypes/Filter2.vue'
    
    export default {
        name: 'ModelLayerPooling',
        components: {
            'tensor64': Tensor64,
            'tensor32': Tensor32,
            'tensor16': Tensor16,
            'tensor8': Tensor8,
            'tensor3': Tensor3,
            'filter4': Filter4,
            'filter3': Filter3,
            'filter2': Filter2
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
            updatePoolSize: function(size) {
                this.$store.commit('model/updateLayer', {
                    index: this.modelIndex,
                    key: 'poolSize',
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