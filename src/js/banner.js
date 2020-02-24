import '../style/scroll.less'
let scroll = require('../template/scroll.art')
import Scrolls from './scroll.js'

const list = [
  {img:'./banner10.jpg'},
  {img:'./banner11.jpg'},
  {img:'./banner12.jpg'},
  {img:'./banner13.jpg'},
  {img:'./banner14.jpg'},
]
document.getElementById('banner').innerHTML  = scroll({list: list})
const scrolls = new Scrolls('.index-banner')
const Img = new Image();
Img.src = '/banner10.jpg'
Img.onload = function () {
  scrolls.init()
}


