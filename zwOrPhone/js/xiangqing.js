
$(document).on("click touchstart","header a",function(){
			window.history.back();
		})


$.ajax({
	type:"post",
	url:Window.preurl+"/productDetail",
	contentType:"application/json",
	data:JSON.stringify({id:getQueryString("id")}),
	success:function(result){
		setBanner(result.result);
		setDes(result.result);
		setName(result.result);
		localStorage.setItem("good",'['+JSON.stringify(result.result)+']');
	}
});
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 


function setBanner(result){	
	$(".banner img").attr("src",result.product.Image);
}

function setDes(result){
	var desP='<p>'+result.product.Name+'</p>'
	+'<p>￥'+result.product.CurPrice+'<span>价格'+result.product.OldPrice+'</span><i>'+result.product.Status+'</i></p>'
	+'<p>快递：'+result.product.Carriage+'<span>'+result.product.Destination+'</span></p>';
	$(".content").html(desP);
}

function setName(result){
	var ameP='<span>'+result.product.Des+'</span>';
	$(".describe").append(ameP);
}
//加入购物车点击获取接口
	$(document).on("click",".addShop",function(){
		$.ajax({
			type:"post",
			url:Window.preurl+"/addShopCar",
			async:true,
			contentType:"application/json",
			data:JSON.stringify({id:getQueryString("id"),token:localStorage.getItem("token")}),
			success:function(result){
				location.href="shopping-cart.html";
			}
		})
		
		
		if(localStorage.getItem("token")){
		location.href="shopping-cart.html";	
	}
	else{
		alert("请您登陆！")
		location.href="login.html";
	}
	});




//点击下面的菜单栏
//$(document).on("click",".listCode li",function(){
//	$(this).closest("li").find("span").css("color","skyblue");//当前点击最近的li下寻找span的颜色为天蓝
//	$(this).closest("li").siblings().find("span").css("color","black");//其他的兄弟下的span颜色为黑
//	$(this).closest("li").find("i").addClass("cur");
//	$(this).closest("li").siblings().find("i").removeClass("cur");
//	})

//点击立即购买
$(document).on("click",".buy",function(){
	location.href="iden-orderfrom.html";
})

$(document).on("click",".phone",function(){
	window.location.href='tel:18821882252'
})






