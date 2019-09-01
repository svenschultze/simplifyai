<template lang="pug">
    .hero
        v-container
            .content
                h1 Simplify AI
                p.
                    Tinker with Neural Networks without any coding experience
                    to learn about the basic concepts of Deep Learning in a practical way.
                .calltoaction
                    v-btn.start(rounded large) START NOW
                    v-btn.learn(rounded large @click="$vuetify.goTo('#about')") LEARN MORE
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
div.hero {
    background: url(~@/assets/landingpage.svg),
        radial-gradient(circle, #2040ae, #090c50);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    margin-top: 30px;

    div.content {
        position: relative;
        top: calc(50vh - 15px);
        transform: translateY(-50%);
        width: 40vw;
        padding-right: 2%;
        padding-left: 2%;

        @media screen and (max-width: 1080px) {
            width: 70%;
            padding-right: 3%;
            padding-left: 3%;
        }

        @media screen and (max-width: 700px) {
            width: 100%;
        }

        h1 {
            color: white;
            font-size: calc(2em + 4vw);
        }

        p {
            color: #ccc;
            font-size: 1.2em;
        }

        div.calltoaction {
            margin-top: 30px;

            button.start {
                background: rgb(44, 67, 224);
                background-image: linear-gradient(
                    131deg,
                    rgb(44, 67, 224) 0%,
                    rgb(14, 144, 195) 40%,
                    rgb(14, 144, 195) 60%,
                    rgb(44, 67, 224) 100%
                );
                background-size: auto 200%;
                background-position: 0 100%;

                font-weight: bold;
                font-size: 1em;
                color: white;

                margin-right: 20px;

                transition: background-position 0.5s;

                &:hover {
                    background-position: 0 0;
                }
            }

            button.learn {
                background: rgb(44, 67, 224);
                background-image: linear-gradient(
                    131deg,
                    rgb(45, 63, 179) 0%,
                    rgb(33, 107, 156) 40%,
                    rgb(33, 107, 156) 60%,
                    rgb(45, 63, 179) 100%
                );
                background-size: auto 200%;
                background-position: 0 100%;

                font-weight: bold;
                font-size: 1em;
                button.learn {
                    background: rgb(44, 67, 224);
                    background-image: linear-gradient(
                        131deg,
                        rgb(45, 63, 179) 0%,
                        rgb(33, 107, 156) 40%,
                        rgb(33, 107, 156) 60%,
                        rgb(45, 63, 179) 100%
                    );
                    background-size: auto 200%;
                    background-position: 0 100%;

                    font-weight: bold;
                    font-size: 1em;
                    color: white;

                    margin-right: 20px;

                    transition: background-position 0.5s;

                    &:hover {
                        background-position: 0 0;
                    }
                }
                color: white;

                margin-right: 20px;

                transition: background-position 0.5s;

                &:hover {
                    background-position: 0 0;
                }
            }
        }
    }
}
</style>
