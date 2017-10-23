
//单独样式
$(function(){
$(".nav li:nth-child(6)").addClass("bj");
});
$(document).ready(function(){ 
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