// 自定义指令
import Vue from 'vue'
import store from '@/store'
import { contains } from '@/utils'

// 参考: https://cn.vuejs.org/v2/guide/custom-directive.html

Vue.directive('power', {
  inserted: function (el, binding) {
    const val = binding.value
    if (!val) {
      return
    }
    if (!contains(store.state.user.codes, val)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }
})
