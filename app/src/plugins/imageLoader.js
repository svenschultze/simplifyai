import Vue from 'vue'

const url = new URL('https://api.flickr.com/services/rest/')
const method = 'flickr.photos.search'
const api_key = 'f046ec39f4f9195b356c231e2c488dcb'
const sort = 'relevance'
const extras = 'url_l,url_sq'
const media = 'photos'
const format = 'json'
const nojsoncallback = 1

const params = { method, api_key, sort, extras, media, format, nojsoncallback }
Object.keys(params).forEach(key =>
    url.searchParams.append(key, params[key])
)

const amount_images = 200

const loadImages = function(store, payload) {
    const {i, newClass} = payload
    url.searchParams.append('text', newClass)
    url.searchParams.append('per_page', amount_images)
    
    store.commit('dataset/unsetData', i)

    const call = async() => {
        const response = await fetch(url)
        const json = await response.json()
        const newData = json.photos.photo
        store.commit('dataset/setData', { i, newData })
    }
    call()
}

const replaceImage = function(store, payload) {
    const {i, position} = payload
    const className = store.getters['dataset/getClass'](i)
    
    url.searchParams.append('text', className)
    url.searchParams.append('per_page', 1)
    url.searchParams.append('page', amount_images + Math.floor((Math.random() * amount_images * 2)))

    const call = async() => {
        const response = await fetch(url)
        const json = await response.json()
        const image = json.photos.photo[0]
        store.commit('dataset/setImage', { i, position, image })
    }
    call()
}

const init = function(store) {
    store.subscribe((mutation) => {
        if (mutation.type === 'dataset/setClass') {
            loadImages(store, mutation.payload)
        }
        if (mutation.type === 'dataset/replaceImage') {
            replaceImage(store, mutation.payload)
        }
    })
}

export default store => init(store)