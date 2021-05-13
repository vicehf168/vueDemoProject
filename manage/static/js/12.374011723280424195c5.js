webpackJsonp([12],{224:function(e,t,r){r(483);var a=r(95)(r(337),r(508),null,null);e.exports=a.exports},243:function(e,t,r){"use strict";function a(e){return r.i(d.a)({url:"/forwardPublicTask",method:"get",params:e})}function o(e){return r.i(d.a)({url:"/forwardInviteTask",method:"get",params:e})}function l(e){return r.i(d.a)({url:"/queryUserName",method:"get",params:e})}function n(e){return r.i(d.a)({url:"/createSettlementOrder",method:"get",params:e})}function s(e){return r.i(d.a)({url:"/createAcceptanceOrder",method:"get",params:e})}function i(e){return r.i(d.a)({url:"/createReviewOrder",method:"get",params:e})}function u(e){return r.i(d.a)({url:"/createPayOrder",method:"get",params:e})}function c(e){return r.i(d.a)({url:"/createXvReviewOrder",method:"get",params:e})}function m(e){return r.i(d.a)({url:"/createXvFeeIssueOrder",method:"get",params:e})}t.i=a,t.h=o,t.b=l,t.f=n,t.g=s,t.e=i,t.d=u,t.c=c,t.a=m;var d=r(54)},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(243);t.default={name:"forwardPublicTask",data:function(){return{formModel:{msg:"Welcome to Your Vue.js App",username:"",pwd:"",taskno:"",tasknumber:"",publicTaskType:"lgAlipayPublicTask"},formRule:{publicTaskType:[{required:!0,message:"请选择发布的任务类型"}],username:[{required:!0,message:"请输入用户名",trigger:"change"}],pwd:[{required:!0,message:"请输入密码"}]},restaurants:[],username:""}},methods:{handleBlur:function(e){this.disable2=!!e},handleBlur2:function(e){this.disable=!!e},sub:function(){var e=this;this.$refs.formRef.validate(function(t){return!!t&&(e.formModel.taskno&&e.formModel.taskno.trim()||e.formModel.tasknumber&&e.formModel.tasknumber.trim()?void r.i(a.i)(e.formModel).then(function(e){console.log(e),alert("发布成功!")}):void e.$message({type:"error",message:"任务编号与任务数量二者必选其一"}))})},reset:function(){this.formModel.username="",this.formModel.pwd="",this.formModel.taskno="",this.formModel.tasknumber=""},querySearch:function(e,t){var r=this.restaurants;t(e?r.filter(this.createFilter(e)):r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){var e=this;r.i(a.b)().then(function(t){t&&(e.restaurants=t)})},handleSelect:function(e){console.log(e)}},mounted:function(){this.loadAll()}}},372:function(e,t,r){t=e.exports=r(215)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-input-suffix{width:100%;height:100%}.input-container{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;margin:20px 0}.input-container p{width:150px;text-align:center}.el-input,.el-input__inner{width:50%}.submit-button{margin-left:60px;width:50%}",""])},483:function(e,t,r){var a=r(372);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(216)("35d89138",a,!0)},508:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"demo-input-suffix"},[r("el-form",{ref:"formRef",attrs:{"label-position":"right",rules:e.formRule,model:e.formModel,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"任务方式",prop:"publicTaskType"}},[r("el-radio-group",{model:{value:e.formModel.publicTaskType,callback:function(t){e.$set(e.formModel,"publicTaskType",t)},expression:"formModel.publicTaskType"}},[r("el-radio",{attrs:{label:"fqAlipayPublicTask"}},[e._v("非全-支付宝-抢单")]),e._v(" "),r("el-radio",{attrs:{label:"fqAppPublicTask"}},[e._v("非全-app-抢单")]),e._v(" "),r("el-radio",{attrs:{label:"clAlipayPublicTask"}},[e._v("承揽-支付宝-抢单")]),e._v(" "),r("el-radio",{attrs:{label:"clAppPublicTask"}},[e._v("承揽-app-抢单")]),e._v(" "),r("el-radio",{attrs:{label:"lgAlipayPublicTask"}},[e._v("临时个体-支付宝-抢单")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"B端用户名",prop:"username"}},[r("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"1000px"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入用户名"},on:{select:e.handleSelect},model:{value:e.formModel.username,callback:function(t){e.$set(e.formModel,"username",t)},expression:"formModel.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"text",name:"password",placeholder:"请输入密码"},model:{value:e.formModel.pwd,callback:function(t){e.$set(e.formModel,"pwd",t)},expression:"formModel.pwd"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"任务编号：",prop:"taskno"}},[r("el-input",{attrs:{disabled:e.disable,type:"text",name:"taskno",placeholder:"请输入任务编号"},on:{change:function(t){return e.handleBlur(e.formModel.taskno)}},model:{value:e.formModel.taskno,callback:function(t){e.$set(e.formModel,"taskno",t)},expression:"formModel.taskno"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"任务数量：",prop:"tasknumber"}},[r("el-input",{attrs:{disabled:e.disable2,maxlength:"5",type:"text",name:"tasknumber",placeholder:"请输入任务编号"},on:{change:function(t){return e.handleBlur2(e.formModel.tasknumber)}},model:{value:e.formModel.tasknumber,callback:function(t){e.$set(e.formModel,"tasknumber",t)},expression:"formModel.tasknumber"}})],1),e._v(" "),r("el-form-item",[r("span",{staticStyle:{color:"#e64242"}},[e._v("(填了任务数量之后，任务编号为：当前时间戳后6位+任务序号，例：当前时间戳后6位为112233，则第88个任务编号为11223300088）")])]),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.sub}},[e._v("发布任务")]),e._v(" "),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]}}});