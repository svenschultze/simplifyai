<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 1)">
                First, we need to build a dataset. For the problem of image 
                classification, we need a large amount of labeled images from two
                classes. A labeled image means, that the class of the image is already
                known and annotated to the file. In this view, you can choose two
                classes by typing the name in the text fields below. The images 
                are then automatically loaded from Flickr. For your first time, 
                we recommend that you use dogs and cats, as it is the most common 
                example of image classification. With different classes, you will
                experience different results. If you think that one specific image does 
                not fit the class, just click on it to replace it.
            </info>
        </transition>
        <div class="container" :class="{'blurred': info_enabled}">
            <grid :columns="grid.columns" :gap="grid.gap">
                <grid-item>
                    <data-class-input :i="0"/>
                    <data-image-grid :i="0"/>
                </grid-item>
                <grid-item>
                    <data-class-input :i="1"/>
                    <data-image-grid :i="1"/>
                </grid-item>
            </grid>
        </div>
    </div>
</template>

<script>
    import DataImageGrid from './children/DataImageGrid.vue'
    import DataClassInput from './children/DataClassInput.vue'
    
    import Info from '../common/Info.vue'

    export default {
        name: 'DataView',
        components: {
            'data-image-grid': DataImageGrid,
            'data-class-input': DataClassInput,
            'info': Info
        },
        data: function() {
            return {
                grid: {
                    columns: ['47%', '47%'],
                    gap: '6%'
                }
            }
        },
        computed: {
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](1)
            }
        }
    }
</script>

<style scoped>
    .base {
        margin-top: 50px;
        padding-bottom: 20vh;
    }
</style>
