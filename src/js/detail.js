import {imgInfoList} from './data/detailData'
let detailContent = require('../template/detail.art')

function getTitle() {
    let title = decodeURI(location.search); 
    if (title && title.includes('title=')) {
        title = title.split('title=')[1].includes('&')? title.split('title=')[1].split['&'][0] : title.split('title=')[1]
    } else {
        title = null
    }
    return title
}

function getImages(title) {
    if (title === null){
        return null
    }
    for(var imgInfo of imgInfoList){
        if (imgInfo.title === title){
            return imgInfo.images
        }
    }
    return []
}

const title = getTitle()
const images = getImages(title)
document.getElementById('content').innerHTML = detailContent({title:title, list: images})
