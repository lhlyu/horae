import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rightNav: {},
        tabnavBox: [{
            title: "home",
            path: "/"
        },{
            title: "测试1",
            path: "/login"
        },{
            title: "测试2",
            path: "/login"
        },{
            title: "测试3",
            path: "/login"
        },{
            title: "测试4",
            path: "/login"
        },{
            title: "测试5",
            path: "/"
        },{
            title: "测试6",
            path: "/login"
        },{
            title: "测试7",
            path: "/login"
        },{
            title: "测试8",
            path: "/login"
        },{
            title: "测试9",
            path: "/login"
        },{
            title: "测试10",
            path: "/login"
        },{
            title: "测试11",
            path: "/login"
        },{
            title: "测试12",
            path: "/login"
        },{
            title: "测试13",
            path: "/login"
        },{
            title: "测试14",
            path: "/"
        },{
            title: "测试15",
            path: "/login"
        },{
            title: "测试16",
            path: "/login"
        },{
            title: "测试17",
            path: "/login"
        },{
            title: "测试18",
            path: "/login"
        },{
            title: "测试19",
            path: "/login"
        },{
            title: "测试20",
            path: "/login"
        }]
    },
    getters:{
        tabnavBox: state => state.tabnavBox,
        rightNav: state => state.rightNav
    },
    mutations: {
        addTab (state, arg) {
            state.isActive = arg.path
            if (state.tabnavBox[0] && state.tabnavBox[0].title !== "home") {
                state.tabnavBox.unshift({
                    title: "home",
                    path: "/index"
                })
            }

            for (let i = 0; i < state.tabnavBox.length; i++) {
                if (state.tabnavBox[i].path === arg.path) {
                    return false
                }
            }
            state.tabnavBox.push({
                title: arg.title,
                path: arg.path
            })

            sessionStorage.setItem("addTab", JSON.stringify(state.tabnavBox))
        },
        openMenu (state, arg) {
            state.rightNav = arg
        },
        removeTab (state, arg) {
            let index = state.tabnavBox.findIndex(function (value, key) {
                return value.path === arg.tabItem.path
            })
            state.tabnavBox.splice(index, 1)
            if (arg.tabItem.path === arg.fullPath) {
                let tabActive = state.tabnavBox[index] || state.tabnavBox[index - 1]
                arg.router.push(tabActive.path)
            }
            sessionStorage.setItem("addTab", JSON.stringify(state.tabnavBox))
        },
        removeOtherTab (state, arg) {
            state.tabnavBox = [{
                title: "home",
                path: "/index"
            }]
            if (arg.all) {
                arg.router.push("/index")
                return false
            }
            state.tabnavBox.push(arg.tabItem)
            arg.router.push(arg.tabItem.path)
            sessionStorage.setItem("addTab", JSON.stringify(state.tabnavBox))
        },
    },
    actions: {
        addTab ({commit}, arg) {
            commit("addTab", arg)
        },
        openMenu ({commit}, arg) {
            commit("openMenu", arg)
        },
        removeTab ({commit}, arg) {
            commit("removeTab", arg)
        },
        removeOtherTab ({commit}, arg) {
            commit("removeOtherTab", arg)
        },
        collapse ({commit}, arg) {
            commit("collapse", arg)
        }
    },
    modules: {
    }
})
