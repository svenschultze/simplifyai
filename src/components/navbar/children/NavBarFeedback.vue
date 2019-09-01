<template>
  <button @click="enableModal" class="base" :class="{'mediumSize': viewport.width < 1200}">
    <h3><icon icon="comment"></icon> FEEDBACK</h3>
    <viewport-listener v-model="viewport"/>
  </button>
</template>

<script>
    export default {
        name: 'NavBarFeedback',
        data: function() {
            return {
                viewport: {}
            }
        },
        methods: {
            enableModal: function() {
                this.$store.commit('views/toggleModal')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .base {
        float: right;
        position: relative;
        height: 50px;
        border: none;
        width: 140px;
        color: #FFF;
        cursor: pointer;
        background-color: #268CE4;
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
        line-height: 10px;
    }

    .base:hover {
        background-color: #237ECC;
    }

    .base:focus {
        outline: none;
    }

    .speech-bubble {
        height: 15px;
    }
    
    .mediumSize {
        font-size: 11px!important;
        width: 110px;
    }
</style>
