<template>
    <div class="bottom">
        <grid :columns="['2.4vw', 'calc(' + this.animatedSplit + '% - 3.15vw)', 'calc(' + (100 - this.animatedSplit) + '% - 3.15vw)', '2.4vw']" :gap="'0.5vw'">
            <grid-item>
                <div class="classname rotated">
                    {{ class0 }}
                </div>
            </grid-item>
            <grid-item>
                <div class="train-box">
                    <p class="images-amount">{{ animatedSplit * 100 / 100 }}</p>
                </div>
            </grid-item>
            <grid-item>
                <div class="test-box">
                    <p class="images-amount">{{ (100 - animatedSplit) * 100 / 100 }}</p>
                </div>
            </grid-item>
            <grid-item>
                <div class="classname">
                    {{ class0 }}
                </div>
            </grid-item>
            <grid-item>
                <div class="classname rotated">
                    {{ class1 }}
                </div>
            </grid-item>
            <grid-item>
                <div class="train-box">
                    <p class="images-amount">{{ animatedSplit * 100 / 100 }}</p>
                </div>
            </grid-item>
            <grid-item>
                <div class="test-box">
                    <p class="images-amount">{{ (100 - animatedSplit) * 100 / 100 }}</p>
                </div>
            </grid-item>
            <grid-item>
                <div class="classname">
                    {{ class1 }}
                </div>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    export default {
        name: 'PreprocessVisual',
        data: function() {
            return {
                tweened_split: this.$store.getters['dataset/getSplit']
            }
        },
        computed: {
            animatedSplit: function() {
                return this.tweened_split.toFixed(0);
            },
            split: function() {
                return this.$store.getters['dataset/getSplit']
            },
            class0: function() {
                return this.$store.getters['dataset/getClass'](0)
            },
            class1: function() {
                return this.$store.getters['dataset/getClass'](1)
            }
        },
        watch: {
            split: function(newSplit) {
                this.$tween.to(this.$data, 1, { tweened_split: newSplit });
            }
        }
    }
</script>

<style scoped>
    .bottom {
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .train-box {
        width: 100%;
        background-color: #A86ECF;
    }

    .test-box {
        width: 100%;
        background-color: #7657F0;
    }

    .images-amount {
        font-size: 3vw;
        font-weight: bold;
        color: #FFF;
        margin: auto;
        text-align: center;
        vertical-align: center;
        padding: 7vh 0;
    }

    .classname {
        writing-mode: tb-rl;
        float: left;
        text-align: center;
        height: calc(14vh + 3vw);
        color: #2699FB;
        font-weight: bold;
        font-size: 2vw;
    }

    .rotated {
        transform: rotate(180deg);
    }
</style>
