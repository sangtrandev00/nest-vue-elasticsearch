import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import "./plugins/boostrap-vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
