import {imgInfoList} from './data/detailData'
let admireList = require('../template/admire_list.art')

function page (index, admire_imgs) {
  let indexLast = index*6 + 6 > admire_imgs.length ? admire_imgs.length : index*6 + 6;
  const showList = admire_imgs.slice(index*6, indexLast)
  const pageNum = Math.ceil(admire_imgs.length/6);
  const pageList = new Array(pageNum)
  document.getElementById('admire_list').innerHTML  = admireList({list: showList, pageList: pageList, currentPage: index});
  $('#admire_list .fenye a').bind('click', function () {
    const index = $(this).context.name
    $('.fenye').find('a').siblings().removeClass('thisclass')
    $(this).addClass('thisclass')
    page(Number(index), admire_imgs)
  })
}

page(0, imgInfoList)
