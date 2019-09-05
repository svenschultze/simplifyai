<template lang="pug">
    v-text-field(v-model="className" rounded solo prepend-inner-icon="mdi-flickr" append-icon="mdi-sync" @click:append="refresh" @keyup.enter="refresh")
</template>

<script>
export default {
    name: 'DataClassInput',
    props: {
        i: Number
    },
    data: function () {
        return {
            grid: {
                columns: ['120px', 'auto', '40px']
            },
            className: this.$store.getters['dataset/getClass'](this.i)
        }
    },
    methods: {
        refresh: function () {
            this.$store.commit('dataset/setClass', {
                i: this.i,
                newClass: this.className
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
    background-color: #fff;
    height: 40px;
    width: 100%;
    margin: auto;
    font-size: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    color: #2699fb;
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
    color: #fff;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
}

#refresh:hover {
    background-color: #2699fb;
}

#refresh:focus {
    outline: none;
}
</style>
