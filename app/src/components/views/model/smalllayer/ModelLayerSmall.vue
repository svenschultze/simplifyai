<template>
    <svg v-if="type==='Convolution'" width="100%" height="100%" viewBox="0 0 350 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,86.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-86.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#0cc18b;" />
        <text id="Title" x="102.1px" y="53.537px" style="font-family:'Helvetica', 'Arial', sans-serif;font-weight:700;font-size:25px;fill:#fff;">Convolution</text>
    </svg>
    <svg v-else-if="type==='Pooling'" width="100%" height="100%" viewBox="0 0 350 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M191.827,0l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,86.728c0,1.092 -0.883,1.979 -1.972,1.979l-157.113,0c-3.128,5.556 -9.086,9.313 -15.915,9.313c-6.829,0 -12.787,-3.757 -15.915,-9.313l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.979l0,-86.728c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28Z" style="fill:#a86ecf;" />
        <text id="Title" x="129.175px" y="53.537px" style="font-family:'Helvetica', 'Arial', sans-serif;font-weight:700;font-size:25px;fill:#fff;">Pooling</text>
    </svg>
    <svg v-else-if="type==='Flatten'" width="100%" height="100%" viewBox="0 0 350 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M159.085,90.687l-157.113,0c-1.088,0 -1.972,-0.887 -1.972,-1.98l0,-86.727c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0c2.914,5.473 9.356,9.28 16.827,9.28c7.471,0 13.913,-3.807 16.827,-9.28l156.201,0c1.088,0 1.972,0.887 1.972,1.98l0,86.727c0,1.092 -0.883,1.979 -1.972,1.98l-157.112,0l0,9.312l-31.831,0l0,-9.312Z" style="fill:#7657f0;" />
        <text id="Title" x="134.027px" y="53.537px" style="font-family:'Helvetica', 'Arial', sans-serif;font-weight:700;font-size:25px;fill:#fff;">Flatten</text>
    </svg>
    <svg v-else-if="type==='Dense'" width="100%" height="100%" viewBox="0 0 350 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="PuzzleBase" d="M158.173,0l0,9.338l33.664,0l0,-9.338l156.191,0c1.088,0 1.972,0.887 1.972,1.98l0,86.678c0,1.092 -0.883,1.98 -1.972,1.981l-157.112,0l0,9.319l-31.831,0l0,-9.319l-157.113,0c-1.088,0 -1.972,-0.889 -1.972,-1.981l0,-86.678c0,-1.093 0.884,-1.98 1.972,-1.98l156.201,0l0,0Z" style="fill:#408fd3;" />
        <text id="Dense" x="137.482px" y="53.537px" style="font-family:'Helvetica', 'Arial', sans-serif;font-weight:700;font-size:25px;fill:#fff;">Dense</text>
    </svg>
</template>

<script>
    export default {
        name: 'ModelLayerSmall',
        props: {
            type: String
        }
    }
</script>

<style scoped>
    svg {
        cursor: grab;
        z-index: 10;
        margin-bottom: 10px;
    }
    
    
    .layer-small h4 {
        color: #FFF;
        padding: 30px 0;
        font-size: 25px;
        margin: 0;
    }
    
    .Convolution {
        background-color: #0CC18B;
    }
    
    .Pooling {
        background-color: #A86ECF;
    }
    
    .Flatten {
        background-color: #7657F0;
    }
    
    .Dense {
        background-color: #408FD3;
    }
</style>