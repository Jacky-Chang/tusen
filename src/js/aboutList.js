import '../style/aboutList.less'
import {imgInfoList} from './data/seriesData'
let aboutList = require('../template/aboutList.art')

document.getElementById('aboutList').innerHTML  = aboutList({list: imgInfoList})
$('.wrap_list li').bind('mouseenter',function (e) {
  $(this).siblings().removeClass('select')
  $(this).addClass('select')
  const index = $(this).index()
  $('.pro-nav-img').find('li').eq(index).addClass('select').siblings().removeClass('select')
})