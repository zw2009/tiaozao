//全局组件
Vue.component('pro', {
	props: ["products", "productnums"],
	template: '<div>' +
		'<i><img :src="products.Image"/></i>' +
		'<div class="contentText">' +
		'<p>{{products.Des}}</p>' +
		'<div class="contentNem">' +
		'<span>￥{{products.CurPrice}}</span>' +
		'<span>￥{{products.OldPrice}}</span>' +
		'<em>x{{eval(productnums)}}</em>' +
		'</div>' +
		'</div>' +
		'</div>'
})
var content = new Vue({
	el: "#body",
	data: {
		product: [],
		content: {},
		user: {},
		hide: true,
		productNum: [],
		haha: false
	},
	created: function() {
		this.$http.post("http://39.108.219.59/getOrderDetail", {
			token: localStorage.getItem("token"),
			orderId: this.getQueryString("orderId")
		}).then(function(response) {
			this.product = response.body.result.products;
			this.content = response.body.result;
			this.user = JSON.parse(localStorage.getItem("user"));
			this.productNum = eval(response.body.result.productNum);
		}, function(response) {

		})
	},
	methods: {
		phone: function() {
			window.location.href = 'tel:18821882252'
		},
		copy: function() {

			alert("复制成功！");
		},
		getQueryString: function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		},
		delet: function() {
			this.$http.post("http://39.108.219.59/delOrder", {
				token: localStorage.getItem("token"),
				orderId: this.content.id
			}).then(function(response) {
				location.reload();
			})
		},
		retur: function() {
			window.history.back();
		},
		black: function() {
			this.haha = !this.haha;
		}
	}
})