<template>
    <div class="base">
        <transition name="slide-fade">
            <info v-if="info_enabled" @closed="$store.commit('views/toggleInfo', 6)">
                Now, you can upload your own images. If you like your results, 
                you can go back to the DATA tab to try out different classes.
                Also, please provide us feedback with the top right button so we can improve this app.
            </info>
        </transition>
        <div class="container" :class="{'blurred': info_enabled}">
            <file-input @fileAdded="handleFileAdded"/>
            <prediction v-for="(upload, index) in uploads" 
                :imgSrc="upload.url"
                :class0="class0" :class1="class1" 
                :prediction="upload.prediction" :key="upload.url + index"/>
        </div>
    </div>
</template>

<script>
    import Info from '../common/Info.vue'
    import UploadPrediction from './children/UploadPrediction.vue'
    import UploadFileInput from './children/UploadFileInput.vue'

    export default {
        name: 'Upload',
        components: {
            'info': Info,
            'prediction': UploadPrediction,
            'file-input': UploadFileInput
        },
        data: function() {
            return {
                images: []
            }
        },
        computed: {
            class0: function() {
                return this.$store.getters['dataset/getClass'](0)
            },
            class1: function() {
                return this.$store.getters['dataset/getClass'](1)
            },
            info_enabled: function() {
                return this.$store.getters['views/isInfoEnabled'](6)
            },
            uploads: function() {
                return this.$store.getters['prediction/getUploads']
            }
        },
        methods: {
            handleFileAdded: function(files) {
                this.$store.dispatch('prediction/requestPrediction', files)
                /*const validImageTypes = ['image/jpeg', 'image/png'];
                for (let i = 0; i < files.length; i++) {
                    if(validImageTypes.includes(files.item(i)['type'])) {
                        this.images.unshift(URL.createObjectURL(files.item(i)))
                    }
                }*/
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        text-align: justify;
    }

    .base {
        margin-top: 50px;
        margin-bottom: 30vh;
    }

    .drop {
        height: 30px;
        border: dashed 3px #49ABFF;
        border-radius: 10px;
        margin-top: 100px;
        background-color: #FFF;
        font-size: 30px;
        font-weight: bold;
        color: #49ABFF;
        padding: 85px;
        text-align: center;
    }
</style>
