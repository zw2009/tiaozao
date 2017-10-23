
//单独样式
$(function(){
$(".nav li:nth-child(6)").addClass("bj");
$(".xzyshb ul li:nth-child(5)").addClass("bj");
$(".libieo ul li:nth-child(3n)").addClass("bj");
$(".zhjscs_left ul li:nth-child(2n)").addClass("bj");
$(".hfufu li:nth-child(5n)").addClass("bj");
$(".sagys li:nth-child(3n)").addClass("bj");
$(".cfcma li:nth-child(3n)").addClass("bj");
});
//文字大中小
function fontResizer(smallFont,medFont,largeFont){	
	$(".smallFont").click(function(){
		$('.fontsizebox').css('font-size', smallFont);
		clearSelected();
		$(".smallFont").addClass("curFont");
		saveState(smallFont);
	});

	$(".medFont").click(function(){
		$('.fontsizebox').css('font-size', medFont);
		clearSelected();
		$(".medFont").addClass("curFont");
		saveState(medFont);
	});

	$(".largeFont").click(function(){
		$('.fontsizebox').css('font-size', largeFont);
		clearSelected();
		$(".largeFont").addClass("curFont");
		saveState(largeFont);
	});
}
$(document).ready(function(){ 
	$(".dak a.left").hover(function(){
		$(".dak a.left span").addClass("open");
		$(".dak a.right span").removeClass("open");		
		$(".re_icq1").slideDown();
		$(".re_icq2").slideUp();	
		},function(){
		$(".re_icq2").slideUp();	
		
	});
	$(".dak a.right").hover(function(){
		$(".dak a.right span").addClass("open");
		$(".dak a.left span").removeClass("open");
		$(".re_icq2").slideDown();
		$(".re_icq1").slideUp();
		},function(){
		$(".re_icq1").slideUp();
	});
	$(".list li a").hover(function(){
		$(this).children(".lisbox").stop().animate({top:'-9px'});		
		},function(){
		$(this).children(".lisbox").stop().animate({top:'124px'});	
	});	
	
	$(".jscs").fadeOut();
	$(".xlewn").fadeOut();	
	$(".dqx1").click(function(){ 		
		$(".cpdjqh li").removeClass("open");		
		$(this).addClass("open");
		$(".cpjes").fadeIn();
		$(".jscs").fadeOut();
		$(".xlewn").fadeOut();		
	});
	$(".dqx2").click(function(){ 		
		$(".cpdjqh li").removeClass("open");		
		$(this).addClass("open");
		$(".jscs").fadeIn();
		$(".cpjes").fadeOut();
		$(".xlewn").fadeOut();		
	});
	$(".dqx3").click(function(){ 
		$(".cpdjqh li").removeClass("open");		
		$(this).addClass("open");
		$(".xlewn").fadeIn();
		$(".cpjes").fadeOut();
		$(".jscs").fadeOut();		
	});
			
});
//新闻动态tbas
var TabbedContent = {
	init: function() {	
		$(".tab_item").mouseover(function() {
		
			var background = $(this).parent().find(".moving_bg");
			$(".tab_item").css("color","#4a4a4a");	
			$(this).css("color","#fff");			
			$(background).stop().animate({
				left: $(this).position()['left']
			}, {
				duration: 300
			});
			
			TabbedContent.slideContent($(this));
			
		});
	},
	
	slideContent: function(obj) {		
		var margin = $(obj).parent().parent().find(".slide_content").width();
		margin = margin * ($(obj).prevAll().size() - 1);
		margin = margin * -1;		
		$(obj).parent().parent().find(".tabslider").stop().animate({
			marginLeft: margin + "px"
		}, {
			duration: 300
		});
	}
}

$(document).ready(function() {
	TabbedContent.init();
});