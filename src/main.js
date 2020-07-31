import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/reset.css';
import './assets/style.css';
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
