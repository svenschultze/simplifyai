<template>
    <div class="base2">
        <div class="container">
            <p><slot></slot></p>
            <button @click="$emit('closed')">START</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        model: {
            event: 'closed'
        }
    }
</script>

<style scoped>
    .base2 {
        width: 100%;
        background-color: #278be4 !important;
        color: #FFF;
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
        height: 50px;
        border: none;
        width: 100px;
        display: inline-block;
        color: #FFF;
        cursor: pointer;
        margin-right: 0;
        margin-left: 0;
        box-sizing: border-box;
        float: right;
        background-color: #1471c1;
        font-size: 1em;
        font-weight: bold;
        font-family: Calibri;
    }

    button:hover {
        background-color: #1965a7;
    }

    button:focus {
        outline: none;
    }
</style>
