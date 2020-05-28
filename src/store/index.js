import Vue from "vue"
import Vuex from "vuex"

// load plugin
import createPersistedState from "vuex-persistedstate"
// load modules
import layout from "./modules/layout/index"
import user from "./modules/user/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routers: null,
    token: null
  },
  getters:{
    getToken: state => state.token
  },
  mutations: {
    SET_ROUTERS(state,val){
      state.routers = val
    },
    SET_TOKEN(state,val){
      state.token = val
      window.sessionStorage.setItem("token",val)
    }
  },
  actions: {
    addTab ({commit}, arg) {
        commit("addTab", arg)
    }
  },
  modules: {
    layout,
    user
  },
  plugins:[createPersistedState({
    storage: window.sessionStorage,
    reducer(state) {
      return {
        layout: state.layout,
        user: state.user
      }
    }
  })],
})
