import Mock from "mockjs"
import api from "../api/urls"

export default ({ mock }) => {
    if (!mock) return;
    // 用户登录
    Mock.mock(api.LoginApi.u, api.LoginApi.m, {
      code: 0,
      message:"success",
      data:{
        codes: [10,12,1201,1202,120201,120202],
        name: "lhlyu"
      }
    })
}
