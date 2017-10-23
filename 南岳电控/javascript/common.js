
//单独样式
$(function(){
$(".inside li:nth-child(1)").addClass("bj1");
$(".inside li:nth-child(2)").addClass("bj2");
$(".inside li:nth-child(3)").addClass("bj3");
$(".inside li:nth-child(4)").addClass("bj4");
$(".idet1 a:nth-child(2n)").addClass("bj");
$(".idet2 a:nth-child(3n)").addClass("bj");
$(".idet2 a:nth-child(2)").addClass("bj1");
$(".idet2 a:nth-child(5)").addClass("bj1");
$(".idet2 a:nth-child(8)").addClass("bj1");
$(".idet2 a:nth-child(11)").addClass("bj1");
$(".zhjscs_left ul li:nth-child(2n)").addClass("bj");
$(".hffw ul li:nth-child(2n)").addClass("bj");
$(".tgse_sau tr:nth-child(2n)").addClass("bj");
$(".cfcma ul li:nth-child(3n)").addClass("bj");
$(".wap_map li:nth-child(5)").addClass("bj");
$(".wap_map li:nth-child(3n)").addClass("bj1");
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
//产品遮罩层效果
$(".container").bind("mouseenter mouseleave",function(e) {
           var w = $(this).width();
           var h = $(this).height();
           var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
           var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
           //alert(x);
		   var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
           //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
           var eventType = e.type;
           //alert(e.type);
           if(e.type == 'mouseenter'){
              if(direction==0){
              	$(this).find('.mask').css({'display':'block','top':-h+'px','left':'0px'}).animate({'top':'0px'});
              }else if(direction==1){
              	$(this).find('.mask').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'0px'});
              }else if(direction==2){
              	$(this).find('.mask').css({'display':'block','top':h+'px','left':'0px'}).animate({'top':'0px'});
              }else if(direction==3){
              	$(this).find('.mask').css({'display':'block','left':-w+'px','top':'0px'}).animate({'left':'0px'});
              }
          }else{
              if(direction==0){
              	$(this).find('.mask').animate({'top':-h+'px'});
              }else if(direction==1){
              	$(this).find('.mask').animate({'left':w+'px'});
              }else if(direction==2){
              	$(this).find('.mask').animate({'top':h+'px'});
              }else if(direction==3){
              	$(this).find('.mask').animate({'left':-w+'px'});
              }
          }
      });
/*加入收藏*/
function setHome(obj,url){
try {
  obj.style.behavior = 'url'+'(#default#homepage)';
  obj.setHomePage(url);
}
catch (e) {
  if (window.netscape) {
   try {
    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
   }
   catch (e) {
    alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");
   }
   var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',url);
  }
}
}
function AddFavorite(sURL, sTitle)
{
   try
   {
       window.external.addFavorite(sURL, sTitle);
   }
   catch (e)
   {
       try
       {
           window.sidebar.addPanel(sTitle, sURL, "");
       }
       catch (e)
       {
           alert("加入收藏失败，请使用Ctrl+D进行添加");
       }
   }
}



