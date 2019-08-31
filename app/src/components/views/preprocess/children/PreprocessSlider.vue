<template>
    <div class="top">
        <div class="left-label">
            <h2 class="title">Train</h2>
            <h4 class="value">{{ split }}%</h4>
        </div>
        <div class="right-label">
            <h2 class="title">Test</h2>
            <h4 class="value">{{ 100 - split }}%</h4>
        </div>
        <div class="slider">
            <slider 
                :value="split"
                @input="setSplit"
                :height="30"
                :dot-size="35"
                :min="10"
                :max="90"
                :interval="5"
                :bg-style="{'background-color': '#7657F0'}" 
                :processStyle="{'background-color': '#A86ECF'}" 
                :tooltip="false"
                :piecewise="true"
                :piecewiseStyle="{'height': '20px', 'width': '20px'}"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PreprocessSlider',
        computed: {
            split: function() {
                return this.$store.getters['dataset/getSplit']
            }
        },
        methods: {
            setSplit: function(newSplit) {
                this.$store.commit('dataset/setSplit', newSplit)
            }
        }
    }
</script>

<style scoped>
    .slider {
        position: relative;
        top: 150px;
        width: 82%;
        margin: auto;
    }

    .title {
        color: #2699FB;
        font-size: 30px;
        font-weight: bold;
        margin-top: 100px;
    }

    .value {
        color: #2699FB;
        font-size: 25px;
        font-weight: bold;
    }

    .left-label {
        float: left;
        width: 50%;
        text-align: left;
    }

    .right-label {
        float: right;
        width: 50%;
        text-align: right;
    }

    .top {
        height: 200px;
        padding-bottom: 100px;
    }
</style>