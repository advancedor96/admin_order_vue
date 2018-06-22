import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Order from '@/components/Order/Order.vue';
import Product from '@/components/Product/Product.vue';

Vue.use(Router);
export default new Router({
	routes: [
		{
			path:'/',
			component: Home
		},
		{
			path:'/order',
			component: Order
		},{
			path: '/product',
			component: Product
		}
	]
})