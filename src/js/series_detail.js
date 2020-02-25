let seriesDetailList = require('../template/series_detail.art')
import {imgInfoList} from './data/seriesData'

function getTitle() {
  // title
  var title = decodeURI(location.search); 
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

let title = getTitle()
let showList = getImages(title)
document.getElementById('series_detail_list').innerHTML  = seriesDetailList({list: showList, title: title});

// 获取图片原始大小
function getImageInfo(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
    // 如果图片被缓存，则直接返回缓存数据
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
        }
    }
}
// 绑定图片放大函数
$('.imgs>img').bind('click', function () {
    var clientH = $(window).height();
    var clientW = $(window).width();
    var newImg = $(this)[0].src;
    getImageInfo(newImg, function(width, height){
        let w = width > clientW ? clientW * 0.8 : width
        let h = height > clientH ? clientH * 0.8 : height
        $("body").append('<div class="fillbg"></div>');
        $(".fillbg").addClass("fillbg-active");
        $('.bgImg').css({'width': w + 'px','height': h + 'px','top':(clientH-h)/2+"px",'left':(clientW-w)/2+"px",'z-index':1101});
        $('.bgImg').attr("src", newImg);
    })
})
$(".bgImg").bind("click", function(){
    $(".fill-input").removeClass("fill-input-active");
    setTimeout(function(){
        $(".fillbg-active").removeClass("fillbg-active");
        $(".fillbg").remove();
    },300);
    $('.bgImg:hover').css({'cursor': 'pointer'});
    $('.bgImg').css({'width': '0px','height': '0px'});
    $('.bgImg').attr("src",'');
});