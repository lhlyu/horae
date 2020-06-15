import request from '@/api/apis.js'

// quanta module
export default {
  state: {
    roleList: [],
    userStateList: [],
    sourceList: []
  },
  getters: {

  },
  mutations: {
    SET_ROLE_LIST (state, val) {
      state.roleList = val
    },
    SET_USER_STATE_LIST (state, val) {
      state.userStateList = val
    },
    SET_SOURCE_LIST (state, val) {
      state.sourceList = val
    },
  },
  actions: {
    async SET_ROLE_LIST({ commit }){
      let resp = await request.fetchRoleList()
      if(!resp.code){
        commit('SET_ROLE_LIST', resp.data)
      }
    },
    async SET_USER_STATE_LIST({ commit }){
      let resp = await request.fetchUserStateList()
      if(!resp.code){
        commit('SET_USER_STATE_LIST', resp.data)
      }
    },
    async SET_SOURCE_LIST({ commit }){
      let resp = await request.fetchSourceList()
      if(!resp.code){
        commit('SET_SOURCE_LIST', resp.data)
      }
    },
  }
}
