<template lang="pug">
v-btn(link text @click="$emit('activate')")
    slot
    viewport-listener(v-model="viewport")
</template>

<script>
    export default {
        name: 'NavBarLink',
        model: {
            event: 'activate'
        },
        data: function() {
            return {
                viewport: {}
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .base {
        position: relative;
        height: 50px;
        border: none;
        width: 120px;
        display: inline-block;
        color: #FFF;
        cursor: pointer;
        margin-right: 0;
        margin-left: 0;
        box-sizing: border-box;
        float: left;
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
        line-height: 10px;
    }

    .base:hover {
        background-color: #278be4;
    }

    .base:focus {
        outline: none;
    }
    .base:disabled {
        opacity: 0.5;
        background: none;
        cursor: default;
    }

    .mediumSize {
        font-size: 11px;
        width: 100px;
    }

    .smallSize {
        width: auto !important;
    }

    img {
        height: 15px;
    }
</style>
