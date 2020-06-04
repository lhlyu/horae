import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

// 自定义
import './mixins'
import "./mock"
import "./directives"

// 引入第三方组件
import ElementUi from "element-ui"

Vue.use(ElementUi)

// vue配置
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
