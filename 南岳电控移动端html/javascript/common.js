
//单独样式
$(function(){
$(".push li:nth-child(2n)").addClass("bj");
});

//无图图像
var nullimg='../images/error.jpg';
function lod(t){
	t.onerror = null;
	t.src=nullimg
}


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


