import Vue from 'vue'

const state = {
    predictions: [],
    uploads: []
}

const mutations = {
    setPrediction: function(state, payload) {
        state.predictions = payload.data[0]
    },
    addUpload: function(state, payload) {
        state.uploads.unshift(payload)
    }
}

const loadImg = function(context, file) {
    const objectURL = URL.createObjectURL(file)
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.crossOrigin = "*";
    img.onload = async() => {
        ctx.drawImage(img, 0, 0, 75, 75)
        const imgData = ctx.getImageData(0, 0, 75, 75)

        // convert rgba to rgb
        const rgb = []
        for (let k = 0; k < imgData.data.length; k++) {
            if (k % 4 != 3) rgb.push(imgData.data[k])
        }
        
        context.dispatch('training/requestPrediction', { image: rgb, url: objectURL }, { root: true })
    }
    img.src = objectURL
}

const actions = {
    requestPrediction: function(context, files) {
        const validImageTypes = ['image/jpeg', 'image/png'];
        for (let i = 0; i < files.length; i++) {
            if(validImageTypes.includes(files[i]['type'])) {
                loadImg(context, files[i])
            }
        }
    }
}

const getters = {
    getPrediction: state => {
        return state.predictions
    },
    getUploads: state => {
        return state.uploads
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
