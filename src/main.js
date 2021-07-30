import Vue from "vue";
import App from "./App.vue";
import MozaicVue from "@mozaic-ds/vue";

Vue.config.productionTip = false;

// import "@mozaic-ds/vue/dist/mozaic-vue.css"; // Import the css of all components (158ko)

Vue.use(MozaicVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
