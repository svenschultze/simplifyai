<template>
    <div class="card">
        <img :src="image">
        <div class="prediction" :class="{'red': !correct}">
            <grid :columns="predictionLayout.columns" :gap="predictionLayout.gap">
                <grid-item>
                    <h4 class="className">{{class0}}</h4>
                </grid-item>
                <grid-item>
                    <div class="visualBG">
                        <div class="visual" :style="{'width':  Math.round(100*prediction[0] / (prediction[0]+prediction[1])) + '%'}"></div>
                    </div>
                </grid-item>
                <grid-item>
                    <h4 class="percentage">{{ Math.round(100*prediction[0] / (prediction[0]+prediction[1])) }}%</h4>
                </grid-item>
                <grid-item>
                    <h4 class="className">{{class1}}</h4>
                </grid-item>
                <grid-item>
                    <div class="visualBG">
                        <div class="visual" :style="{'width': Math.round(100*prediction[1] / (prediction[0]+prediction[1])) + '%'}"></div>
                    </div>
                </grid-item>
                <grid-item>
                    <h4 class="percentage">{{ Math.round(100*prediction[1] / (prediction[0]+prediction[1])) }}%</h4>
                </grid-item>
            </grid>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestPrediction',
        props: {
            class0: String,
            class1 : String,
            image: String,
            prediction: Array,
            correct: Boolean
        },
        data: function() {
            return {
                predictionLayout: {
                    columns: ['60px', 'auto', '50px'],
                    gap: '2%'
                }
            }
        }
    }
</script>

<style scoped>
    .image {
        background-color: #FFF;
    }
    
    img {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        color: #49ABFF;
        background-color: #FFF;
    }
    
    .prediction {
        height: 90px;
        background-color: #FFF;
    }
    
    .prediction h4 {
        margin: 0;
        margin-top: 15px;
        color: #1471c1;
        font-size: 100%;
        display: inline-block; 
    }
    
    .prediction .className {
        float: right;
    }
    
    .visualBG {
        height: 20px;
        background-color: #BCE0FD;
        width: 100%;
        margin-top: 15px;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .visual {
        background-color: #1471c1;
        height: 20px;
    }
    
    .card {
        filter: drop-shadow(1px 2px 3px #0002);
        background-color: #FFF;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    
    .red .visual {
        background-color: #9e2c2c;
    }
    .red .visualBG {
        background-color: #efbdbd;
    }
    .red h4 {
        color: #9e2c2c;
    }
</style>