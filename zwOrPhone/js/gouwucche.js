//当前点击的圆圈选择
$(document).on("click",".content_one .round",function(){
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		$("#roundback").removeClass("cur");					
	}
	else{					
		$(this).addClass("cur");
		}			    
	if($(".content_one").length==$(".content_one .cur").length){
		$("#roundback").addClass("cur");
	 }		    
		sum();
		num();
})
			
//点击全选			
$(document).on("click","#roundback",function(){		
	if($(this).hasClass("cur")){
		$(".content_one .round").removeClass("cur");
		$(this).removeClass("cur");		
	}
	else{
		$(".content_one .round").addClass("cur");
		$(this).addClass("cur");		
	}				
		sum();
		num();
})
//sum总价格循环相加
function sum(){
	var sum=0;
	var content=$(".content_one .cur");	
	for(var i=0;i<content.length;i++){		
		var newPrice=parseInt(content.eq(i).parent().find(".newPrice").html());
		var number=parseInt(content.eq(i).parent().find(".number").html());
			sum=sum+newPrice*number;
	}
	$(".sum").html("￥"+sum);
}
//结算是选中round里面的个数			
function num(){
	$(".total").html("结算（"+$(".content_one .cur").length+"）");
}
			

			
//数量增加操作
 $(document).on("click",".add",function(){  
    var prev=$(this).prev();
    prev.html(parseInt(prev.html())+1);
    setTotal($(this).closest(".content_one"));
}) 
//数量减少操作
$(document).on("click",".min",function(){
    var next=$(this).next();
    if(parseInt(next.html())>0){
    	next.html(parseInt(next.html())-1);
    }
    setTotal($(this).closest(".content_one"));
})
//计算操作
 function setTotal(content_one){
    var text=content_one.find(".numbox").html();
    content_one.find(".number").html(text);
}  
	
//导入数据从详情页
$.ajax({
	type:"post",
	url:Window.preurl+"/getShopCar",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		setPro(data.result);
		//localStorage.setItem("good",JSON.stringify(data.result));
		
	}
});
//渲染列表
function setPro(result){
	for(var i=0;i<result.length;i++){
	var li='<li class="content_one" data-product='+JSON.stringify(result[i])+'>'
			+'<div class="round"></div>'
			+'<img src="'+result[i].product.Image+'" alt="" />'
			+'<div id="num_dis" style="display: none;">'
			
			+'<div class="min">-</div>'
			+'<div class="numbox">0</div>'
			+'<div class="add">+</div>'
			
			+'<div class="delt" data-id="'+result[i].id+'">删除</div>'
			+'</div>'
			+'<div class="pro_cont">'
			+'<p>'+result[i].product.Name+'</p>'
			+'<p>'+result[i].product.Carriage+' &nbsp;&nbsp; <i>'+result[i].product.Destination+'</i></p>'
			+'<p>'+result[i].product.Status+'</p>'
			+'<p>￥<strong class="newPrice">'+result[i].product.CurPrice+'</strong><i>价格：￥'+result[i].product.OldPrice+'&nbsp;&nbsp;</i><em>X</em><em class="number">'+result[i].ProductNumber+'</em></p>'
			+'</div>'
			'<div class="clear"></div>'
			+'</li>';
				
		$(".porduct ul").append(li);	
}}


//点击编辑全部
	$(document).on("click",".top_all",function(){
	$(".content_one").find("#num_dis").show();
	$(".content_one").find(".pro_cont").hide();
	$(this).html("完成");
	$(this).addClass("success");
})	
$(document).on("click",".success",function(){
	location.reload();
})
	
//点击事件删除删除当前id
$(document).on("click",".delt",function(){
	
		$.ajax({
		type:"post",
		url:Window.preurl+"/delShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({id:$(this).data("id"),token:localStorage.getItem("token")}),
		success:function(result){
			location.reload();
			}
			
	})
		
});
//拿到id
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 	
//购物车点击结算

$(document).on("click",".total",function(){
	if($(".round").hasClass("cur")){	
	var round=$(".content_one .round");
	var goods=[];  
	for(var i=0;i<round.length;i++){
		if(round.eq(i).hasClass("cur")){
			var product=round.eq(i).parent(".content_one").data("product");
			goods.push(product);		
		}
	}
	localStorage.setItem("good",JSON.stringify(goods));
	location.href="iden-orderfrom.html";
	}else{
		alert("请选择商品！");
	}
})




















//点击下面的菜单栏
//$(document).on("click",".listCode li",function(){
//	$(this).closest("li").find("span").css("color","skyblue");//当前点击最近的li下寻找span的颜色为天蓝
//	$(this).closest("li").siblings().find("span").css("color","black");//其他的兄弟下的span颜色为黑
//	$(this).closest("li").find("i").addClass("cur");
//	$(this).closest("li").siblings().find("i").removeClass("cur");
//	})
				
//对个人中心进行点击
//$(document).on("click",".myCent",function(){
//	if(localStorage.getItem("token")){
//		location.href="gerenzhongxin.html";	
//	}
//	else{
//		location.href="denglu.html";
//	}
//})















