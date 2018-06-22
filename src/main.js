import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLodash from 'vue-lodash';

Vue.config.productionTip = false
Vue.use(require('vue-faker'), {locale: 'zh_TW'});
Vue.use(require('vue-moment'));
Vue.use(VueLodash);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue({
// 	el: '#app',
// 	router,
// 	components: {App},
// 	template: '<App />'
// })