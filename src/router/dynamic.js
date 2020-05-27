import Layout from "@/layout/index.vue"

// 懒加载
const NotFound = () => import("@/views/404.vue")
const Index = () => import("@/views/index/index.vue")

const getDynamicRoutes = routes => [{
  path: "/admin",
  name:"layout",
  component: Layout,
  children: routes
},{
  path: "*",
  name: "404",
  component: NotFound
}]

const menuDict = {
  101:{
    pid: 0,
    path: "/",
    title: "首页",
    icon: "el-icon-house",
    component: Index,
  },
  20101:{
    pid: 101,
    path: "/index1",
    title: "测试1",
    component: Index
  },
  20102:{
    pid: 101,
    path: "/index2",
    title: "测试1",
    component: Index
  },
  20103:{
    pid: 101,
    path: "/index3",
    title: "测试1",
    component: Index
  },
  102:{
    pid: 0,
    path: "/index4",
    title: "测试1",
    icon: "el-icon-house",
    component: Index
  },
  103:{
    pid: 0,
    path: "/index5",
    title: "测试1",
    icon: "el-icon-house",
    component: Index
  },
}


// 生成树
const tree = arr => {
  var copy = JSON.parse(JSON.stringify(arr));
  var obj = {};
  copy.forEach((item, index) => {
    obj[item.id] = item;
  });
  var res = [];
  copy.forEach(item => {
    if (item.pid === 0) {
      res.push(item);
    }
    for (var key in obj) {
      if (item.id === obj[key].pid) {
        if (item.children) {
          item.children.push(obj[key]);
        } else {
          item.children = [obj[key]];
        }
      }
    }
  });
  return res;
}

// 根据权限值获取菜单树
const getMenus = codes => {
  if (codes && codes.length){
    let items = []
    for(let i = 0,length = codes.length;i < length; i ++){
      let item = menuDict[codes[i]]
      if (item){
        item.id = codes[i]
        items.push(item)
      }
    }
    if(items.length == 0){
      return []
    }
    // 生成树
    return tree(items)
  }
  return []
}




export {
  getMenus,
  getDynamicRoutes
}
