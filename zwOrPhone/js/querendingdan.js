

$(document).on("click touchstart","header a",function(){
			window.history.back();
		})



//开发票点击效果
$(document).on("click",".clickPi",function(){
	if($(this).css("left")=="0px"){
		$(this).animate({"left": '+30px'}).addClass("cur").css({"background":"#fff"});
		$(".backPi").css({"background":"#33ccff"});
	}
	else{
		$(this).animate({"left":'0'}).removeClass("cur").css({"background":"#fff"});
		$(".backPi").css({"background":"#fff"});
	}
	
	
})


//拿取缓存数据渲染
function render(){
	var use=JSON.parse(localStorage.getItem("user"));
	$(".name").html(use.name);
	$(".phone").html(use.phone);
	$(".address").html(use.address);
}

render();
//拿到缓存数据  
var good=JSON.parse(localStorage.getItem("good"));
var productIds=[];
var paNems=[];
//拿到id渲染数据
function goods(){	
	
	for(var i=0;i<good.length;i++){
		var content='<div class="content">'
					+'<h2><i><img src="img/qrd_02.png" alt="" /></i>淘宝网旗舰店</h2>'
					+'<div class="conGood">'
					+'<div class="goodImg"><img src="'+good[i].product.Image+'" alt="" /></div>'
					+'<div class="dyf">'
					+'<p>'+good[i].product.Name+'</p>'	
					+'<span>七天退换</span>'
					+'</div>'
					+'<div class="money">'
					+'<i>￥<i class="nember">'+good[i].product.CurPrice+'</i><i>'
					+'<p>x<span class="paNem">'+good[i].ProductNumber+'</span></p>'
					+'</div>'
					+'</div>'
					+'</div>';
		$(".contAll").append(content);
		
		productIds.push(good[i].ProductId);
		paNems.push(good[i].ProductNumber);
	}
	
	}
goods();


//数量和金额的计算统计
function sum(){
	var sum=0;
	var num=0;
	for(var i=0;i<good.length;i++){		
		var paNem=good[i].ProductNumber;
		var nember=Number(good[i].product.CurPrice);
			sum=sum+paNem;
			num=num+paNem*nember;
			
	}
	$(".namAll").html(sum);
	$(".nemAll").html(sum);
	$(".total ").html("￥"+num);
	$(".namAbb ").html("￥"+num);
	
}
sum();


$(document).on("click",".submitOrder",function(){	
	
	$.ajax({
		type:"post",
		url:Window.preurl+"/addOrder",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			totalCost:$(".total").html(),
			totalNum:$(".namAll").html(),
			isInvoice:$(".clickPi").hasClass("cur")?true:false,
			message:$(".message").val(),
			state:$(".express").html(),
			productId:"["+productIds+"]" ,  //这里返回的是字符串，如果是数组的话需要和后端人员商量好数组就不用中括号了
			productNum:"["+paNems+"]",
		}),
		success:function(data){
			location.href="orderfrom-circe.html?orderId="+data.result.id;
		}
	})
	
})
























