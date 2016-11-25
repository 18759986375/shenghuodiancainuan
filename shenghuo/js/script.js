/*功能模块作用域封装*/
(function (w, d) {
	//w.addEventListener("resize", );
	//w.addEventListener("load", );
	// 移动端加载事件
	//d.addEventListener("DOMContentLoaded", );
})(window, document);

/*jQuery*/
(function ($, w, d) {
// @media状态
	$(function () {
		$(".navlist-c").click(function(event) {
			$(".navlist").animate({"height" : "340px"});
			$(this).css({"display" : "none"});
			$('.navlist-s').css({"display" : "block"});
		});
		$(".navlist-s").click(function(event) {
			$(".navlist").animate({"height" : "0px"});
			$(this).css({"display" : "none"});
			$('.navlist-c').css({"display" : "block"});
		});
		$(".navlist-s").children('li').click(function(event) {
			$(".navlist").animate({"height" : "0px"});
			$(this).css({"display" : "none"});
			$('.navlist-c').css({"display" : "block"});
		});
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$(".header").css({"background": "rgba(255, 255, 255, 0.8)"});
			$(".header").children('.content').children('.nav').css({"height":"60px","line-height":"60px"},500);
			$(".colo").css({"color":"#000"});
			$(".index-logo").addClass('sca');
			$(".index-logo").eq(0).css({"display":"none"}).next('img').css({"display":"block"});
		} else if ($(window).scrollTop() <= 10) {
			$(".header").css({"background": "rgba(255, 255, 255, 0)"});
			$(".header").children('.content').children('.nav').css({"height":"80px","line-height":"80px"},500);
			$(".index-logo").removeClass('sca');
			$(".index-logo").eq(0).css({"display":"block"}).next('img').css({"display":"none"});
			$(".colo").css({"color":"#fff"});
		}
	});

	$(".herft").click(function() {
		window.open("http://www.sobot.com/chat/pc/index.html?sysNum=92c17dbca1844f10a2f9a68536d69430","","width=450,height=520,top=250,left=400")
	});
	$(".gotop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
 	$(window).scroll(function () {
		if ($(window).scrollTop() > 600) {
			$(".gotop").css({"display":"block"});
		}  else {
			$(".gotop").css({"display":"none"});
		}
	});
})(jQuery, window, document);



