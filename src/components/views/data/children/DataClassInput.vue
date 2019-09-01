<template>
    <div class="base">
        <grid :columns="grid.columns" :gap="grid.gap">
            <grid-item>
                <img id="flickr" src="@/assets/flickr.svg">
            </grid-item>
            <grid-item>
                <input id="textfield" ref="textfield" type="text" :value="className" @keydown.enter="refresh">
            </grid-item>
            <grid-item>
                <button id="refresh" @click="refresh">
                    <icon icon="sync-alt"/>
                </button>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    export default {
        name: 'DataClassInput',
        props: {
            i: Number
        },
        computed: {
            className: function() {
                return this.$store.getters['dataset/getClass'](this.i)
            }
        },
        data: function() {
            return {
                grid: {
                    columns: ['120px', 'auto', '40px']
                }
            }
        },
        methods: {
            refresh: function() {
                this.$store.commit('dataset/setClass', {
                    i: this.i, 
                    newClass: this.$refs.textfield.value
                })
            }
        }
    }
</script>

<style scoped>
    .base {
        background-color: #278be4;
        margin-top: 100px;
        margin-bottom: 10px;
        border: 2px solid #278be4;
        height: 40px;
        padding: 0;
        border-radius: 10px;
        margin-right: 5px;
        margin-left: 5px;
        filter: drop-shadow(1px 2px 3px #0002);
    }

    #flickr {
        height: 40px;
        padding: 5px;
        box-sizing: border-box;
        display: block;
        margin: auto;
    }

    #textfield {
        border: none;
        background-color: #FFF;
        height: 40px;
        width: 100%;
        margin: auto;
        font-size: 20px;
        padding-left: 10px;
        box-sizing: border-box;
        color: #2699FB;
    }
    
    #textfield:focus {
        border: none;
    }

    #refresh {
        background-color: #278be4;
        border: none;
        height: 40px;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 20px;
        color: #FFF;
        cursor: pointer;
        border-radius: 0 10px 10px 0;
    }
    
    #refresh:hover {
        background-color: #2699FB;
    }
    
    
    #refresh:focus {
        outline: none;
    }
</style>
