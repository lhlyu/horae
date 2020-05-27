import isMobile from  "ismobilejs"

// vue 官方建议mutations，actions名字大写,全局唯一性
// layout module
export default {
  state: {
    fold: isMobile().apple.phone,
    breadcrumbItems:[{
      to: "",
      name:"首页"
    }],
    menuItems: []
  },
  getters:{

  },
  mutations: {  // this.$store.commit
    SET_FOLDER(state,val){
        state.fold = val
    },
    SET_BREADCRUMBITEMS(state,items){
      state.breadcrumbItems = items
    },
    SET_MENULIST(state,items){
      state.menuItems = items
    },
  },
  actions: { // this.$store.dispatch
    SET_MENULIST ({commit}, items) {
        commit("setMenuList", items)
    }
  }
}
