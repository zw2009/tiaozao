Vue.component("ones",{
	props:['contents'],
	template:
		'<li>'
		+'<a href="#" :style="{background:contents.roundBg}">'
		+'<img :src="contents.imageUrl" alt=""></a>'
		+'<span>{{contents.des}}</span>'
		+'</li>'	
})

Vue.component("twos",{
	props:['product'],
	template:
		'<div>'
		+'<span class="productName">{{product.productName}}<i>￥{{product.price}}</i></span>'
		+'<img :src="product.productImage" alt="" class="productImage">'
		+'</div>'
})

var pro=new Vue({
	el:".contain",
	data:{
		cheapest:{},
		roundList:[],
		thanks:{},	
		beautiful:{},
		title:{},
		flag:false
	},
	created:function(){
   		this.$http.post("http://192.168.0.142:3900/shop").then(function(response){
   			this.cheapest=response.body.cheapest;
   			this.roundList=response.body.roundList;
   			this.thanks=response.body.thanks;
   			this.beautiful=response.body.beautiful;
   			this.flag = true;
   			this.title={
   				cheapest:response.body.cheapest.title,
   				beautiful:response.body.beautiful.title,
   				thanks:response.body.thanks.title
   			}
   		}
   		,function(response){
   			
   		})
    }
})	
           		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

















