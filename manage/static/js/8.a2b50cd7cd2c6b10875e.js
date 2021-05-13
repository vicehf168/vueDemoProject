webpackJsonp([8],{234:function(e,t,r){r(476);var o=r(95)(r(347),r(501),null,null);e.exports=o.exports},243:function(e,t,r){"use strict";function o(e){return r.i(c.a)({url:"/forwardPublicTask",method:"get",params:e})}function a(e){return r.i(c.a)({url:"/forwardInviteTask",method:"get",params:e})}function l(e){return r.i(c.a)({url:"/queryUserName",method:"get",params:e})}function n(e){return r.i(c.a)({url:"/createSettlementOrder",method:"get",params:e})}function s(e){return r.i(c.a)({url:"/createAcceptanceOrder",method:"get",params:e})}function i(e){return r.i(c.a)({url:"/createReviewOrder",method:"get",params:e})}function u(e){return r.i(c.a)({url:"/createPayOrder",method:"get",params:e})}function m(e){return r.i(c.a)({url:"/createXvReviewOrder",method:"get",params:e})}function d(e){return r.i(c.a)({url:"/createXvFeeIssueOrder",method:"get",params:e})}t.i=o,t.h=a,t.b=l,t.f=n,t.g=s,t.e=i,t.d=u,t.c=m,t.a=d;var c=r(54)},347:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(243);t.default={name:"xvFeeIssueOrder",data:function(){return{formModel:{msg:"Welcome to Your Vue.js App",username:"",pwd:"",taskno:"",tasknumber:"",mobile:"",xvFeeIssueType:"lgFeeIssueType"},formRule:{xvFeeIssueType:[{required:!0,message:"请选择任务类型"}],username:[{required:!0,message:"请输入用户名"}],pwd:[{required:!0,message:"请输入密码"}],mobile:[{required:!0,message:"请输入手机号"}]},restaurants:[],username:""}},methods:{handleBlur:function(e){this.disable2=!!e},handleBlur2:function(e){this.disable=!!e},sub:function(){var e=this;this.$refs.formRef.validate(function(t){return!!t&&(e.formModel.taskno&&e.formModel.taskno.trim()||e.formModel.tasknumber&&e.formModel.tasknumber.trim()?void r.i(o.a)(e.formModel).then(function(e){console.log(e),alert("发布成功!")}):void e.$message({type:"error",message:"任务编号与任务数量二者必选其一"}))})},reset:function(){this.formModel.username="",this.formModel.pwd="",this.formModel.taskno="",this.formModel.tasknumber="",this.formModel.mobile=""},querySearch:function(e,t){var r=this.restaurants;t(e?r.filter(this.createFilter(e)):r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){var e=this;r.i(o.b)().then(function(t){t&&(e.restaurants=t)})}},mounted:function(){this.loadAll()}}},365:function(e,t,r){t=e.exports=r(215)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-input-suffix{width:100%;height:100%}.input-container{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;margin:20px 0}.input-container p{width:150px;text-align:center}.el-input,.el-input__inner{width:50%}.submit-button{margin-left:60px;width:50%}",""])},476:function(e,t,r){var o=r(365);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(216)("19967104",o,!0)},501:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"demo-input-suffix"},[r("el-form",{ref:"formRef",attrs:{"label-position":"right",rules:e.formRule,model:e.formModel,"label-width":"150px"}},[r("el-form-item",[r("h4",{staticStyle:{color:"#e64242"}},[e._v("前提：1、手机号已签约B公司，且反向导入任务自动领取")]),e._v(" "),r("h4",{staticStyle:{color:"#e64242"}},[e._v("2、开票内容已配置")]),e._v(" "),r("h4",{staticStyle:{color:"#e64242"}},[e._v("3、走虚拟支付，需配置公司为虚拟支付方式及账号权限")]),e._v(" "),r("h4",{staticStyle:{color:"#e64242"}},[e._v("4、收付款双方卡号已配置：contract_bank_info、transaction_bank_info（网商）")])]),e._v(" "),r("el-form-item",{attrs:{label:"任务类型",prop:"xvFeeIssueType"}},[r("el-radio-group",{model:{value:e.formModel.xvFeeIssueType,callback:function(t){e.$set(e.formModel,"xvFeeIssueType",t)},expression:"formModel.xvFeeIssueType"}},[r("el-radio",{attrs:{label:"lgFeeIssueType"}},[e._v("临时个体")]),e._v(" "),r("el-radio",{attrs:{disabled:"",label:"fqFeeIssueType"}},[e._v("非全")]),e._v(" "),r("el-radio",{attrs:{disabled:"",label:"clFeeIssueType"}},[e._v("承揽")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"B端用户名",prop:"username"}},[r("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"1000px"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入用户名"},on:{select:e.handleSelect},model:{value:e.formModel.username,callback:function(t){e.$set(e.formModel,"username",t)},expression:"formModel.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"text",name:"password",placeholder:"请输入密码"},model:{value:e.formModel.pwd,callback:function(t){e.$set(e.formModel,"pwd",t)},expression:"formModel.pwd"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"任务编号：",prop:"taskno"}},[r("el-input",{attrs:{disabled:e.disable,type:"text",name:"taskno",placeholder:"请输入任务编号"},on:{change:function(t){return e.handleBlur(e.formModel.taskno)}},model:{value:e.formModel.taskno,callback:function(t){e.$set(e.formModel,"taskno",t)},expression:"formModel.taskno"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"任务数量：",prop:"tasknumber"}},[r("el-input",{attrs:{disabled:e.disable2,maxlength:"5",type:"text",name:"tasknumber",placeholder:"请输入任务编号"},on:{change:function(t){return e.handleBlur2(e.formModel.tasknumber)}},model:{value:e.formModel.tasknumber,callback:function(t){e.$set(e.formModel,"tasknumber",t)},expression:"formModel.tasknumber"}})],1),e._v(" "),r("el-form-item",[r("span",{staticStyle:{color:"#e64242"}},[e._v("(填了任务数量之后，任务编号为：当前时间戳后6位+任务序号，例：当前时间戳后6位为112233，则第88个任务编号为11223300088）")])]),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{attrs:{type:"text",maxlength:"11",name:"mobile",placeholder:"请输入手机号"},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.sub}},[e._v("生成小V端待费用发放订单")]),e._v(" "),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]}}});