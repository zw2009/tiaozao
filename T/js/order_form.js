var user=JSON.parse(localStorage.getItem("user"));
$(".touch").html(
		'<p>收货人：'+user.name+'<i>'+user.phone+'</i></p>'
		+'<div>'
			+'<strong>收货地址：'+user.address+'</syrong>'
			+'<i></i></div>'
		+'<span>(收货不便时，可选择免费待收货服务)</span>'
		);

var shop=JSON.parse(localStorage.getItem("shop"));
var money=0;
var productId=[];
var productNum=[];
var number=0;
for(var i=0;i<shop.length;i++){
	/*var ShopName=[];
	ShopName.push(shop[i].product.ShopName);
	var tm='<div class="tm">'+ShopName+'</div>'
	if(ShopName==ShopName){
		$(".all_list").append(tm);
	}*/
	
	
	
	
	var content='<div class="content">'
					+'<div class="goods">'
					+'<img src="'+shop[i].product.Image+'"/>'
					+'<div class="right_tett">'
						+'<div class="referral">'+shop[i].product.Name+'<i>七天退换</i></div>'
						+'<span>'
							+'<i class="number">￥'+shop[i].product.CurPrice+'</i>'
							+'<strong>X<i>'+shop[i].ProductNumber+'</i></strong>'
						+'</span>'
					+'</div>'
				+'</div>'
				+'</div>'
				$(".all_list").append(content);				
				money=money+shop[i].product.CurPrice*1*shop[i].ProductNumber;
				$(".left_t i span").html("￥"+money);
				productId.push(shop[i].ProductId);
				productNum.push(shop[i].ProductNumber);
				number=number+shop[i].ProductNumber*1;
				
				
				
}


$(".commodity").html("共"+number+"件， 合计:<i>￥"+money+"</i>");
$(".left_t").html("共"+number+"件， 合计:<i>￥"+money+"</i>");
		
$(document).on("click",".big_round span a",function(){
	if($(this).css("left")=="0px"){
		$(this).stop().animate({left:'.41rem'}).css("border","border:1px solid white;");
		$(this).parent("span").css({"background":"#33CCFF","border":"1px solid #33CCFF"});
		$(this).addClass("cur");
	}
	else{
		$(this).stop().animate({left:'-0rem'});
		$(this).parent("span").css({"background":"none","border":"0.02rem solid #e0e0e0"});
		$(this).removeClass("cur");
	}
})



$(document).on("click",".right_s",function(){
	$.ajax({
		type:"post", 
		url:preurl+"/addOrder",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			totalCost:money,
			totalNum:shop.length,
			isInvoice:$(".big_round span a").hasClass("cur")?true:false,
			message:$(".dispatching p input").val(),
			state:$(".dispatching p i").html(),
			productId:"["+productId+"]",
			productNum:"["+productNum+"]",
		}),
		success:function(data){
			location.href="index.html?orderId="+data.result.id;
		}
	})	
	
})


$(document).on("click","header p",function(){
	history.back();
})





