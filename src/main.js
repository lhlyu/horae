import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import "@/mock"
import $request from "@/api/apis.js"

import "./directives"



import ElementUi from "element-ui"

Vue.use(ElementUi)

Vue.config.productionTip = false
Vue.prototype.$request = $request

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
