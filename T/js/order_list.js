
//Vue
Vue.component("goods",{
	props:['product'],
	template:'<div>'
				+'<div class="order">'
					+'<div class="recharge"  @click="userId" >'
						+'<p>三际官方旗舰店<i></i></p>'
							+'<span>交易成功</span>'
					+'</div>'
					+'<good class="good":product-num="eval(product.productNum)[i]" v-for="(item,i) in product.products" :products="item">'
					+'</good>'
					+'</div>'
				+'<div class="money">共{{sum}}件商品 合计￥<i>{{product.totalCost}}</i>({{product.state}})</div>'
				+'<div class="evaluate">'
					+'<a @click="orderi">评价</a>'
					+'<a @click="delOrder">删除订单</a>'
					
				+'</div>'
			+'</div>',
			computed:{
				sum:function(){
					var productNum=eval(this.product.productNum);
					var hg=0;
					for(var i=0;i<productNum.length;i++){
						hg=hg+productNum[i];
					}
					return hg;
				}
			},
			methods:{
				delOrder:function(){
					this.$http.post(preurl+"/delOrder",{
						token:localStorage.getItem("token"),
						orderId:this.product.id
					}).then(function(response){
							location.reload();
					})
				},
				userId:function(){
					location.href="index.html?orderId="+this.product.id;
				},
				orderi:function(){
					localStorage.setItem("pro",JSON.stringify(this.product.products));
					location.href="evaluate.html?orderId="+this.product.id;
				}
			}
})

Vue.component("good",{
	props:['products','productNum'],
	template:
			'<div>'
				+'<img :src="products.Image"/>'
				+'<p v-html="products.Des"></p>'
				+'<div class="cash">'
					+'<i>￥{{products.CurPrice}}</i>'
					+'<em>￥{{products.OldPrice}}</em>'
					+'<strong>X<i>{{productNum}}</i></strong>'
				+'</div>'
			+'</div>'
})

var content=new Vue({
	el:'content',
	data:{
		result: [],
		style: {},
		mar: {},
		inputValue: ""
	},
	created:function(){
		this.$http.post(preurl+"/getOrder",{
			token:localStorage.getItem("token")
			}).then(function(response){
				this.result=response.body.result;
				this.productNum=eval(response.body.result[0].productNum);
		})
	},
	methods: {
		searchFocus: function() {
			this.style = {
				background: "#000000",
				position: "fixed",
				top: "0",
				left: "0",
				height: "100%",
				opacity: "0.9",
			};
			this.mar = { marginLeft: "0" }
		},
		searchBlur: function() {
			this.style = {
				position: "relative",
				background: "none"
			};
			this.mar = { marginLeft: "0" },
				this.$http.post(preurl+"/getOrder", {
					token: localStorage.getItem("token"),
					productName: this.inputValue
				}).then(function(response) {
					this.result = response.body.result;
					if(this.result.length > 0) {
						this.productNum = eval(response.body.result[0].productNum);
					} else {
						alert("未找到类似商品！")
					}
				})

		}
	}
})


var content=new Vue({
	el:"header",
	data:{
		none:false
	},
	methods:{
		back:function(){
			history.back();
		},
		car:function(){
			location.href="shopcar.html";
		},
		chage:function(){
			this.none=!this.none;
		},
		hef:function(){
			location.href="dangpu.html";
			
		}
	}
})































//$.ajax({
//	type: "post",
//	url: preurl + "/getOrder",
//	async: true,
//	contentType: "application/json",
//	data: JSON.stringify({ token: localStorage.getItem("token") }),
//	success: function(data) {
//		setPro(data.result);
//
//	}
//})
//
//function setPro(result) {
//	for(var i = 0; i < result.length; i++) {
//		var order = '<div class="order" data-id="' + result[i].id + '">' +
//			'<div class="recharge">' +
//			'<p>君宝话费充值专营店<i></i></p>' +
//			'<span>交易成功</span>' +
//			'</div>' +
//			'</div>'
//		$("content").append(order);
//		var shuliang = 0;
//		var cash=0;
//		for(var j = 0; j < result[i].products.length; j++) {
//			var goods = '<div class="goods">' +
//				'<img src="' + result[i].products[j].Image + '"/>' +
//				'<p>' + result[i].products[j].Name + '</p>' +
//				'<div class="cash">' +
//				'<i>￥' + result[i].products[j].CurPrice + '</i>' +
//				'<em>￥' + result[i].products[j].OldPrice + '</em>' +
//				"<strong>X<i>" + eval(result[i].productNum)[j] + "</i></strong>" +
//				'</div>' +
//				'</div>';
//			$("content").append(goods);
//			shuliang = shuliang +(eval(result[i].productNum)[j]*1);
//			cash = (result[i].totalCost*1);
//		}
//		var money = '<div class="money">共'+shuliang+'件商品 合计￥<i>'+cash+'</i>(含运费￥0.00)</div>' +
//			'<div class="evaluate">' +
//			'<a>评价</a>' +
//			'<a class="remov">删除订单</a>' +
//			'</div>';
//		$("content").append(money);
//
//	}
//}
//
//
//$(document).on("click", ".remov", function() {
//
//	$.ajax({
//		type: "post",
//		url: preurl + "/delOrder",
//		async: true,
//		contentType: "application/json",
//		data: JSON.stringify({ token: localStorage.getItem("token"), orderId: $(".order").data('id') }),
//		success: function(data) {
//			location.reload()
//		}
//	})
//})
