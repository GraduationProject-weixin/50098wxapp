(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"19ca":function(e,n,t){},5349:function(e,n,t){"use strict";var u=t("19ca"),r=t.n(u);r.a},"600e":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"95d1":function(e,n,t){"use strict";t.r(n);var u=t("ee9e"),r=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=r.a},"9dd6":function(e,n,t){"use strict";(function(e){t("9622");u(t("66fd"));var n=u(t("d8d2"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},d8d2:function(e,n,t){"use strict";t.r(n);var u=t("600e"),r=t("95d1");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("5349");var i,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"5a94bdb7",null,!1,u["a"],i);n["default"]=c.exports},ee9e:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,u,r,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(u,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var i=e.apply(n,t);function o(e){a(i,u,r,o,c,"next",e)}function c(e){a(i,u,r,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{ruleForm:{},tableName:"",yonghuxingbieOptions:[],yonghuxingbieIndex:0}},onLoad:function(){var n=this;return i(u.default.mark((function t(){var r,a;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,n.$api.session(r);case 3:a=t.sent,n.ruleForm=a.data,n.tableName=r,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.yonghuxingbieOptions.forEach((function(e,t){e==n.ruleForm.xingbie&&(n.yonghuxingbieIndex=t)}))),n.styleChange();case 8:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var n=this;return i(u.default.mark((function t(){var r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.yonghuming||"yonghu"!=n.tableName){t.next=3;break}return n.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima||"yonghu"!=n.tableName){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(n.ruleForm.xingming||"yonghu"!=n.tableName){t.next=9;break}return n.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=n.tableName||!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if("yonghu"!=n.tableName||!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){t.next=15;break}return n.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:return r=e.getStorageSync("nowTable"),t.next=18,n.$api.update(r,n.ruleForm);case 18:n.$utils.msgBack("修改成功");case 20:case"end":return t.stop()}}),t)})))()},yonghutouxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate()}))}}};n.default=o}).call(this,t("543d")["default"])}},[["9dd6","common/runtime","common/vendor"]]]);