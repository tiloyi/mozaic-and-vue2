import Vue from "vue";
import App from "./App.vue";

import MozaicVue from "@mozaic-ds/vue";
// import { MAccordion } from "@mozaic-ds/vue";

import "@mozaic-ds/vue/dist/mozaic-vue.css";

Vue.config.productionTip = false;

Vue.use(MozaicVue);
// Vue.use(MAccordion);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
