<template lang="pug">
    .base2
        v-container
            p
                slot
        v-btn(dark text x-large @click="$emit('closed')")
            v-icon mdi-chevron-up
            span START
            v-icon mdi-chevron-up
</template>

<script>
export default {
    name: 'Info',
    model: {
        event: 'closed'
    }
}
</script>

<style scoped lang="scss">
.base2 {
    width: 100%;
    background-color: rgb(68, 91, 224) !important;
    color: #fff;
    position: fixed;
    top: 50px;
    z-index: 10;
    box-shadow: 0 3px 20px #0004;
}

p {
    margin: auto;
    padding: 20px 0;
    text-align: justify;
    font-size: 1.6em;
    font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
}

button {
    position: relative;
    width: 100%;
    border-radius: 0;

    span {
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>
