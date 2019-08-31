<template lang="pug">
    .about
        .screen
            v-container
                .content
                    v-img.image(src="@/assets/undraw_feedback_h2ft2.svg" contain)
                    .text
                        h1 Help us improve
                        p.
                            Thank you for your interest in our app. Please consider participating in
                            our online study. We will ask you questions about your opinion on our design
                            and your learning experience. You can use this link to get to our Google
                            Forms questionnaire. This will only take about 5 minutes of your time.
                        v-btn.participate(rounded large) PARTICIPATE NOW
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.about {
    padding-top: 12.5vh;
    padding-bottom: 12.5vh;
    background: linear-gradient(
        131deg,
        rgb(6, 65, 98) 0%,
        rgb(33, 20, 107) 100%
    );

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
                height: 70vh;
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
                color: white;
                font-size: 3em;
            }

            p {
                color: #ddd;
                font-size: 1.2em;
            }

            button.participate {
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
        }
    }
}
</style>
