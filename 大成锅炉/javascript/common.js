//加入收藏
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
//单独样式
$(function(){
$(".menu li:last-child").addClass("bj");

$(".drawing_left_tu li:nth-child(1)").addClass("bj1");
$(".drawing_left_tu li:nth-child(2)").addClass("bj2");
$(".drawing_left_tu li:nth-child(3)").addClass("bj3");

$(".drawing_left_list li:nth-child(1)").addClass("bj1");
$(".drawing_left_list li:nth-child(2)").addClass("bj2");
$(".drawing_left_list li:nth-child(3)").addClass("bj3");

$(".teb_tit li:nth-child(1)").addClass("bj1");
$(".teb_tit li:nth-child(2)").addClass("bj2");
$(".teb_tit li:nth-child(3)").addClass("bj3");
$(".teb_tit li:nth-child(4)").addClass("bj4");
$(".teb_tit li:nth-child(5)").addClass("bj5");
$(".teb_tit li:nth-child(6)").addClass("bj6");
$(".teb_tit li:nth-child(7)").addClass("bj7");
$(".teb_tit li:nth-child(8)").addClass("bj8");

$(".teb_com li:nth-child(1)").addClass("bj1");
$(".teb_com li:nth-child(2)").addClass("bj2");
$(".teb_com li:nth-child(3)").addClass("bj3");
$(".teb_com li:nth-child(4)").addClass("bj4");
$(".teb_com li:nth-child(5)").addClass("bj5");
$(".teb_com li:nth-child(6)").addClass("bj6");
$(".teb_com li:nth-child(7)").addClass("bj7");
$(".teb_com li:nth-child(8)").addClass("bj8");
$(".rrzz li:nth-child(3n)").addClass("bj");
$(".zhsj li:nth-child(3)").addClass("bj");



});
$(document).ready(function(){ 
	$(".muan li").hover(function(){
		$(this).children(".ico").stop().slideDown();
		},function(){
		$(this).siblings().children(".ico").stop().slideUp();	
		$(this).children(".ico").stop().slideUp()
	});
	
	$(".teb_tit li.bj1").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj1").fadeIn();		
	});
	
	$(".teb_tit li.bj2").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj2").fadeIn();		
	});
	
	$(".teb_tit li.bj3").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj3").fadeIn();		
	});
	
	
	$(".teb_tit li.bj4").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj4").fadeIn();		
	});
	
	$(".teb_tit li.bj5").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj5").fadeIn();		
	});
	
	$(".teb_tit li.bj6").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj6").fadeIn();		
	});
	
	$(".teb_tit li.bj7").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj7").fadeIn();		
	});
	
	$(".teb_tit li.bj8").click(function(){ 
		$(".teb_tit li").removeClass("open");
		$(this).addClass("open");
		$(".teb_com li").hide();		
		$(".teb_com li.bj8").fadeIn();		
	});
	$(".dj1").click(function(){ 
		$(this).addClass("open");
		$(".dj2").removeClass("open");
		$(".dj3").removeClass("open");		
		$(".yc1").fadeIn();
		$(".yc2").fadeOut();
		$(".yc3").fadeOut();
	});
	$(".dj2").click(function(){ 
		$(this).addClass("open");
		$(".dj1").removeClass("open");
		$(".dj3").removeClass("open");		
		$(".yc2").fadeIn();
		$(".yc1").fadeOut();
		$(".yc3").fadeOut();
	});
	$(".dj3").click(function(){ 
		$(this).addClass("open");
		$(".dj2").removeClass("open");
		$(".dj3").removeClass("open");		
		$(".yc3").fadeIn();
		$(".yc1").fadeOut();
		$(".yc2").fadeOut();
	});
	
	$(".qi1").click(function(){ 
		$(this).addClass("open");
		$(".qi2").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi4").removeClass("open");
		$(".qi5").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs1").fadeIn();
		$(".ycs2").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs5").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi2").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi4").removeClass("open");
		$(".qi5").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs2").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs5").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi3").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi2").removeClass("open");
		$(".qi4").removeClass("open");
		$(".qi5").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs3").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs2").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs5").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi4").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi2").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi5").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs4").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs2").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs5").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi5").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi2").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi4").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs5").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs2").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi6").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi2").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi4").removeClass("open");	
		$(".qi5").removeClass("open");	
		$(".qi7").removeClass("open");		
		$(".ycs6").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs2").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs5").fadeOut();
		$(".ycs7").fadeOut();
	});
	$(".qi7").click(function(){ 
		$(this).addClass("open");
		$(".qi1").removeClass("open");
		$(".qi2").removeClass("open");
		$(".qi3").removeClass("open");
		$(".qi4").removeClass("open");	
		$(".qi6").removeClass("open");	
		$(".qi5").removeClass("open");		
		$(".ycs7").fadeIn();
		$(".ycs1").fadeOut();
		$(".ycs2").fadeOut();
		$(".ycs3").fadeOut();
		$(".ycs4").fadeOut();
		$(".ycs6").fadeOut();
		$(".ycs5").fadeOut();
	});
	
	
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
	$(".lianxm").fadeOut();	
	$(".cnxq").click(function(){ 
		$(this).addClass("open");
		$(".lxwm").removeClass("open");
		$(".cpjs").fadeIn();
		$(".lianxm").fadeOut();		
	});
	$(".lxwm").click(function(){ 
		$(this).addClass("open");
		$(".cnxq").removeClass("open");
		$(".lianxm").fadeIn();
		$(".cpjs").fadeOut();		
	});
	$(".ddcx").click(function(){ 		
		$(this).animate({height:'toggle'});
	});
}); 