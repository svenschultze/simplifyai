<template>
<svg width="100%" height="100%" viewBox="0 0 49 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="Visual">
        <rect id="Tensor" x="-2.456" y="0.805" width="46.541" height="46.503" style="fill:none;" />
        <rect x="0.953" y="4.196" width="25.826" height="25.826" style="fill:#c7c7c7;" />
        <rect x="3.235" y="6.459" width="25.826" height="25.826" style="fill:#cfcfcf;" />
        <rect x="5.502" y="8.726" width="25.826" height="25.826" style="fill:#d7d7d7;" />
        <rect x="7.77" y="10.994" width="25.826" height="25.826" style="fill:#dfdfdf;" />
        <rect x="10.037" y="13.261" width="25.826" height="25.826" style="fill:#e7e7e7;" />
        <rect x="12.304" y="15.528" width="25.826" height="25.826" style="fill:#efefef;" />
        <rect x="14.572" y="17.796" width="25.826" height="25.826" style="fill:#f7f7f7;" />
        <rect x="16.839" y="20.063" width="25.826" height="25.826" style="fill:#fff;" />
        <text id="TensorWidth" x="23.744px" y="51.057px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:5px;fill:#fff;">{{size}}px</text>
        <g id="TensorHeight" transform="matrix(6.245e-17,-1,1,6.245e-17,-28.9299,78.2033)">
            <text x="39.669px" y="76.593px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:5px;fill:#fff;">{{size}}px</text>
        </g>
        <g id="TensorLength" transform="matrix(0.707107,0.707107,-0.707107,0.707107,-2.5896,-32.6896)">
            <text x="56.663px" y="3.556px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:5px;fill:#fff;">8</text>
        </g>
        <path id="TensorLengthLine" d="M27.495,3.22l-0.191,0.191l16.106,16.105l0.19,-0.19l-16.105,-16.106Z" style="fill:#fff;" />
    </g>
</svg>
</template>

<script>
    export default {
        name: 'Tensor8',
        props: {
            size: Number
        }
    }
</script>

<style scoped>
</style>
