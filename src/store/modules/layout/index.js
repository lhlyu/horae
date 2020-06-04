import isMobile from  "ismobilejs"

const defaultActive = "/admin/board"
const defualtBreadcrumbItems = {to: "",name:"管理"}

const eachBreadcrumbItems = (menuItems, currentIndex,cb) => {
  for(let i = 0,length = menuItems.length;i < length ;i ++){
    if(currentIndex.indexOf(menuItems[i].path) != -1){
      cb(menuItems[i])
    }
    if(menuItems[i].children && menuItems[i].children.length){
      eachBreadcrumbItems(menuItems[i].children,currentIndex,cb)
    }
  }
}


// vue 官方建议mutations，actions名字大写,全局唯一性
// layout module
export default {
  state: {
    fold: isMobile().apple.phone,             // 是否是移动端
    breadcrumbItems:[defualtBreadcrumbItems], // 面包屑
    menuItems: [],                            // 菜单
    activeMenu: defaultActive,                // 当前激活菜单
    isLoading: false,                         // 加载
  },
  getters:{

  },
  mutations: {  // this.$store.commit
    SET_FOLDER(state,val){
        state.fold = val
    },
    SET_BREADCRUMBITEMS(state,val){
      state.breadcrumbItems = val
    },
    SET_MENULIST(state,val){
      state.menuItems = val
    },
    SET_ACTIVEMENU(state,val){
      if(!val || val == ""){
        val = defaultActive
      }
      let breadcrumbItems = [defualtBreadcrumbItems]
      eachBreadcrumbItems(state.menuItems,val,item => {
        breadcrumbItems.push({
          to: item.path,
          name: item.name
        })
      })
      state.breadcrumbItems = breadcrumbItems
      state.activeMenu = val
    },
    SET_LOADING(state,val){
      state.isLoading = val
    }

  },
  actions: { // this.$store.dispatch
    SET_MENULIST ({commit}, val) {
        commit("SET_MENULIST", val)
    }
  }
}
