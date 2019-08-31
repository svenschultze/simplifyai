<template>
    <grid class="controlsAndVideo" :columns="controlsAndVideo.columns" :gap="controlsAndVideo.gap">
        <grid-item class="controls">
            <div class="slider">
                <slider 
                    :value="epochs"
                    @input="updatePlannedEpochs"
                    :height="30"
                    :dot-size="35"
                    :min="0"
                    :max="40"
                    :interval="2"
                    :bg-style="{'background-color': '#647C90'}" 
                    :processStyle="{'background-color': '#AEBBC7'}" 
                    :tooltip="false"
                    :piecewise="true"
                    :piecewiseStyle="{'height': (viewport.width > 1600) ? '20px' : '15px', 'width': (viewport.width > 1600) ? '20px' : '15px'}"
                />
            </div>
            <h4 class="slider-label">{{epochs}} Epoch{{ epochs != 1 ? 's' : ''}}</h4>
            <grid class="button-group" :columns="buttonGroup.columns" :gap="buttonGroup.gap">
                <grid-item>
                    <button :disabled="data.length == 0" @click="resetTraining" class="button">
                        RESET {{(viewport.width > 1600) ? 'TRAINING' : ''}}<span v-if="viewport.width > 1300"><icon icon="undo"/></span>
                    </button>
                </grid-item>
                <grid-item>
                    <button :disabled="!trainingActive" @click="pauseTraining" class="button">
                        PAUSE {{(viewport.width > 1600) ? 'TRAINING' : ''}}<span v-if="viewport.width > 1300"><icon icon="pause"/></span>
                    </button>
                </grid-item>
                <grid-item>
                    <button :disabled="trainingActive || !epochs" @click="startTraining" class="button">
                        START {{(viewport.width > 1600) ? 'TRAINING' : ''}}<span v-if="viewport.width > 1300"><icon icon="play"/></span>
                    </button>
                </grid-item>
            </grid>
        </grid-item>
        <grid-item>
            <div class="video">
                <iframe src="https://www.youtube-nocookie.com/embed/GMrTBtzJkCg" frameborder="0" allowfullscreen></iframe>
            </div>
        </grid-item>
        <viewport-listener v-model="viewport"/>
    </grid>
</template>

<script>
    export default {
        name: 'TrainControls',
        data: function() {
            return {
                viewport: {},
                buttonGroup: {
                    columns: ['auto', 'auto', 'auto'],
                    gap: '2%'
                },
                controlsAndVideo: {
                    columns: ['auto', '534px'],
                    gap: '2%'
                }
            }
        },
        methods: {
            updatePlannedEpochs: function(plannedEpochs) {
                this.$store.commit('training/setPlannedEpochs', plannedEpochs)
            },
            startTraining: function() {
                this.$store.dispatch('training/startTraining')
            },
            pauseTraining: function() {
                this.$store.dispatch('training/pauseTraining')
            },
            resetTraining: function() {
                this.$store.dispatch('training/resetTraining')
            }
        },
        computed: {
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](4)
            },
            data: function() {
                return this.$store.getters['training/getEpochs']
            },
            epochs: function() {
                return this.$store.getters['training/getPlannedEpochs']
            },
            trainingActive: function() {
                return this.$store.getters['training/isTrainingActive']
            }
        }
    }
</script>

<style scoped>
    
    .controls {
        width: auto;
        height: 200px;
        background-color: #506373;
        border-radius: 10px;
        padding: 50px 10px;
    }

    .slider {
        width: calc(100% - 200px);
        float: left;
        padding-right: 10px;
        padding-left: 10px;
    }

    .slider-label {
        font-size: 150%;
        margin: 20px 30px;
        color: #FFF;
        text-align: right;
    }

    .button-group {
        margin-top: 50px;
        margin-right: 30px;
        margin-left: 30px;
    }

    .button {
        color: #FFF;
        background-color: #647C90;
        height: 80px;
        width: 100%;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        padding: 30px!important;
        cursor: pointer;
        text-align: left;
    }

    .button:disabled {
        cursor: default;
        color: #aab8c4;
    }

    .button:disabled:hover {
        cursor: default;
        color: #aab8c4;
        background-color: #647C90;
    }

    .button:hover {
        background-color: #728ea5;
    }

    .button span {
        float: right;
    }

    .video {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        height: 300px;
    }

    .video iframe {
        height: 300px;
        width: 100%;
    }

    .controlsAndVideo {
        margin-left: 5%;
        margin-right: 5%;
    }
</style>