(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a36a6"],{"01a0":function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-card",[t("a-tabs",{attrs:{"default-active-key":"1","tab-position":"left"}},[t("a-tab-pane",{key:"1",attrs:{tab:"基本"}},[t("BasePage")],1),t("a-tab-pane",{key:"2",attrs:{tab:"头像"}},[t("AvatarPage")],1),t("a-tab-pane",{key:"3",attrs:{tab:"全局"}},[t("GlobalPage")],1),t("a-tab-pane",{key:"4",attrs:{tab:"安全"}},[t("SecurityPage")],1)],1)],1)},r=[],o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-card",{attrs:{size:"small",title:"基本信息",bordered:!1,loading:a.loading}},[t("a-form",{attrs:{layout:"horizontal",labelAlign:"left",labelCol:{span:2},wrapperCol:{span:22}}},[t("a-form-item",{attrs:{label:"昵称"}},[t("a-input",{attrs:{placeholder:"昵称",allowClear:""},model:{value:a.data.nickName,callback:function(e){a.$set(a.data,"nickName",e)},expression:"data.nickName"}})],1),t("a-form-item",{attrs:{label:"Bio"}},[t("a-textarea",{attrs:{placeholder:"Bio",allowClear:""},model:{value:a.data.bio,callback:function(e){a.$set(a.data,"bio",e)},expression:"data.bio"}})],1),t("a-form-item",{attrs:{label:"URL"}},[t("a-input",{attrs:{placeholder:"个人网站",type:"url",allowClear:""},model:{value:a.data.url,callback:function(e){a.$set(a.data,"url",e)},expression:"data.url"}})],1),t("a-form-item",[t("a-button",{attrs:{type:"primary"},on:{click:a.handlerUpdate}},[a._v(" 修改 ")])],1)],1)],1)},n=[],s={name:"base_page",props:{data:{type:Object,default(){return{nickName:"鱼酱",bio:"起风了，唯有努力生存",url:"https://github.com/lhlyu/horae"}}}},data(){return{loading:!1}},methods:{handlerUpdate(){}}},i=s,d=t("2877"),c=Object(d["a"])(i,o,n,!1,null,null,null),u=c.exports,p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-card",{attrs:{size:"small",title:"头像信息",bordered:!1,loading:a.loading}},[t("a-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload},on:{change:a.handleChange}},[a.imageUrl?t("img",{attrs:{src:a.imageUrl,alt:"avatar"}}):t("div",[t("a-icon",{attrs:{type:a.loading?"loading":"plus"}}),t("div",{staticClass:"ant-upload-text"},[a._v(" Upload ")])],1)]),t("a-button",{attrs:{type:"primary"},on:{click:a.handlerUpdate}},[a._v(" 修改 ")])],1)},m=[],b={name:"avatar_page",data(){return{loading:!1,imageUrl:""}},methods:{handleChange(a){"uploading"!==a.file.status?a.file.status:this.loading=!0},beforeUpload(a){const e="image/jpeg"===a.type||"image/png"===a.type;e||this.$message.error("You can only upload JPG file!");const t=a.size/1024/1024<2;return t||this.$message.error("Image must smaller than 2MB!"),e&&t},handlerUpdate(){}}},h=b,g=Object(d["a"])(h,p,m,!1,null,null,null),f=g.exports,w=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-card",{attrs:{size:"small",title:"全局设置",bordered:!1,loading:a.loading}},[t("a-form",{attrs:{layout:"horizontal",labelAlign:"left",labelCol:{span:2},wrapperCol:{span:22}}},[t("a-form-item",{attrs:{label:"菜单状态"}},[t("a-switch",{attrs:{"checked-children":"锁定","un-checked-children":"解锁"},on:{change:a.handlerSwitch},model:{value:a.data.lockMenu,callback:function(e){a.$set(a.data,"lockMenu",e)},expression:"data.lockMenu"}})],1),t("a-form-item",{attrs:{label:"分页条数"}},[t("a-input-number",{attrs:{id:"inputNumber",min:1,max:50},model:{value:a.data.pageSize,callback:function(e){a.$set(a.data,"pageSize",e)},expression:"data.pageSize"}})],1),t("a-form-item",[t("a-button",{attrs:{type:"primary"},on:{click:a.handlerUpdate}},[a._v(" 修改 ")])],1)],1)],1)},k=[],v={name:"global_page",props:{data:{type:Object,default(){return{lockMenu:!0,pageSize:6}}}},data(){return{loading:!1}},methods:{handlerUpdate(){},handlerSwitch(a){console.log(this.data)}}},y=v,P=Object(d["a"])(y,w,k,!1,null,null,null),_=P.exports,x=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-card",{attrs:{size:"small",title:"安全设置",bordered:!1,loading:a.loading}},[t("a-list",{attrs:{"item-layout":"horizontal","data-source":a.data},scopedSlots:a._u([{key:"renderItem",fn:function(e){return t("a-list-item",{},[t("a",{attrs:{slot:"actions"},on:{click:a.showVisible},slot:"actions"},[a._v("修改")]),t("a-list-item-meta",{attrs:{description:e.desc}},[t("h3",{attrs:{slot:"title"},slot:"title"},[a._v(a._s(e.title))])])],1)}}])}),t("a-modal",{attrs:{title:"修改密码"},on:{ok:a.handleOk},model:{value:a.visible,callback:function(e){a.visible=e},expression:"visible"}},[t("a-form",{attrs:{layout:"horizontal",labelAlign:"left",labelCol:{span:4},wrapperCol:{span:20}}},[t("a-form-item",{attrs:{label:"原始密码"}},[t("a-input",{attrs:{type:"password",placeholder:"原始密码",allowClear:""},model:{value:a.req.oldPwd,callback:function(e){a.$set(a.req,"oldPwd",e)},expression:"req.oldPwd"}})],1),t("a-form-item",{attrs:{label:"新的密码"}},[t("a-input",{attrs:{type:"password",placeholder:"新的密码",allowClear:""},model:{value:a.req.newPwd,callback:function(e){a.$set(a.req,"newPwd",e)},expression:"req.newPwd"}})],1),t("a-form-item",{attrs:{label:"确认密码"}},[t("a-input",{attrs:{type:"password",placeholder:"确认密码",allowClear:""},model:{value:a.req.rePwd,callback:function(e){a.$set(a.req,"rePwd",e)},expression:"req.rePwd"}})],1)],1)],1)],1)},C=[],$={name:"security_page",data(){return{loading:!1,visible:!1,data:[{title:"修改密码",desc:"account password"}],req:{oldPwd:"",newPwd:"",rePwd:""}}},methods:{showVisible(){this.req={oldPwd:"",newPwd:"",rePwd:""},this.visible=!0},handleOk(){this.$message.success("修改成功")}}},z=$,U=Object(d["a"])(z,x,C,!1,null,null,null),q=U.exports,O={name:"index",components:{BasePage:u,AvatarPage:f,GlobalPage:_,SecurityPage:q},data(){return{}},methods:{}},S=O,j=Object(d["a"])(S,l,r,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0a36a6.a6af3352.js.map