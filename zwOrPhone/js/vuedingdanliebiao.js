//产品标题等渲染
var order1=Vue.component("order",{
	props:['order'],
	template:'<div>'
			+'<div class="titleList cf" @click="check"><img src="img/qrd_02.png" alt="" /><p>君宝话费充值<a href=""></a></p><span>交易成功</span></div>'
			+'<pro class="productCen cf":product="product" :product-num="eval(order.productNum)[i]" v-for="(product,i) in order.products" >'
			+'</pro>'
			+'<div class="productBot">共{{nums}}件商品 合计:￥{{price}}<i></i>(含运费:<i>{{order.state}}</i>)</div>'
			+'<div class="delPro"><p @click="change">删除订单</p><p>评价</p></div>'
			+'</div>',
			
	computed:{	
		nums:function(){
			var s=0,
			productNum=eval(this.order.productNum);
			for(var i=0;i<productNum.length;i++){
				s=s+productNum[i];
			}			
			return s;
		},		
		price:function(){
			var products=this.order.products,
			 	productNum=eval(this.order.productNum),
				sum=0;
			for(var i=0;i<products.length;i++){
				sum=sum+Number(products[i].CurPrice)*productNum[i]
			}			
			return sum;
		}	
	},
	methods:{
 		change:function(){
 			this.$http.post(Window.preurl+"/delOrder",{token:localStorage.getItem("token"),
 			orderId:this.order.id}).then(function(response){
 				location.reload();
 			})
 		},
   		check:function(){
   			location.href="orderfrom-circe.html?orderId="+this.order.id;
   			}
 	}
})

//单产品渲染
Vue.component("pro",{
	props:['product',"productNum"],
	template:'<div>'
			+'<img :src="product.Image" alt="" />'
			+'<p>{{product.Name}}</p>'
			+'<span><i>￥<strong>{{product.CurPrice}}</strong></i>'
			+'<i>￥<strong>{{product.OldPrice}}</strong></i>'	
			+'<i>x<strong>{{productNum}}</strong></i>'	
			+'</span>'
			+'</div>'
})

 var body=new Vue({
 	el:"#body",
 	data:{
 		result:[]
 	},
 	created:function(){
 		this.$http.post(Window.preurl+"/getOrder",{token:localStorage.getItem("token")}).
 		then(function(response){
 			this.result=response.body.result;
 		})
 	},
 	methods:{
 		retun:function(){
 			window.history.back();
 		}
 	}
 		
 	
 })








































