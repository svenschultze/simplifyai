<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app,
    button {
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        background-color: #FAFDFF;
    }
</style>
