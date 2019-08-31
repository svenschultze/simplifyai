<template>
    <div class="modal-base" @click="close">
        <div class="modal-card" @click.stop>
            <div class="modal-text">
                <h1>Feedback <icon @click="close" class="close" icon="times-circle"/></h1>
                <p>Thank you for your interest in our app. Please consider participating in our online study. 
                We will ask you questions about your opinion on our design and your learning experience.</p>
                <p>You can use this link to get to our Google Forms questionnaire. This will only take about 5 minutes of your time.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfF76De_EhDNiZBPQ66YhA9CIKiVd38xVtpLgXtFwc3tqHNTA/viewform" target="_blank">Participate Here</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeedbackModal',
        methods: {
            close: function() {
                this.$store.commit('views/toggleModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-base {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1000;
        cursor: pointer;
    }

    .modal-card {
        position: absolute;
        background-color: #FFF;
        border-radius: 10px;
        width: 500px;
        max-width: 90vw;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 50vh;
        -moz-box-shadow: 0 0 10px #0005;
        -webkit-box-shadow: 0 0 10px #0005;
        box-shadow: 0 0 10px #0005;
        cursor: auto;
        transform: translateY(-50%);
    }

    .modal-text {
        padding: 7%;
        color: #1471c1;
        p {
            font-size: 1.2em;
        }
        a {
            font-size: 1.5em;
            background-color: #1471c1;
            color: #FFF;
            padding: 5px 10px;
            border-radius: 8px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 2px 3px #0002;

        }
        h1 {
            font-size: 1.8em;
            display: block;
            margin-top: 0;
            .close {
                float: right;
                cursor: pointer;
            }
        }
    }
</style>
