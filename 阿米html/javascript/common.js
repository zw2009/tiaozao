//单独样式
$(function(){
$(".mati_right li:nth-child(1)").addClass("bj1");
$(".mati_right li:nth-child(2)").addClass("bj2");
$(".mati_right li:nth-child(3)").addClass("bj3");
$(".mati_right li:nth-child(4)").addClass("bj4");
});
$(document).ready(function(){ 
	icodx();
	window.onresize=function(){ 
	   icodx();
	}; 	
	function icodx() 
	{
		
	var ph = $(window).height();
	var pw = $(window).width();
	$(".padden").css("height",ph-70);
	if( pw < 1400 ){
		$("#container").css("height",421);
		$("#example").css("height",421);
		$("#slides").css("height",421);
		$(".slides_container img").css("height",421);
		$("#slides").css("width",1366);
		$("#slides").css("marginLeft",-683);
		$(".slides_container img").css("width",1366);	
	}else{
		$("#container").css("height",484);
		$("#example").css("height",484);
		$("#slides").css("height",484);
		$(".slides_container img").css("height",484);
		$("#slides").css("width",1920);
		$("#slides").css("marginLeft",-800);
		$(".slides_container img").css("width",1920);
	}
	//第一屏居中
	var mum=( $(".padden").height() - $("#container").height() - 82)/2;
	$(".menu").css("marginTop",mum);
	//第二屏居中
	var mum2=( $(".padden").height() - $(".ind_comm2").height())/2;
	$(".ind_comm2").css("marginTop",mum2);
	
	//第三屏居中
	var mum3=( $(".padden").height() - $(".ind_comm3").height())/2;
	$(".ind_comm3").css("marginTop",mum3);
	
	//第四屏居中
	var mum4=( $(".padden").height() - $(".ind_comm4").height())/2;
	$(".ind_comm4").css("marginTop",mum4);
	
	//第五屏居中
	var mum5=( $(".padden").height() - $(".ind_comm5").height())/2;
	$(".ind_comm5").css("marginTop",mum5);
	
	//第六屏居中
	var mum5=( $(".padden").height() - $(".ind_comm6").height())/2;
	$(".ind_comm6").css("marginTop",mum5);
	
	}
	
	//banner
	$(".mati_right li.bj1").click(function(){ 
		$(".mati_left").animate({top:'0px'});	
	});
	$(".mati_right li.bj2").click(function(){ 
		$(".mati_left").animate({top:'-400px'});	
	});
	$(".mati_right li.bj3").click(function(){ 
		$(".mati_left").animate({top:'-800px'});	
	});
	$(".g1").click(function(){ 
		$(this).addClass("open");
		$(".g2").removeClass("open");
		$(".g3").removeClass("open");
		$("body").scrollTop(495);		
	});
	$(".g2").click(function(){ 
		$(this).addClass("open");
		$(".g1").removeClass("open");
		$(".g3").removeClass("open");
		$("body").scrollTop(840);		
	});
	$(".g3").click(function(){ 
		$(this).addClass("open");
		$(".g1").removeClass("open");
		$(".g2").removeClass("open");
		$("body").scrollTop(2183);
	});
	$(".top div").hover(function(){
		$(this).stop().animate({width:'159px'});
		},function(){
		$(this).stop().animate({width:'50px'});	
	});
	
	$(".header_a span").click(function(){ 
		if($("#menu li").hasClass("active")){
			$(".top").fadeIn();
  		}else{
			$(".top").fadeOut();
		}	
	});
	setInterval("$('.header_a span').trigger('click');",400);
}); 