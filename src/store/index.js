import Vue from "vue"
import Vuex from "vuex"

// load plugin
import createPersistedState from "vuex-persistedstate"
// load modules
import layout from "./modules/layout/index"


Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    k: "kkk"
  },
  getters:{

  },
  mutations: {

  },
  actions: {
    addTab ({commit}, arg) {
        commit("addTab", arg)
    }
  },
  modules: {
    layout
  }
})
