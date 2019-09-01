<template>
    <div v-if="expanded" class="layer-expanded">
        <svg width="100%" height="100%" viewBox="0 0 350 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="PuzzleBase" d="M1.972,0l346.056,0c1.088,0 1.972,0.887 1.972,1.98l0,98.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-98.728c0,-1.093 0.884,-1.98 1.972,-1.98Z" style="fill:#506373;" />
            <text id="PuzzleOutput" x="175.466px" y="106.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">{{outputSize}}x{{outputSize}}x3</tspan></text>
            <g id="Header">
                <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Input</tspan></text>
                <g id="ExpandButton" @click="expanded=false" class="non-drag">
                    <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFFFFF00;" />
                    <path id="Expand" d="M11.283,12.311l-6.375,-6.375l1.899,-1.899l4.476,4.476l4.474,-4.476l1.9,1.899l-6.374,6.375Z" style="fill:#fff;fill-rule:nonzero;" />
                </g>
            </g>
            <g id="Content">
                <path id="ContentBase" d="M233.351,19.132c0,-1.273 -1.033,-2.306 -2.306,-2.306l-225.496,0c-1.272,0 -2.306,1.033 -2.306,2.306l0,77.82c0,1.272 1.034,2.305 2.306,2.305l225.496,0c1.273,0 2.306,-1.033 2.306,-2.305l0,-77.82Z" style="fill:#647c90;" />
                <g id="Input">
                    <path id="InputBase" d="M107.774,23.932c0,-1.202 -0.976,-2.177 -2.177,-2.177l-95.646,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l95.646,0c1.201,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <image id="InputVis" x="33.11" y="35.267" width="49.328" height="55.646" style="fill:#fff;" xlink:href="@/assets/cat.jpg"/>
                    <text id="InputTitle" x="38.667px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">I<tspan x="40.453px 44.38px 48.307px 52.234px 54.375px 56.515px 58.301px 60.087px 65.803px 69.379px 73.306px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">nput: Image</tspan></text>
                </g>
                <path id="to" d="M122.434,58.041l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
                <g id="Output">
                    <path id="OutputBase" d="M228.82,23.932c0,-1.202 -0.975,-2.177 -2.177,-2.177l-95.646,0c-1.201,0 -2.177,0.975 -2.177,2.177l0,68.219c0,1.202 0.976,2.177 2.177,2.177l95.646,0c1.202,0 2.177,-0.975 2.177,-2.177l0,-68.219Z" style="fill:#435361;" />
                    <text id="OutputTitle" x="153.045px" y="29.958px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:6px;fill:#fff;">O<tspan x="158.045px 161.972px 164.113px 168.039px 171.966px 174.107px 176.248px 178.034px 181.609px 186.252px 187.799px 192.442px 194.943px 197.445px 201.02px " y="29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px 29.958px ">utput: 3D Array</tspan></text>
                    <foreignObject id="OutputVis" x="148.643" y="35.267" width="49.328" height="55.646" style="fill:#fff;">
                        <tensor3 :size="outputSize"></tensor3>
                    </foreignObject>
                    <g id="OutputButtons">
                        <g class="button" :class="{'button-active': (outputSize == 75)}"  id="_75" serif:id="75" @click="updateOutSize(75)">
                            <path d="M208.997,74.754c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-96.7155,354.471)">
                                <text x="268.698px" y="303.85px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">75</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (outputSize == 50)}"  id="_50" serif:id="50" @click="updateOutSize(50)">
                            <path d="M208.997,55.408c0,-0.439 -0.356,-0.795 -0.795,-0.795l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.795l0,15.363c0,0.439 0.356,0.795 0.795,0.795l6.357,0c0.439,0 0.795,-0.356 0.795,-0.795l0,-15.363Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-77.3692,335.125)">
                                <text x="268.698px" y="284.504px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">50</text>
                            </g>
                        </g>
                        <g class="button" :class="{'button-active': (outputSize == 25)}"  id="_25" serif:id="25" @click="updateOutSize(25)">
                            <path d="M208.997,36.061c0,-0.438 -0.356,-0.794 -0.795,-0.794l-6.357,0c-0.439,0 -0.795,0.356 -0.795,0.794l0,15.364c0,0.438 0.356,0.794 0.795,0.794l6.357,0c0.439,0 0.795,-0.356 0.795,-0.794l0,-15.364Z" />
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-58.0229,315.778)">
                                <text x="268.698px" y="265.158px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:6px;fill:#fff;">25</text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <div class="video">
            <iframe v-if="videoStarted" src="https://www.youtube-nocookie.com/embed/YRhxdVk_sIs?autoplay=1" frameborder="0" allowfullscreen></iframe>
            <div v-else class="overlay" @click="videoStarted = true">
                <icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </div>
    <svg v-else width="100%" height="100%" viewBox="0 0 350 25.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M1.972,0l346.056,0c1.088,0 1.972,0.887 1.972,1.98l0,12.52c0,1.092 -0.883,1.979 -1.972,1.98l-157.113,0c-3.128,5.556 -9.086,9.312 -15.915,9.312c-6.829,0 -12.787,-3.756 -15.915,-9.312l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-12.52c0,-1.093 0.884,-1.98 1.972,-1.98Z" style="fill:#506373;" />
        <text id="PuzzleOutput" x="175.466px" y="20.304px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;text-anchor:middle;font-weight:700;font-size:4px;fill:#fff;">{{outputSize}}x{{outputSize}}x3</tspan></text>
        <g id="Header">
            <text id="Title" x="22.169px" y="11.382px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:8px;fill:#fff;">Input</tspan></text>
            <g id="ExpandButton" @click="expanded=true" class="non-drag">
                <rect id="ExpandBox" x="4.908" y="1.849" width="12.7" height="12.7" style="fill:#FFF0;" />
                <path id="Expand" d="M15.395,8.223l-6.375,6.375l-1.899,-1.899l4.476,-4.476l-4.476,-4.474l1.899,-1.9l6.375,6.374Z" style="fill:#fff;fill-rule:nonzero;" />
            </g>
        </g>
    </svg>
</template>

<script>
    import Tensor3 from './datatypes/Tensor3.vue'

    export default {
        name: 'ModelLayerInput',
        components: {
            'tensor3': Tensor3
        },
        data: function() {
            return {
                expanded: true,
                videoStarted: false
            }
        },
        methods: {
            updateOutSize: function(size) {
                this.$store.commit('model/updateInputSize', size)
            }
        }, 
        computed: {
            outputSize: function() {
                return this.$store.getters['model/getInputSize']
            }
        } 
    }
</script>

<style scoped>
    #ExpandButton {
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