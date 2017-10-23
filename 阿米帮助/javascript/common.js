
//单独样式
$(function(){
$(".nav li:nth-child(6)").addClass("bj");
});

$(document).ready(function(){ 
	icodx();//右边高度自适应
	window.onresize=function(){icodx();};	
	$(".left_menu li").click(function(){ 			
		$(this).find("div").eq(0).slideDown();		
		$(this).siblings().find("div").slideUp();		
		$(this).addClass("open");
		$(this).siblings().removeClass("open");	
		$(".left_menu ul li.open a")[0].click();			
	});	
	$(".left_menu li div a").click(function(){
		$(".left_menu li div a").css("color","#333");
		$(this).css("color","#0eb6bd");
		 event.stopPropagation();
	});
	/**
	$(".front").click(function(){		
		var dq=$(".left_menu a.open").index()-1;		
		if(dq==-1){			
			$(".left_menu li.open").prev("li").click();	
			var ga=$(".left_menu li.open a").size()-1;	
			$(".left_menu ul li.open a")[ga].click();		
		}else{
			$(".left_menu ul li.open a")[dq].click();		
		};		
	});
	
	$(".back").click(function(){		
		var gg=$(".left_menu li.open a").size();		
		var dq=$(".left_menu a.open").index()+1;
		if(gg==dq){
			$(".left_menu li.open").next("li").click();					
			$(".left_menu ul li.open a")[0].click();			
		}else{
			$(".left_menu ul li.open a")[dq].click();	
		};
	});
	**/
});
function icodx() 
{
	var bodyw = $(window).width();
	var bodyh=$(window).height();
	$(".nav").css("height",bodyh-80);
	$(".left_menu").css("height",bodyh-122);
	$(".commer").css("height",bodyh-80);
	$("#mainframe").css("height",bodyh-128);
	
}
