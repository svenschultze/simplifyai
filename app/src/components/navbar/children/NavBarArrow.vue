<template>
  <button class="base" @click="$emit('activate')">
      <img class="right-arrow" src="@/assets/right-arrow.svg" />
  </button>
</template>

<script>
    export default {
        name: 'NavBarArrow',
        model: {
            event: 'activate'
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .base {
        position: relative;
        height: 50px;
        border: none;
        width: 30px;
        color: #FFF;
        cursor: pointer;
        margin-right: 0;
        margin-left: 0;
        box-sizing: border-box;
        float: left;
    }

    .base:focus {
        outline: none;
    }
    
    .base:disabled {
        opacity: 0.5;
        background: none;
        cursor: default;
    }

    .right-arrow {
        height: 15px;
    }
</style>
