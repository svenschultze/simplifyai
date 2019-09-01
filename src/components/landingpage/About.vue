<template lang="pug">
    .about
        .screen
            v-container
                .content
                    v-img.image(src="@/assets/undraw_visual_data_b1wx.svg")
                    .text
                        h1 About this project
                        p.
                            Deep Learning has a very steep and first steps in the area are challenging.
                            The practical workflow is heavily guided by experimentation and intuition, and
                            thus expertise is mostly gained through experience. To acquire this experience, one
                            needs to learn the theory of deep learning, as well as the prevalent programming
                            languages.
        .screen
            v-container
                .content
                    .text.text-right
                        h1 Create a Dataset
                        p.
                            In our dataset builder, your can create your own dataset by simply defining two
                            classes. Our application will automatically load images from Flickr that fit into
                            your classes. You can also replace individual images manually if you think they
                            don't fit into their respective class.
                    v-img.image.elevation-5(src="@/assets/data.png")
        .screen
            v-container
                .content
                    v-img.image.elevation-5(src="@/assets/modelbuilder.png")
                    .text
                        h1 Build a Neural Network
                        p.
                            In our dataset builder, your can create your own dataset by simply defining two
                            classes. Our application will automatically load images from Flickr that fit into
                            your classes. You can also replace individual images manually if you think they
                            don't fit into their respective class.
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.about {
    padding-top: 12.5vh;
    padding-bottom: 12.5vh;
    background: white;

    .screen {
        width: 100%;
        height: 75vh;

        @media screen and (max-width: 700px) {
            height: auto;
        }

        .content {
            position: relative;
            top: 37.5vh;
            transform: translateY(-50%);
            width: 100%;

            .image {
                display: inline-block;
                vertical-align: middle;
                width: 48%;
            }

            .text {
                width: 48%;
                margin-left: 4%;
                display: inline-block;
                vertical-align: middle;
            }

            @media screen and (max-width: 700px) {
                .image {
                    width: 100%;
                }

                .text {
                    width: 100%;
                }
            }

            .text-right {
                margin-left: 0;
                margin-right: 4%;
            }

            h1 {
                color: black;
                font-size: 3em;
            }

            p {
                color: #444;
                font-size: 1.2em;
            }
        }
    }
}
</style>
