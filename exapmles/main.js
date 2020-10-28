import Vue from "vue";
import App from "./App.vue";



import lui from '../packages'
Vue.use(lui)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
