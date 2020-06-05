import request from '@/api/apis'

// user module
export default {
  state: {
    codes: []
  },
  getters: {

  },
  mutations: {
    SET_CODES (state, val) {
      state.codes = val
    }
  },
  actions: {
    async SET_CODES ({ commit }, val) {
      const resp = await request.fetchLogin()
      resp.then(v => {
        if (v.code) {
          commit('SET_CODES', [])
          return
        }
        commit('SET_CODES', v.data.codes)
      })
    }
  }
}
