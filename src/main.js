import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/reset.styl";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$bus = new Vue();

Vue.prototype.formDataKey = "survey_form_editor_data";
Vue.prototype.$ls = window.localStorage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#root");
