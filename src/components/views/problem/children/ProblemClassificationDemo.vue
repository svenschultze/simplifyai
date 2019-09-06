<template lang="pug">
.demo.shadow
    svg(width='100%' height='100%' viewbox='0 0 1200 500' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;')
        path#Cloud(d='M558.994,220.6c4.1,-10.7 6.4,-22.4 6.4,-34.6c0,-53 -43,-96 -96,-96c-19.7,0 -38.1,6 -53.3,16.2c-27.7,-48 -79.4,-80.2 -138.7,-80.2c-88.4,0 -160,71.6 -160,160c0,2.7 0.1,5.4 0.2,8.1c-56,19.7 -96.2,73.1 -96.2,135.9c0,79.5 64.5,144 144,144l368,0c70.7,0 128,-57.3 128,-128c0,-61.9 -44,-113.6 -102.4,-125.4Z' style='fill:#fff;fill-rule:nonzero;filter:url(#dropshadow)')
        g#Arrows
            path(d='M832.066,358.191l-67.485,67.484l-20.105,-20.105l47.386,-47.385l-47.386,-47.363l20.105,-20.105l67.485,67.474Z' style='fill:#FFFFFF;fill-rule:nonzero;filter:url(#dropshadow)')
            path(d='M832.066,141.798l-67.485,67.485l-20.105,-20.105l47.386,-47.386l-47.386,-47.362l20.105,-20.105l67.485,67.473Z' style='fill:#FFFFFF;fill-rule:nonzero;filter:url(#dropshadow)')
        g#Dogs
            path(d='M1146,77.612l-96.275,0l-32.091,-32.092l-80.23,0c-13.293,0 -24.068,10.776 -24.068,24.069l0,144.412c0,13.293 10.775,24.069 24.068,24.069l208.596,0c13.293,0 24.069,-10.776 24.069,-24.069l0,-112.321c0,-13.293 -10.776,-24.068 -24.069,-24.068Z' style='fill:#fff;fill-rule:nonzero;filter:url(#dropshadow)')
            text(x='939.137px' y='71.382px' style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:26.281px;fill:#1471c1;") Dogs
        g#Cats
            path(d='M1146,294.013l-96.275,0l-32.091,-32.092l-80.23,0c-13.293,0 -24.068,10.776 -24.068,24.069l0,144.413c0,13.293 10.775,24.068 24.068,24.068l208.596,0c13.293,0 24.069,-10.775 24.069,-24.068l0,-112.321c0,-13.293 -10.776,-24.069 -24.069,-24.069Z' style='fill:#fff;fill-rule:nonzero;filter:url(#dropshadow)')
            text(x='939.137px' y='287.784px' style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:26.281px;fill:#1471c1;") Cats
        filter#dropshadow(height='130%')
            fedropshadow(dx='3' dy='6' stddeviation='5' flood-color='#0a3254' flood-opacity='0.1')

    div(ref="containerdog")
        v-card.dropzone-dog.draggable-dropzone--occupied.drag-dog
                .item
                    v-img(src="@/assets/dog.jpg")
        v-card.dropzone-dog.drop-dog

    div(ref="containercat")
        v-card.dropzone-cat.draggable-dropzone--occupied.drag-cat
                .item
                    v-img(src="@/assets/cat.jpg")
        v-card.dropzone-cat.drop-cat
</template>

<script>
export default {
    name: 'ProblemClassificationDemo',
    data: function () {
        return {
            dogDropped: false,
            catDropped: false
        }
    },
    mounted() {
        const dog = new this.$shopify.Droppable(this.$refs.containerdog, {
            draggable: '.item',
            dropzone: '.dropzone-dog',
            plugins: [this.$shopify.Plugins.Snappable]
        });

        dog.on('droppable:dropped', () => console.log('droppable:dropped'));
        dog.on('droppable:returned', () => console.log('droppable:returned'));

        const cat = new this.$shopify.Droppable(this.$refs.containercat, {
            draggable: '.item',
            dropzone: '.dropzone-cat',
            plugins: [this.$shopify.Plugins.Snappable]
        });

        cat.on('droppable:dropped', () => console.log('droppable:dropped'));
        cat.on('droppable:returned', () => console.log('droppable:returned'));
    }
}
</script>

<style scoped lang="scss">
.draggable-source--is-dragging {
    margin-bottom: 50px;
    top: -100px;
    display: block;
    transform: scale(1.2);
}

.draggable-mirror {
    box-shadow: 0 10px 4px #000;
}

.draggable--original{
    display: none
}

.item {
    top: 0%;
    position: relative;
    background: white;
    z-index: 2;
    cursor: move;
    width: 6vw;
    height: 6vw;
    transition: box-shadow 0.3s, transform 1s;
}

.dropzone-dog {
    width: 6vw;
    height: 6vw;
    margin: 20px;
}

.dropzone-cat {
    width: 6vw;
    height: 6vw;
    margin: 20px;
}

.demo {
    position: relative;
    height: 300px;
}

.drag-dog {
    position: absolute;
    top: 55%;
    width: 6vw;
    left: 29%;
}

.drag-cat {
    position: absolute;
    top: 40%;
    width: 6vw;
    left: 14%;
}

.drop-dog {
    position: absolute;
    width: 6vw;
    top: 14.5%;
    left: 77.5%;
}

.drop-cat {
    position: absolute;
    width: 6vw;
    top: 57.5%;
    left: 77.5%;
}

.image {
    width: 8vw;
    height: 8vw;
}

.image img,
.image svg {
    width: calc(60% + 20px);
    margin: 0.5vw;
    border-radius: 10px;
    filter: drop-shadow(1px 2px 4px #0003);
    cursor: grab;
}
</style>
