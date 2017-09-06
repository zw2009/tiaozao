var xhr=new XMLHttpRequest;
xhr.open(
	"POST",
	"http://192.168.0.142:3900/shop"
);
xhr.send();
xhr.onreadystatechange=function(){
	if(xhr.status==200&&xhr.readyState==4){
		res=JSON.parse(xhr.response);
		setpro(res);
		setCheapest(res);
		setProd(res);
		setCthanks(res);
		setProda(res);
		setCbeautiful(res);
		setProdb(res);
	}
}
var proDom=function(arg){
	var div=document.createElement("div");
	div.innerHTML=arg;
	return div.childNodes;
}

var setpro=function(res){
	for(var i=0;i<res.roundList.length;i++){
		var lis='<li>'
				+'<a href="#" style="background:'+res.roundList[i].roundBg+'"><img src="'+res.roundList[i].imageUrl+'" alt="" /></a>'
				+'<span>'+res.roundList[i].des+'</span>'
				+'</li>';
		document.querySelector(".centent ul").appendChild(proDom(lis)[0]);
	}
}

var setCheapest=function(res){
	document.querySelector(".centent .title").innerHTML=res.cheapest.title;
}

var setProd=function(res){
		var productName=document.querySelectorAll(".productName");
		var productImage=document.querySelectorAll(".productImage");
		
		for(var i=0;i<res.cheapest.products.length;i++){
			productName[i].innerHTML=res.cheapest.products[i].productName
			+'<i>￥'+res.cheapest.products[i].price+'</i>';
			productImage[i].src=res.cheapest.products[i].productImage;
		}
}

var setCthanks=function(res){
	document.querySelector(".centent .titleone").innerHTML=res.thanks.title;
}
var setProda=function(res){
		var productNamea=document.querySelectorAll(".productNamea");
		var productImagea=document.querySelectorAll(".productImagea");
		
		for(var i=0;i<res.thanks.products.length;i++){
			productNamea[i].innerHTML=res.thanks.products[i].productName
			+'<i>￥'+res.thanks.products[i].price+'</i>';
			productImagea[i].src=res.thanks.products[i].productImage;
		}
}
var setCbeautiful=function(res){
	document.querySelector(".centent .titletwo").innerHTML=res.beautiful.title;
}

var setProdb=function(res){
		var productNameb=document.querySelectorAll(".productNameb");
		var productImageb=document.querySelectorAll(".productImageb");
		
		for(var i=0;i<res.beautiful.products.length;i++){
			productNameb[i].innerHTML=res.beautiful.products[i].productName
			+'<i>￥'+res.beautiful.products[i].price+'</i>';
			productImageb[i].src=res.beautiful.products[i].productImage;
		}
}
























