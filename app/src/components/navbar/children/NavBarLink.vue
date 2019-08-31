<template>
  <button class="base" :class="{'mediumSize': viewport.width < 1200, 'smallSize': viewport.width < 1050}"  @click="$emit('activate')">
      <h3><slot></slot></h3>
      <viewport-listener v-model="viewport"/>
  </button>
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
