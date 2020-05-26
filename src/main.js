import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

import ElementUi from "element-ui"

Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
