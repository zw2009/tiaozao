
//单独样式
$(function(){
$(".drawing_left_tu li:nth-child(1)").addClass("bj1");
$(".drawing_left_tu li:nth-child(2)").addClass("bj2");
$(".drawing_left_tu li:nth-child(3)").addClass("bj3");

$(".drawing_left_list li:nth-child(1)").addClass("bj1");
$(".drawing_left_list li:nth-child(2)").addClass("bj2");
$(".drawing_left_list li:nth-child(3)").addClass("bj3");
$(".xtjufz li:nth-child(2n)").addClass("bj");

});
$(document).ready(function(){ 


$(".drawing_left_list li.bj1").hover(function(){
		$(this).addClass("open");
		$(".drawing_left_list li.bj2").removeClass("open");
		$(".drawing_left_list li.bj3").removeClass("open");
		$(".drawing_left_tu li.bj1").fadeIn();
		$(".drawing_left_tu li.bj2").fadeOut();
		$(".drawing_left_tu li.bj3").fadeOut();
		},function(){
			
	});
	
	$(".drawing_left_list li.bj2").hover(function(){
		$(this).addClass("open");
		$(".drawing_left_list li.bj1").removeClass("open");		
		$(".drawing_left_list li.bj3").removeClass("open");
		$(".drawing_left_tu li.bj2").fadeIn();
		$(".drawing_left_tu li.bj1").fadeOut();
		$(".drawing_left_tu li.bj3").fadeOut();
		},function(){
			
	});
	
	$(".drawing_left_list li.bj3").hover(function(){
		$(this).addClass("open");
		$(".drawing_left_list li.bj1").removeClass("open");
		$(".drawing_left_list li.bj2").removeClass("open");
		$(".drawing_left_tu li.bj3").fadeIn();
		$(".drawing_left_tu li.bj1").fadeOut();
		$(".drawing_left_tu li.bj2").fadeOut();
		},function(){
			
	});
});


