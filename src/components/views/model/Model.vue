<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 3)">
                The model, or neural network is the heart of the deep learning process. In this step, 
                you will build a neural network architecture by stacking different layers on top of 
                each other. Start by dragging some layers from the left into the model builder. You 
                can watch the videos on the right to learn about the layer type. Experiment with the 
                parameters and order of the layers. Mind the format of the layer outputs on the bottom 
                of the layer.
            </info>
        </transition>
        <div class="content" :class="{'blurred': info_enabled}">
            <div class="model">
                <div class="container-drag">
                    <div class="layer-big">
                        <model-layer-input/>
                        <div class="invalid-output" v-if="!inputCompatible && layers.length">
                            <div>
                                <p><strong>Input</strong> to <strong>{{ $store.getters['model/getLayer'](0).type }}</strong> is not compatible. 
                                Use <strong>Flatten</strong> to convert from <strong>3D</strong> to <strong>1D Array</strong></p>
                            </div>
                        </div>
                    </div>
                    
                    <div :class="{'empty-container': (!layers.length)}">
                        <container 
                            lock-axis="y" 
                            group-name="model" 
                            @drop="onDropLayer" 
                            :get-child-payload="() => ['MOVE']" 
                            drag-class="no-error" 
                            non-drag-area-selector=".non-drag"
                            :should-animate-drop="() => false">
                            <div v-if="!layers.length" class="container-filler"></div>
                            
                            <draggable v-for="(layer, index) in layers" :key="layer.key" class="layer-big">
                                <div>
                                    <model-layer-convolution v-if="layer.type=='Convolution'" :modelIndex="index"/>
                                    <model-layer-pooling v-else-if="layer.type=='Pooling'" :modelIndex="index"/>
                                    <model-layer-flatten v-else-if="layer.type=='Flatten'" :modelIndex="index"/>
                                    <model-layer-dense v-else-if="layer.type=='Dense'" :modelIndex="index"/>
                                </div>
                                <div class="invalid-output" v-if="!layer.outputCompatible">
                                    <div class="left non-drag">
                                        <p><strong>{{ layer.type }}</strong> to <strong>{{ $store.getters['model/getLayer'](index+1).type }}</strong> is not compatible.
                                        <span v-if="layer.type == 'Flatten' || layer.type == 'Dense'">You cannot convert from <strong>3D</strong> to <strong>1D Array</strong></span>
                                        <span v-else="layer.type == 'Flatten' || layer.type == 'Dense'">Use <strong>Flatten</strong> to convert from <strong>3D</strong> to <strong>1D Array</strong></span></p>
                                    </div>
                                </div>
                                
                            </draggable>
                        </container>
                    </div>
                    <model-layer-output/>
                </div>
            </div>
            <div class="layers">
                <div class="container-drag">
                    <container behaviour="copy" group-name="model" :get-child-payload="(index) => ['INSERT', layer_types[index]]">
                        <draggable>
                            <model-layer-small :type="layer_types[0]"/>
                        </draggable>
                        <draggable>
                            <model-layer-small :type="layer_types[1]"/>
                        </draggable>
                        <draggable>
                            <model-layer-small :type="layer_types[2]"/>
                        </draggable>
                        <draggable>
                            <model-layer-small :type="layer_types[3]"/>
                        </draggable>
                    </container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'

    import LayerSmall from './smalllayer/ModelLayerSmall.vue'

    import ModelLayerInput from './biglayer/ModelLayerInput.vue'
    import ModelLayerConvolution from './biglayer/ModelLayerConvolution.vue'
    import ModelLayerPooling from './biglayer/ModelLayerPooling.vue'
    import ModelLayerFlatten from './biglayer/ModelLayerFlatten.vue'
    import ModelLayerDense from './biglayer/ModelLayerDense.vue'
    import ModelLayerOutput from './biglayer/ModelLayerOutput.vue'

    export default {
        name: 'Model',
        components: {
            'info': Info,
            'model-layer-small': LayerSmall,
            'model-layer-input': ModelLayerInput,
            'model-layer-convolution': ModelLayerConvolution,
            'model-layer-pooling': ModelLayerPooling,
            'model-layer-flatten': ModelLayerFlatten,
            'model-layer-dense': ModelLayerDense,
            'model-layer-output': ModelLayerOutput
        },
        data: function() {
            return {
                layer_types: ['Convolution', 'Pooling', 'Flatten', 'Dense']
            }
        },
        methods: {
            onDropLayer: function(dropResult) {
                let { removedIndex, addedIndex, payload, element } = dropResult;
                
                if (this.layers.length == 0) {
                    addedIndex = 0
                }
                
                if (payload[0] === "INSERT") {
                    this.insertLayer(addedIndex, payload[1])
                }
                else if (payload[0] === "MOVE" && removedIndex != addedIndex) {
                    this.moveLayer(removedIndex, addedIndex)
                }
            },
            moveLayer: function(from, to) {
                this.$store.commit('model/moveLayer', { from, to })
            },
            insertLayer: function(index, type) {
                this.$store.commit('model/insertLayer', { index, type })
            }
        },
        computed: {
            layers: function() {
                return this.$store.getters['model/getLayers']
            },
            inputCompatible: function() {
                return this.$store.getters['model/isInputCompatible']
            },
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](3)
            }
        }
    }
</script>

<style scoped>
    .container-drag {
        width: calc(100% - 50px);
        margin-right: auto;
        margin-left: auto;
        margin-top: 50px;
    }

    .base {
        background-color: #DCF1FF;
        margin-top: 50px;
    }
    
    .content {
        transition: all .8s linear;
    }

    .layers {
        width: 25%;
        height: 100vh;
        float: left;
        background-color: #F1F9FF;
        color: #2699FB;
        position: fixed;
    }

    .layers h2 {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .model {
        width: 75%;
        float: right;
        background-color: #FAFDFF;
        color: #2699FB;
        text-align: right;
        padding-bottom: 30vh;
        text-align: justify;
    }

    .model h2 {
        font-size: 35px;
        font-weight: bold;
        margin: auto;
        text-align: right;
        margin-bottom: 10px;
    }

    .empty-container {
        width: 100%;
        border: 3px dashed;
        box-sizing: border-box;
        border-radius: 10px;
        text-align: center;
        margin-top: 2.5vw;
        margin-bottom: 1vw;
    }

    .invalid-output {
        width: 100%;
        border-radius: 15px;
        border: 3px solid #FFF;
        background-color: #9e2c2c;
        box-sizing: border-box;
        margin-bottom: 2vw;
        margin-top: 0vw;
        padding: 10px;
        display: inline-block;
    }

    .invalid-output p {
        margin: 10px;
        color: #FFF;
        font-size: 1.2vw;
    }
    
    .left {
        text-align: right;
        float: left;
    }
    
    .right {
        text-align: left;
        float: right;
    }

    .no-error~.invalid-output {
        display: none;
    }

    .container-filler {
        position: relative;
        min-height: 210px;
    }

    .layer-big {
        margin-bottom: -1.8vw;
        float: none;
        width: 100%;
    }
</style>
