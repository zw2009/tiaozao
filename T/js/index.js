Vue.component("product",{
	props:['product','productNum'],
	template:'<div>'
				+'<i><img :src="product.Image"/></i>'
					+'<div class="contentText">'
					+'<p v-html="product.Des"></p>'
					+'<div class="contentNem">'
						+'<span>￥{{product.CurPrice}}</span>'
						+'<span class="last">￥{{product.OldPrice}}</span>'
						+'<em>x{{eval(productNum)}}</em>'
					+'</div>'
				+'</div>'
				+'</div>',
				
})


var user=JSON.parse(localStorage.getItem("user"));
 	
 	var body=new Vue({
 		el:"#body",
 		data:{
 			result:{},
 			products:[],
 			productNum:{},
 			comp:false,
 			jiao:false,
 			user:user
 		},
 		created:function(){
 			this.$http.post(preurl+"/getOrderDetail",{
 				token:localStorage.getItem("token"),orderId:this.getQuerystring("orderId")}).then(function(response){
   					this.result=response.body.result;
 					this.products=response.body.result.products;
 					this.productNum=eval(response.body.result.productNum);
 				})
 		},
 		methods:{
 			 phoneCall: function () {
    			window.location.href="tel:0731-8620-6435";
    		},
	 		getQuerystring:function (name){
					var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
					var r=window.location.search.substr(1).match(reg);
					if(r !=null) return unescape(r[2]);return null;
				
	 		},
	 		back:function(){
	 			history.back();
	 		},
	 		monet:function(){
	 			this.comp=!this.comp;
	 			this.jiao=!this.jiao;
	 		}
 		}
 	})
 	
 	

 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
