import '../style/head.less'
let head = require('../template/head.art')
const list = [
  {name:'首页',href: '/'},
  {name:'品牌介绍',href: '/brand.html'},
  {name:'案例赏析',href: '/admire.html'},
  {name:'联络信息',href: '/map.html'},
  {name:'招商加盟',href: '/join.html'},
]
document.getElementById('head').innerHTML  = head({list: list, pathName: window.location.pathname})
!function() {
  let hanli = function() {
    var self = this;
    self.pageSize = window.pageSize||8;
    self.offset = $(window).width()<1480?11:21;
    this.init = function () {
      var $targetEle = $(".nav-list>li:not('.last')"),
      $navBox = $(".wrap-1500");
      var $slider = $(".nav-line");
      function navInit(){
        var $slider = $(".nav-line");
        var $liCur = $(".nav-list>li.hover"),
        curP = $liCur.offset().left + self.offset,
        curW = $liCur.outerWidth(true) - self.offset*2;
        $slider.css({
          "left" : curP,
          "width" : curW
        });
        const winhei = $(window).height()
        $(window).scroll(function(event){
          var winPos = $(window).scrollTop();
          if (winhei > winPos) {
            $('.head').removeClass('headScroll')
          } else {
            $('.head').addClass('headScroll')
          }
        });
      }
      function nav() {
        var $targetEle = $(".nav-list>li:not('.last')"),
            $navBox = $(".wrap-1500");
        $targetEle.mouseenter(function () {
          if($(this).hasClass("car") || $(this).hasClass("dealer")){
          return;	
          }
          var $_parent = $(this),//.parent(),
          _width = $_parent.outerWidth(true) - self.offset*2,
			    posL = $_parent.offset().left + self.offset;
          $slider.stop(true, true).animate({
            "left" : posL,
            "width" : _width
          }, "fast");
        });
        // $targetEle.click(function () {
        //   var $_parent = $(this),//.parent(),
        //   _width = $_parent.outerWidth(true) - self.offset*2,
        //   posL = $_parent.offset().left + self.offset;
        //   $navBox.curP = posL
        //   $navBox.curW = _width
        // });
        $navBox.mouseleave(function (cur, wid) {
          
          cur = self.curP;
          wid = self.curW;
          $slider.stop(true, true).animate({
            "left" : cur,
            "width" : wid
          }, "fast");
        });
      };
      $(window).load(function(){
        nav()
        setTimeout(function(){
          navInit();
        },200)
      })
      $(window).resize(function(){
        if($(window).width()<1480){
          $("body").addClass("body_1200")
          self.offset = 11;
        }else{
          $("body").removeClass("body_1200")	
          self.offset = 21;
        }
        setTimeout(function(){
          navInit();
        },50)
      });
    }
  }
  window.hl = new hanli();	
	$(document).ready(function(e) {
		window.hl.init();
  });
  
}()


