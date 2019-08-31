<template>
    <div class="prediction">
        <grid class="grid" :columns="predictionLayout.columns" :gap="predictionLayout.gap">
            <grid-item>
                <h4 class="className">{{class0}}</h4>
            </grid-item>
            <grid-item>
                <div class="visualBG">
                    <div class="visual" :style="{'width':  prediction + '%'}"></div>
                </div>
            </grid-item>
            <grid-item>
                <h4 class="percentage">{{ prediction }}%</h4>
            </grid-item>
            <grid-item>
                <h4 class="className">{{class1}}</h4>
            </grid-item>
            <grid-item>
                <div class="visualBG">
                    <div class="visual" :style="{'width': 100-prediction + '%'}"></div>
                </div>
            </grid-item>
            <grid-item>
                <h4 class="percentage">{{ 100-prediction }}%</h4>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    export default {
        name: 'prediction',
        props: {
            class0: String,
            class1: String
        },
        data: function() {
            return {
                predictionLayout: {
                    columns: ['20%', 'auto', '20%'],
                    gap: '100% 2%',
                },
                prediction: Math.round(Math.random()*100)
            }
        }
    }
</script>

<style scoped>
    .prediction {
        width: 100%;
        height: 100%;
    }
    
    .prediction h4 {
        margin: 0;
        margin-top: 10%;
        color: #FFF;
        font-size: 10%;
        display: inline-block; 
    }
    
    .prediction .className {
        float: right;
    }
    
    .prediction .percentage {
        float: left;
    }
    
    .grid {
        padding-top: 10%;
    }
    
    .visualBG {
        height: 130%;
        background-color: #586a7a;
        width: 100%;
    }
    
    .visual {
        background-color: #768B9D;
        height: 100%;
    }
</style>