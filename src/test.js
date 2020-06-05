import Plate from '@/components/Plate'

import { mapMutations } from 'vuex'
import { getRoutes, getDynamicRoutes } from '@/router/dynamic.js'

export default {
  name: 'index',
  components: {
    Plate
  },
  methods: {
    ...mapMutations({
      login (commit) {
        const that = this
        const resp = this.$request.fetchLogin()
        resp.then(v => {
          if (v.code) {
            return
          }
          commit('SET_CODES', v.data.codes)
          const items = getRoutes(v.data.codes)
          if (!items.length) {
            return
          }
          const routers = getDynamicRoutes(items)
          commit('SET_MENULIST', items)
          commit('SET_TOKEN', +new Date())
          commit('SET_ROUTERS', routers)
          commit('SET_ACTIVEMENU')
          that.$router.addRoutes(routers)
          that.$router.push({ path: '/admin' })
        })
      }
    })
  },
  computed: {
  }
}
