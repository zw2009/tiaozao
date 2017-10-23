//$(document).on("click touchstart",".round",function(){
//	if($(this).css("border-color")=="rgb(56, 56, 56)"){
////			$(this).css("border","0.01rem solid #33CCFF");
//			//$(this).children(".roundonround").css("background","#33CCFF");这句话是给div加样式 背景颜色
//			$(this).parent(".goods").addClass("shop")
//		}
//		else{
////			$(this).css("border","0.01rem solid #383838");
//			//$(this).children(".roundonround").css("background","#FFFFFF");
//			$(this).parent(".goods").removeClass("shop")
//	
//	}
//	sum();	
//	num();
//})

//$(document).on("click touchstart",".q_round",function(){
//	if($(this).css("border-color")=="rgb(56, 56, 56)"){
//		$(this).css("border","0.01rem solid #33CCFF");
//		$(this).children(".q_roundonround").css("background","#33CCFF");
//		$(".goods").addClass("shop");
//	}
//	else{
//		$(this).css("border","0.01rem solid #383838");
//		$(this).children(".q_roundonround").css("background","#FFFFFF");
//		$(".goods").removeClass("shop");
//	}
//	sum();
//	num();
//})


$(document).on("click",".big",function(e){
	if($(this).hasClass("shop")){
		$(this).removeClass("shop");
		$(".q_round").removeClass("shop_one");
	}
	else{
		$(this).addClass("shop");
	}
	if($(".goods").length==$(".goods .shop").length){
		$(".checkall").addClass("shop_one");
	}
	else{
		$(".checkall").removeClass("shop_one");
	}
	sum();
	num();
	e.stopPropagation();
})

$(document).on("click",".checkall",function(){
	if($(this).hasClass("shop_one")){
		$(this).removeClass("shop_one");
		$(".goods .big").removeClass("shop");
	}
	else{
		$(this).addClass("shop_one");
		$(".goods .big").addClass("shop");
	}
	
	sum();
	num();
})
function sum(){
	var cash=0;
	var shop=$(".shop");
	
	for(var i=0;i<shop.length;i++){
		var newprice=parseInt(shop.parent(".goods").eq(i).find(".money .money_cash").html());
		var number=parseInt(shop.parent(".goods").eq(i).find(".number").html());
		cash=cash+newprice*number;
	}
	$(".newprice").html("￥"+cash);
}

function num(){
	$(".right_s").html("结算（"+$(".shop").length+"）");
}
$(document).on("click","header span",function(){
	
	if($(this).html()==("编辑全部")){
	$(".remov").css("display",("block"));
	$(".goods ul").css("display","none");
	$(".goods").css({"border-bottom":"0.02rem solid #e5e5e5","padding-bottom":"0.2rem"});
	$(this).html("完成");
	}
	else{
	$(".remov").css("display",("none"));
	$(".goods ul").css("display","block");
	$(".goods").css({"border-bottom":"0","padding-bottom":"0"});
	$(this).html("编辑全部");
	}
})



//ajax    拿到数据
$.ajax({
		type:"post", 
		url:preurl+"/getShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token:localStorage.getItem("token")}),
		success:function(data){
			setPro(data.result);
			
			//localStorage.setItem("shop",JSON.stringify(data.result));
		}
	});

$(document).on("click touchstart",".right_s",function(){
	var shop=[];
	for(var i=0;i<$(".goods").length;i++){
		if($(".goods").eq(i).children(".shop").length>0){
			var product=$(".goods").eq(i).data("product");
			shop.push(product);
		}
	}
	localStorage.setItem("shop",JSON.stringify(shop));
	if(shop.length==0){
		alert("请至少选中一种商品");
	}
	else{
		location.href="order_form.html";
	}
	
})

	function setPro(result){
		for(var i=0;i<result.length;i++){
			var goods='<div class="goods" data-product='+JSON.stringify(result[i])+'>'
			+'<div class="big">'
			+'<span class="round">'
				+'<div class="roundonround"></div>'
			+"</span>"
			+'</div>'
				+'<img src="'+result[i].product.Image+'"/>'
				+"<ul>"
					+'<li class="li_one">'+result[i].product.Name+'</li>'
					+'<li class="li_two">'+result[i].product.Carriage+'<i>'+result[i].product.Destination+'</i></li>'
					+'<li class="li_three">'+result[i].product.Status+"</li>"
					+'<li class="li_four">'
						+'<i class="money"><strong>￥</strong><em class="money_cash">'+result[i].product.CurPrice+"</em></i>"
						+'<strong>价格：￥'+result[i].product.OldPrice+'</strong>'
						+'<em>X<i class="number">'+result[i].ProductNumber+'</i></em>'
					+"</li>"
				+"</ul>"
				+'<div class="remov" data-id="'+result[i].id+'">删除</div>'//id 是数据里的id 只有这个方法才可以拿到
			+"</div>"
			$(".content").append(goods);
		}
	}

$(document).on("click",".goods .remov",function(e){
	e.stopPropagation();
	var id=$(this).data("id");//定义一个变量
	$.ajax({
		type:"post",								 //打开数据库
		url:preurl+"/delShopCar",//数据库地址
		async:true,									 //异步
		contentType:"application/json",    			 //固定格式 
		data:JSON.stringify({id:id,token:localStorage.getItem("token")}),//把字符串id  转换成js格式    后台只接受js格式
		success:function(data){						 //给从后台拿到的数据定义一个名字
			location.reload();						 //刷新页面
		}
	})
})
//购物车跳详情
$(document).on("click",".goods",function(e){	
	location.href="xiangqing.html?id="+JSON.parse($(this).data("product").ProductId);
})














