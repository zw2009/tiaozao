
//单独样式
$(function(){
$(".nav ul li:nth-child(6)").addClass("bj");
$(".qorz ul li:nth-child(2n)").addClass("bj");
$(".xelb li:nth-child(2n)").addClass("bj");
});

//无图图像
var nullimg='../images/error.jpg';
function lod(t){
	t.onerror = null;
	t.src=nullimg
}
$(document).ready(function(){	
	$(".x_h1").hover(   
		function (){      
			$(".x_img1").stop().fadeIn();   
			$(".yc2").stop().fadeIn();   
		},
		function (){      
			$(".x_img1").fadeOut();   
			$(".yc2"). fadeOut(); 
		}
	 );
	 $(".x_h2").hover(   
		function (){      
			$(".x_img2").stop().fadeIn();   
			$(".yc3").stop().fadeIn();   
		},
		function (){      
			$(".x_img2").fadeOut();   
			$(".yc3"). fadeOut(); 
		}
	 );
	 $(".x_h3").hover(   
		function (){      
			$(".x_img3").stop().fadeIn();   
			$(".yc4").stop().fadeIn();   
		},
		function (){      
			$(".x_img3").fadeOut();   
			$(".yc4"). fadeOut(); 
		}
	 );
})

/*打印标记*/
function doPrint() {
bdhtml=window.document.body.innerHTML;
sprnstr="<!--startprint-->";
eprnstr="<!--endprint-->";
prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17);
prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
OpenWindow = window.open("");  
OpenWindow.document.write("<!DOCTYPE HTML><HTML><HEAD><meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/><TITLE>打印页<\/TITLE><link href=\"../css\/print.css\" rel=\"stylesheet\" type=\"text\/css\" \/><\/HEAD><BODY><div id=\"printbox\" class=\"news_cont\" ><\/div><\/BODY><\/HTML>"); 
OpenWindow.document.getElementById("printbox").innerHTML=prnhtml;  
OpenWindow.document.close(); 
OpenWindow.print();  
}
/*打印区的内容一定要加<!--startprint-->和<!--endprint-->标记*/
//<a href="javascript:;" onClick="doPrint()">打印</a>


