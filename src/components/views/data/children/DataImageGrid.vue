<template>
    <div>
        <grid :columns="grid.columns">
            <grid-item class="base" v-for="(image, index) in images" :key="index">
                <img v-if="images[index]" class="photo" :src="image.url_sq">
                <div v-if="images[index]" class="replace" @click="replace(index)" title="Replace Image">
                    <icon class="replaceIcon" icon="sync-alt"/>
                </div>
                <icon v-if="!images[index]" class="loading" @click="replace(index)" icon="circle-notch" spin />
            </grid-item>
        </grid>
    </div>
</template>

<script>

    export default {
        name: 'DataImageGrid',
        props: {
            i: Number
        },
        data: function() {
            return {
                grid: {
                    columns: ['20%', '20%', '20%', '20%', '20%']
                }
            }
        },
        computed: {
            className: function() {
                return this.$store.getters['dataset/getClass'](this.i)
            },
            images: function() {
                return this.$store.getters['dataset/getData'](this.i)
            }
        },
        methods: {
            replace: function(position) {
                this.$store.commit('dataset/replaceImage', {
                    i: this.i,
                    position
                })
            }
        },
        mounted: function() {
            this.$store.commit('dataset/setClass', {
                i: this.i,
                newClass: this.className
            })
        }
    }
</script>

<style scoped>
    .photo {
        width: 100%;
        display: block;
        margin: auto;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 5px;
        filter: drop-shadow(1px 2px 3px #0002);
    }

    .base {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        color: #49ABFF;
        position: relative;
    }

    .loading {
        width: 70%;
        height: 70%;
        margin: 15% 15%;
        display: block;
    }

    .replace {
        height: calc(100% - 10px);
        width: calc(100% - 10px);
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        margin: 5px;
        opacity: 0;
        transition: opacity .5s ease-out;
        -moz-transition: opacity .5s ease-out;
        -webkit-transition: opacity .5s ease-out;
        -o-transition: opacity .5s ease-out;
        cursor: pointer;
    }

    .replace:hover {
        background-color: #FFFA;
        opacity: 1;
        backdrop-filter: blur(4px);
    }

    .replace .replaceIcon {
        opacity: 0;
    }

    .replace:hover .replaceIcon {
        opacity: 1;
        color: #1471c1;
        width: 60%;
        height: 60%;
        margin-left: 20%;
        margin-top: 20%;
    }
</style>
