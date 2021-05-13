import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const forwardPublicTaskList = r => require.ensure([], () => r(require('@/page/forwardPublicTaskList')), 'forwardPublicTaskList');
const forwardInviteTaskList = r => require.ensure([], () => r(require('@/page/forwardInviteTaskList')), 'forwardInviteTaskList');
const acceptanceOrder = r => require.ensure([], () => r(require('@/page/acceptanceOrder')), 'acceptanceOrder');
const settlementOrderList = r => require.ensure([], () => r(require('@/page/settlementOrderList')), 'settlementOrderList');
const clStatemengOrder = r => require.ensure([], () => r(require('@/page/clStatemengOrder')), 'clStatemengOrder');
const reviewOrderList = r => require.ensure([], () => r(require('@/page/reviewOrderList')), 'reviewOrderList');
const payOrderList = r => require.ensure([], () => r(require('@/page/payOrderList')), 'payOrderList');
const xvReviewOrderList = r => require.ensure([], () => r(require('@/page/xvReviewOrderList')), 'xvReviewOrderList');
const xvFeeIssueOrderList = r => require.ensure([], () => r(require('@/page/xvFeeIssueOrderList')), 'xvFeeIssueOrderList');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addShop',
			component: addShop,
			meta: ['添加数据', '添加商铺'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/forwardPublicTaskList',
			component: forwardPublicTaskList,
			meta: ['正向发布任务', '正向公开任务'],
		},{
			path: '/forwardInviteTaskList',
			component: forwardInviteTaskList,
			meta: ['正向发布任务', '正向邀请任务'],
		},{
            path: '/acceptanceOrder',
            component: acceptanceOrder,
            meta: ['正向发布任务', '生成待验收订单'],
        },{
			path: '/settlementOrderList',
			component: settlementOrderList,
			meta: ['正向发布任务', '生成待结算订单'],
		},{
			path: '/clStatemengOrder',
			component: clStatemengOrder,
			meta: ['正向发布任务', '承揽报酬订单'],
		},{
			path: '/reviewOrderList',
			component: reviewOrderList,
			meta: ['生成V端订单', '大V端审核订单'],
		},{
			path: '/payOrderList',
			component: payOrderList,
			meta: ['生成V端订单', '大V端支付订单'],
		},{
            path: '/xvReviewOrderList',
            component: xvReviewOrderList,
            meta: ['生成V端订单', '小V端审核订单'],
        },{
            path: '/xvFeeIssueOrderList',
            component: xvFeeIssueOrderList,
            meta: ['生成V端订单', '小V端费用发放订单'],
        },{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
