<template lang="pug">
    .about
        .screen
            v-container
                .content
                    v-img.image(src="@/assets/undraw_prototyping_process_rswj.svg")
                    .text
                        h1 Research
                        p.
                            In recent years, deep learning approaches have proven to be applicable in a broad
                            range of applications. Because deep learning can solve many problems that were
                            deemed unsolvable before, it has beed applied to many longestablished application
                            domains, and also presented opportunities for new areas of research. The potential
                            of deep learning has attracted much attention from an increasing number of
                            non-experts. However, the first steps in this area are challenging, and thus it
                            seems promising to research how deep learning can be simplified for beginners.
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
