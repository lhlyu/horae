(function(e){function t(t){for(var a,i,c=t[0],u=t[1],s=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-019e58c6":"a9182c56","chunk-2d0baaed":"e7096766","chunk-2d0ceeb6":"37ce127a","chunk-2d0e95df":"82434703","chunk-41800d16":"dcc96eb8"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cdn.jsdelivr.net/gh/lhlyu/horae@master/docs/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2938:function(e,t,n){"use strict";var a=n("d66b"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"app"},c=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,o,r,!1,null,null,null),l=s.exports,d=n("2f62"),m=n("0e44"),f=(n("c975"),n("b0c0"),n("0347")),p="/admin/board",h={to:"",name:"管理"},v=function e(t,n,a){for(var o=0,r=t.length;o<r;o++)-1!==n.indexOf(t[o].path)&&a(t[o]),t[o].children&&t[o].children.length&&e(t[o].children,n,a)},b={state:{fold:Object(f["a"])().apple.phone,breadcrumbItems:[h],menuItems:[],activeMenu:p,isLoading:!1},getters:{},mutations:{SET_FOLDER:function(e,t){e.fold=t},SET_BREADCRUMBITEMS:function(e,t){e.breadcrumbItems=t},SET_MENULIST:function(e,t){e.menuItems=t},SET_ACTIVEMENU:function(e,t){t&&""!==t||(t=p);var n=[h];v(e.menuItems,t,(function(e){n.push({to:e.path,name:e.name})})),e.breadcrumbItems=n,e.activeMenu=t},SET_LOADING:function(e,t){e.isLoading=t}},actions:{SET_MENULIST:function(e,t){var n=e.commit;n("SET_MENULIST",t)}}},g=(n("96cf"),n("1da1")),_=(n("d3b7"),n("bc3a")),E=n.n(_),T=n("a78e"),O=n.n(T),k=n("323e"),S=n.n(k),w=n("5c96"),A=n.n(w);E.a.defaults.timeout=1e4,E.a.interceptors.request.use((function(e){return S.a.start(),I.commit("SET_LOADING",!0),e.headers["Content-Type"]="application/json;charset=UTF-8",O.a.get("access_token")&&(e.headers.Authorization="Bearer"+O.a.get("access_token")),e}),(function(e){return w["Message"].error(e.response.data.message),Promise.resolve({code:-1,message:"error",data:null})})),E.a.interceptors.response.use((function(e){return S.a.done(),I.commit("SET_LOADING",!1),e.data?Promise.resolve(e.data):Promise.resolve({code:1,message:"failure",data:null})}),(function(e){return w["Message"].error(e.response.data.message),Promise.resolve({code:-1,message:"error",data:null})}));var y=E.a,j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return{u:e,m:t}},R={LoginApi:j("/api/login"),RoleApi:j("/api/admin/roles"),EditRoleApi:j("/api/admin/role","post"),DelRoleApi:j("/api/admin/role","delete"),PowerApi:j("/api/admin/powers","get")},x="",L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return y.request({url:e,method:t,baseURL:x,data:n})},C={fetchLogin:function(){return L(R.LoginApi.u,R.LoginApi.m)},fetchRoles:function(e){return L(R.RoleApi.u,R.RoleApi.m,e)},fetchEditRole:function(e){return L(R.EditRoleApi.u,R.EditRoleApi.m,e)},fetchDelRole:function(e){return L(R.DelRoleApi.u,R.DelRoleApi.m,e)},fetchPowers:function(){return L(R.PowerApi.u,R.PowerApi.m)}},D={state:{codes:[]},getters:{},mutations:{SET_CODES:function(e,t){e.codes=t}},actions:{SET_CODES:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,C.fetchLogin();case 3:a=t.sent,a.then((function(e){e.code?n("SET_CODES",[]):n("SET_CODES",e.data.codes)}));case 5:case"end":return t.stop()}}),t)})))()}}};a["default"].use(d["a"]);var I=new d["a"].Store({state:{routers:null,token:null},getters:{getToken:function(e){return e.token}},mutations:{SET_ROUTERS:function(e,t){e.routers=t},SET_TOKEN:function(e,t){e.token=t,window.sessionStorage.setItem("token",t)}},actions:{addTab:function(e,t){var n=e.commit;n("addTab",t)}},modules:{layout:b,user:D},plugins:[Object(m["a"])({storage:window.sessionStorage,reducer:function(e){return{layout:e.layout,user:e.user}}})]}),M=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"u-login"},[n("el-button",{on:{click:e.login}},[e._v("默认按钮")]),n("Plate")],1)},N=[],$=n("5530"),U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"u-plate"},[n("div",{staticClass:"u-plate__left"},[e._v(" 莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。 料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。 ")]),n("div",{staticClass:"u-plate__center"}),n("div",{staticClass:"u-plate__right"})])}],q={name:"index",data:function(){return{}},methods:{}},H=q,B=(n("ceff"),Object(u["a"])(H,U,F,!1,null,null,null)),G=B.exports,K=(n("99af"),n("a434"),n("2909")),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{staticClass:"u-transition",class:e.fold?"u-fold":"",attrs:{width:"250px"}},[n("ASide")],1),n("el-container",{staticClass:"u-transition"},[n("el-header",[n("Header")],1),n("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadcrumbItems,(function(t,a){return n("el-breadcrumb-item",{key:a},[e._v(e._s(t.name))])})),1),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}]},[n("keep-alive",[n("router-view")],1)],1),n("el-footer",[n("Footer")],1)],1)],1)},z=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"u-header"},[n("div",{staticClass:"u-header__left"},[n("i",{staticClass:"el-icon-s-fold u-transition",class:e.fold?"u-rotate-180":"",on:{click:e.triggerFold}})]),n("div",{staticClass:"u-header__right"})])},Q=[],W={name:"index",methods:Object($["a"])({},Object(d["b"])({triggerFold:function(e){e("SET_FOLDER",!this.fold)}})),computed:Object($["a"])({},Object(d["c"])({fold:function(e){return e.layout.fold}}))},X=W,Y=Object(u["a"])(X,J,Q,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,(function(t,a){return n("el-menu",{key:a,staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.activeMenu,router:!0},on:{select:e.selectHandler}},[t.children&&t.children.length?n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[t.icon?n("i",{class:t.icon}):e._e(),n("span",[e._v(e._s(t.name))])]),e._l(t.children,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.path}},[t.icon?n("i",{class:t.icon}):e._e(),n("span",[e._v(e._s(t.name))])])}))],2):n("el-menu-item",{attrs:{index:t.path}},[t.icon?n("i",{class:t.icon}):e._e(),n("span",[e._v(e._s(t.name))])])],1)})),1)},te=[],ne={name:"index",data:function(){return{}},methods:Object($["a"])({},Object(d["b"])({selectHandler:function(e,t){e("SET_ACTIVEMENU",t)}})),computed:Object($["a"])({},Object(d["c"])({items:function(e){return e.layout.menuItems},activeMenu:function(e){return e.layout.activeMenu}}))},ae=ne,oe=Object(u["a"])(ae,ee,te,!1,null,null,null),re=oe.exports,ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("© 2020 Lhlyu · 虚无缥缈 时过云烟")])])}],ue={name:"index"},se=ue,le=Object(u["a"])(se,ie,ce,!1,null,"72e11b0c",null),de=le.exports,me={name:"layout",components:{Header:Z,ASide:re,Footer:de},mounted:function(){},computed:Object($["a"])({},Object(d["c"])({breadcrumbItems:function(e){return e.layout.breadcrumbItems},fold:function(e){return e.layout.fold},isLoading:function(e){return e.layout.isLoading}}))},fe=me,pe=(n("2938"),Object(u["a"])(fe,V,z,!1,null,null,null)),he=pe.exports,ve=function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},be=function(e){var t=[{path:"/admin",name:"layout",component:he,redirect:"/admin/board",children:e},{path:"*",name:"404",component:ve}];return je.concat(t)},ge=function(e){if(!e.length)return[];function t(e,n){for(var a=0;a<e.length;a++)-1===n.indexOf(e[a].code)&&(e.splice(a,1),a=0!==a?a-1:a),e[a].children&&e[a].children.length&&t(e[a].children,n)}var n=Object(K["a"])(Re);return t(n,e),n},_e={name:"index",components:{Plate:G},methods:Object($["a"])({},Object(d["b"])({login:function(e){var t=this,n=this.$request.fetchLogin();n.then((function(n){if(!n.code){e("SET_CODES",n.data.codes);var a=ge(n.data.codes);if(a.length){var o=be(a);e("SET_MENULIST",a),e("SET_TOKEN",+new Date),e("SET_ROUTERS",o),e("SET_ACTIVEMENU"),t.$router.addRoutes(o),t.$router.push({path:"/admin"})}}}))}})),computed:{}},Ee=_e,Te=Object(u["a"])(Ee,P,N,!1,null,null,null),Oe=Te.exports,ke=function(){return n.e("chunk-2d0ceeb6").then(n.bind(null,"6204"))},Se=function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},we=function(){return n.e("chunk-2d0baaed").then(n.bind(null,"37f9"))},Ae=function(){return n.e("chunk-41800d16").then(n.bind(null,"0f69"))},ye=function(){return n.e("chunk-019e58c6").then(n.bind(null,"d78e"))},je=[{path:"/",name:"登录",component:Oe},{path:"*",name:"notfound",component:Se}],Re=[{code:10,path:"/admin/board",name:"首页",icon:"el-icon-house",component:we},{code:12,path:"/admin/permission",name:"权限",icon:"el-icon-s-operation",redirect:"/admin/permission/user",component:ke,children:[{code:1201,path:"/admin/permission/user",name:"用户",component:Ae},{code:1202,path:"/admin/permission/role",name:"角色",component:ye}]}];a["default"].use(M["a"]);var xe=new M["a"]({routes:je});xe.beforeEach((function(e,t,n){if(!I.state.token){var a=window.sessionStorage.getItem("token");if(a){var o=ge(I.state.user.codes),r=be(o);I.commit("SET_TOKEN",a),I.commit("SET_MENULIST",o),I.commit("SET_ROUTERS",r),xe.addRoutes(r),n(e.path)}}n()}));var Le=xe;a["default"].prototype.$isMobile=Object(f["a"])().phone,a["default"].prototype.$request=C,a["default"].mixin({components:{},data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initData(),e.init()}))},methods:{initData:function(){},init:function(){},scrollTop:function(e,t){window.scrollTo({top:t||0,behavior:"smooth"}),e&&setTimeout((function(){e()}),this.$isMobile?0:400)}}});var Ce=n("96eb"),De=n.n(Ce),Ie=function(e){var t=e.mock;t&&(De.a.setup({timeout:"200-1000"}),De.a.mock(R.LoginApi.u,R.LoginApi.m,{code:0,message:"success",data:{codes:[10,12,1201,1202,120201,120202,120203],name:"lhlyu"}}))},Me=function(e){var t=e.mock;t&&(De.a.setup({timeout:"200-1000"}),De.a.mock(R.RoleApi.u,R.RoleApi.m,{code:0,message:"success",data:{page:{pageNum:1,pageSize:10,total:2},list:[{id:1,name:"管理者",remark:"普通管理者",enable:0,powers:[10,12,1201,1202,120201,120202],"createdAt|1591252800000-1591252842060":0,updatedAt:+new Date-6e3},{id:2,name:"测试者",remark:"测试者",enable:0,powers:[10],"createdAt|1591252800000-1591252842060":0,updatedAt:+new Date-12e3},{id:1,name:"超级测试者",remark:"测试者",enable:0,powers:[10,12,1201,1202,120201,120202,120203],"createdAt|1591252800000-1591252842060":0,updatedAt:+new Date-6e3}]}}),De.a.mock(R.EditRoleApi.u,R.EditRoleApi.m,{code:0,message:"success",data:null}),De.a.mock(R.DelRoleApi.u,R.DelRoleApi.m,{code:0,message:"success",data:null}),De.a.mock(R.PowerApi.u,R.PowerApi.m,{code:0,message:"success",data:[{id:10,name:"首页"},{id:12,name:"权限"},{id:1201,name:"用户"},{id:1202,name:"角色"},{id:120201,name:"角色添加"},{id:120202,name:"角色删除"},{id:120203,name:"角色更改"}]}))};Ie({mock:!0}),Me({mock:!0});n("a630"),n("a15b"),n("baa5"),n("d81d"),n("13d5"),n("fb6a"),n("a9e3"),n("7039"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("466d"),n("5319"),n("841c"),n("1276"),n("ddb0"),navigator.userAgent.toLowerCase();var Pe=function(e,t){return-1!=e.indexOf(t)};a["default"].directive("power",{inserted:function(e,t){var n=t.value;n&&(Pe(I.state.user.codes,n)||e.parentNode&&e.parentNode.removeChild(e))}}),a["default"].directive("throttling",{inserted:function(e,t){var n=t.value,a=n.callback,o=n.time;e.callback=a,e.time=o,e.addEventListener("click",(function(){var t=(new Date).getTime();(!e.preTime||t-e.preTime>e.time)&&(e.preTime=t,e.callback())}))},update:function(e,t){var n=t.value,a=n.callback,o=n.time;e.callback=a,e.time=o}}),a["default"].use(A.a),a["default"].config.productionTip=!1,new a["default"]({store:I,router:Le,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"9c0c":function(e,t,n){},ceff:function(e,t,n){"use strict";var a=n("dc79"),o=n.n(a);o.a},d66b:function(e,t,n){},dc79:function(e,t,n){}});
//# sourceMappingURL=app.b7267dc8.js.map