import Vue from 'vue'
import isMobile from 'ismobilejs'
import request from '@/api/apis.js'
import codes from '@/config/codes.js'

Vue.prototype.$isMobile = isMobile().phone
Vue.prototype.$request = request
Vue.prototype.$codes = codes

Vue.mixin({
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initData()
      this.init()
    })
  },
  methods: {
    initData () {},
    init () {},
    scrollTop (cb, top) {
      window.scrollTo({
        top: top || 0,
        behavior: 'smooth'
      })
      if (cb) {
        setTimeout(() => {
          cb()
        }, this.$isMobile ? 0 : 400)
      }
    },
    isEmpty(data){
      if(data && data.length){
        return false
      }
      return true
    }
  }

})
