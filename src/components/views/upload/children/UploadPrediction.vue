<template>
    <div class="prediction card">
        <img :src="imgSrc">
        <grid class="grid" :columns="predictionLayout.columns" :gap="predictionLayout.gap">
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
</template>

<script>
    export default {
        name: 'EvaluatePrediction',
        props: {
            class0: String,
            class1: String,
            imgSrc: String,
            prediction: Array
        },
        data: function() {
            return {
                predictionLayout: {
                    columns: ['150px', 'auto', '100px'],
                    gap: '2%'
                },
                prediction: Math.round(Math.random()*100)
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
        object-fit: cover;
    }
    
    .prediction {
        height: 200px;
        background-color: #FFF;
        margin-top: 20px;
    }
    
    .prediction h4 {
        margin: 0;
        margin-top: 30px;
        color: #2699FB;
        font-size: 200%;
        display: inline-block; 
    }
    
    .prediction .className {
        float: right;
    }
    
    .visualBG {
        height: 40px;
        background-color: #BCE0FD;
        width: 100%;
        margin-top: 30px;
        border-radius: 20px;
        overflow: hidden;
    }
    
    .visual {
        background-color: #1471c1;
        height: 40px;
    }
    
    .grid {
        float: left;
        width: calc(100% - 200px);
        height: 200px;
    }
    
    img {
        float: left;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
    
    .card {
        filter: drop-shadow(1px 2px 3px #0002);
        background-color: #FFF;
        border-radius: 10px;
        overflow: hidden;
    }
</style>