<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>正向发布任务</template>
						<el-menu-item index="forwardPublicTaskList">正向公开任务</el-menu-item>
						<el-menu-item index="forwardInviteTaskList">正向邀请任务</el-menu-item>
<!--						<el-menu-item index="foodList">食品列表</el-menu-item>-->
<!--						<el-menu-item index="orderList">订单列表</el-menu-item>-->
<!--						<el-menu-item index="adminList">管理员列表</el-menu-item>-->
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>生成B端订单</template>
                        <el-menu-item index="acceptanceOrder">待验收订单</el-menu-item>
						<el-menu-item index="settlementOrderList">待结算结算订单</el-menu-item>
<!--                        <el-menu-item index="clStatemengOrder">承揽报酬订单</el-menu-item>-->
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>生成V端订单</template>
						<el-menu-item index="reviewOrderList">大V端待审核订单</el-menu-item>
                        <el-menu-item index="payOrderList">大V端待支付订单</el-menu-item>
                        <el-menu-item index="xvReviewOrderList">小V端待审核订单</el-menu-item>
                        <el-menu-item index="xvFeeIssueOrderList">小V端费用发放订单</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
