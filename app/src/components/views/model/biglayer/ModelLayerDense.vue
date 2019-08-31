<template>
    <div v-if="expanded" class="layer-expanded">
        <svg width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="PuzzleBase" d="M158.173,0l0,9.338l33.664,0l0,-9.338l156.191,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.112,0l0,9.313l-31.831,0l0,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0l0,0Z" style="fill:#408fd3;" />
            <text id="PuzzleOutput" x="175.041px" y="106.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">{{layer.outputSize}}</tspan></text>
            <g id="Header">
                <g id="Remove" @click="removeLayer" class="non-drag">
                    <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
                    <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#408fd3;fill-rule:nonzero;" />
                </g>
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Dense</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#469eea;" />
                <path id="Expand1" serif:id="Expand" d="M118.297,58.041l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
                <g id="Output" class="non-drag">
                    <path id="InputBase" d="M228.82,23.932c0,-1.202 -0.975,-2.177 -2.177,-2.177l-95.646,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l95.646,0c1.202,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <foreignObject id="InputVis" x="131.82" y="35.267" width="83.731" height="55.646" style="fill:#fff;">
                        <neurons :size="layer.outputSize"></neurons>
                    </foreignObject>
                    <text id="InputTitle" x="155.045px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">Output: 1D Array</tspan></text>
                    <g id="OutputButtons">
                        <g class="button" :class="{'button-active': (layer.outputSize == 512)}" id="_128" serif:id="128" @click="updateOutSize(512)">
                            <path d="M225.82,79.127c0,-0.438 -0.356,-0.794 -0.795,-0.794l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-79.8923,371.294)">
                                <text x="281.835px" y="303.85px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">512</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputSize == 256)}" id="_64" serif:id="64" @click="updateOutSize(256)">
                            <path d="M225.82,64.772c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-65.537,356.939)">
                                <text x="281.835px" y="289.495px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">256</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputSize == 128)}" id="_32" serif:id="32" @click="updateOutSize(128)">
                            <path d="M225.82,50.417c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,10.99c0,0.438 0.356,0.794 0.795,0.794l6.357,0c0.439,0 0.795,-0.356 0.795,-0.794l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-51.1816,342.583)">
                                <text x="281.535px" y="275.139px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">128</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (layer.outputSize == 64)}" id="_16" serif:id="16" @click="updateOutSize(64)">
                            <path d="M225.82,36.061c0,-0.438 -0.356,-0.794 -0.795,-0.794l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,10.99c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-10.99Z" />
                            <g transform="matrix(8.2521e-17,-1,1,4.54357e-17,-36.8262,328.228)">
                                <text x="283.003px" y="260.784px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">64</text>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Input">
                    <path id="InputBase1" serif:id="InputBase" d="M97.683,23.932c0,-1.202 -0.976,-2.177 -2.177,-2.177l-85.555,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l85.555,0c1.201,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <foreignObject id="InputVis1" serif:id="InputVis" x="10.774" y="35.267" width="83.7" height="55.646" style="fill:#fff;">
                        <neurons :size="layer.inputSize"></neurons>
                    </foreignObject>
                    <text id="InputTitle1" serif:id="InputTitle" x="32.676px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">Input: 1D Array</text>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/FiqnVha6ylk?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M158.173,0l0,9.338l33.664,0l0,-9.338l156.191,0c1.088,0 1.972,0.887 1.972,1.98l0,12.52c0,1.092 -0.883,1.98 -1.972,1.981l-157.112,0l0,9.319l-31.831,0l0,-9.319l-157.113,0c-1.088,0 -1.972,-0.888 -1.972,-1.981l0,-12.52c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0l0,0Z" style="fill:#408fd3;" />
        <text id="PuzzleOutput" x="175.466px" y="20.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">{{layer.outputSize}}</tspan></text>
        <g id="Remove" @click="removeLayer" class="non-drag">
            <path id="Base" d="M340.009,1.502c3.702,0 6.748,3.046 6.748,6.747c0,3.701 -3.046,6.747 -6.748,6.747c-3.701,0 -6.747,-3.046 -6.747,-6.747c0,-3.701 3.046,-6.747 6.747,-6.747Z" style="fill:#f1f9ff;fill-rule:nonzero;" />
            <path id="Cross" d="M339.934,8.651l-2.147,2.147l-0.477,-0.477l2.147,-2.147l-2.147,-2.147l0.477,-0.477l2.147,2.147l2.147,-2.147l0.477,0.477l-2.147,2.147l2.147,2.147l-0.478,0.477l-2.146,-2.147Z" style="fill:#408fd3;fill-rule:nonzero;" />
        </g>
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Dense</tspan></text>
            <g id="ExpandButton" @click="expanded=true" class="non-drag">
                <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                <path id="Expand" d="M15.395,8.223l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
            </g>
        </g>
    </svg>
</template>

<script>
    import Neurons from './datatypes/Neurons.vue'
    
    export default {
        name: 'ModelLayerDense',
        components: {
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
            updateOutSize: function(size) {
                this.$store.commit('model/updateLayer', {
                    index: this.modelIndex,
                    key: 'outputSize',
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