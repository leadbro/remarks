import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/components/base/index.js";
import "@/components/_icons.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
