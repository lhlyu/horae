import Mock from "mockjs"
import api from "../api/urls"

export default ({ mock }) => {
  if (!mock) return;
  Mock.setup({
    timeout: '200-1000' // 模拟延迟
  })
  Mock.mock(api.RoleApi.u, api.RoleApi.m, {
    code: 0,
    message:"success",
    data: {
      page:{
        pageNum: 1,
        pageSize: 10,
        total: 2
      },
      list:[{
        id:1,
        name: "管理者",
        remark:"普通管理者" ,
        enable: 0,
        powers: [10,12,1201,1202,120201,120202],
        "createdAt|1591252800000-1591252842060": 0,
        updatedAt: +new Date() - 10 * 600
      },{
        id:2,
        name: "测试者",
        remark:"测试者" ,
        enable: 0,
        powers: [10],
        "createdAt|1591252800000-1591252842060": 0,
        updatedAt: +new Date() - 2 *10 * 600
      },{
        id:1,
        name: "超级测试者",
        remark:"测试者" ,
        enable: 0,
        powers: [10,12,1201,1202,120201,120202,120203],
        "createdAt|1591252800000-1591252842060": 0,
        updatedAt: +new Date() - 10 * 600
      }]
    }
  })

  Mock.mock(api.EditRoleApi.u, api.EditRoleApi.m, {
    code: 0,
    message:"success",
    data: null
  })

  Mock.mock(api.DelRoleApi.u, api.DelRoleApi.m, {
    code: 0,
    message:"success",
    data: null
  })

  Mock.mock(api.PowerApi.u, api.PowerApi.m, {
    code: 0,
    message:"success",
    data: [{
      id: 10,
      name:"首页",
    },{
      id: 12,
      name:"权限",
    },{
      id: 1201,
      name:"用户",
    },{
      id: 1202,
      name:"角色",
    },{
      id: 120201,
      name:"角色添加",
    },{
      id: 120202,
      name:"角色删除",
    },{
      id: 120203,
      name:"角色更改",
    }]
  })
}
