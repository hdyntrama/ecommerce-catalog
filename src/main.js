import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LayOut from "./components/LayOut";
import CardCatalog from "./components/CardCatalog.vue";

Vue.component("CardCatalog", CardCatalog);
Vue.component("LayOut", LayOut);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
