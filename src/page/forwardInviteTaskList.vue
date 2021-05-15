<template>
    <div class="demo-input-suffix">
        <el-form label-position="right" :rules="formRule" :model="formModel" ref="formRef" label-width="150px">
            <el-form-item label="任务方式" prop="inviteTaskType">
                <el-radio-group v-model="formModel.inviteTaskType">
                    <el-radio :label="'fqAlipayInviteTask'">非全-支付宝-邀请</el-radio>
                    <el-radio :label="'fqAppInviteTask'">非全-app-邀请</el-radio>
                    <el-radio :label="'clAlipayInviteTask'">承揽-支付宝-邀请</el-radio>
                    <el-radio :label="'clAppInviteTask'">承揽-app-邀请</el-radio>
                    <el-radio :label="'lgAlipayInviteTask'">临时个体-支付宝-邀请</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="B端用户名：" prop="username">
                <el-autocomplete
                    class="inline-input"
                    v-model="formModel.username"
                    style="width: 1000px"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入用户名"
                    @select="handleSelect"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item label="密码：" prop="pwd">
                <el-input type="text" name="pwd" placeholder="请输入密码" v-model="formModel.pwd"/>
            </el-form-item>
            <el-form-item label="任务编号：" prop="taskno">
                <el-input :disabled="disable" @change="handleBlur(formModel.taskno)" type="text" name="taskno" placeholder="请输入任务编号" v-model="formModel.taskno"/>
            </el-form-item>
            <el-form-item label="任务数量：" prop="tasknumber">
                <el-input :disabled="disable2" maxlength="5" @change="handleBlur2(formModel.tasknumber)" type="text" name="tasknumber" placeholder="请输入任务编号" v-model="formModel.tasknumber"/>
            </el-form-item>
            <el-form-item>
                <span style="color: #e64242">(填了任务数量之后，任务编号为：当前时间戳后6位+任务序号，例：当前时间戳后6位为112233，则第88个任务编号为11223300088）</span>
            </el-form-item>
            <el-form-item label="被邀请人手机号：" prop="mobile">
                <el-input type="text" maxlength="11" name="mobile" placeholder="请输入手机号" v-model="formModel.mobile"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="sub">发布任务</el-button>
                <el-button  @click="reset">发布任务</el-button>
            </el-form-item>
        </el-form>
<!--        <el-radio-group v-model="inviteTaskType">-->
<!--            <el-radio :label="'fqAlipayInviteTask'">非全-支付宝-邀请</el-radio>-->
<!--            <el-radio :label="'fqAppInviteTask'">非全-app-邀请</el-radio>-->
<!--            <el-radio :label="'clAlipayInviteTask'">承揽-支付宝-邀请</el-radio>-->
<!--            <el-radio :label="'clAppInviteTask'">承揽-app-邀请</el-radio>-->
<!--            <el-radio :label="'lgAlipayInviteTask'">临时个体-支付宝-邀请</el-radio>-->
<!--        </el-radio-group>-->
<!--        <div class="input-container">-->
<!--            <p>B端用户名：</p>-->
<!--            <el-input type="text" name="username" v-model="username"/>-->
<!--        </div>-->
<!--        <el-button class="submit-button"  @click="sub">发布任务</el-button>-->
    </div>
</template>

<script>
    import { forwardInviteTask,queryUserName } from '@/utils/publishTask'
    export default {
        name: 'forwardInviteTask',
        // watch: {
        //     'formModel.taskno' (val) { // 可以监听对象的单个属性
        //         debugger
        //         if(val) {
        //             this.disable = true
        //         } else {
        //             this.disable = false
        //         }
        //     },
        //     'formModel.tasknumber' (val) { // 可以监听对象的单个属性
        //         debugger
        //         if (val) {
        //             this.disable = false
        //         } else {
        //             this.disable = true
        //         }
        //     }
        // },
        data(){
            return {
                // 初始化formModel中定义的所有prop，即各个字段的初始值
                formModel: {
                    msg: 'Welcome to Your Vue.js App',
                    username: '',
                    pwd: '',
                    taskno: '',
                    tasknumber: '',
                    mobile: '',
                    inviteTaskType: 'lgAlipayInviteTask',
                },
                // 校验规则，直接引用prop属性的值
                formRule: {
                    inviteTaskType: [{ required: true, message: "请选择发布的任务类型"}],
                    username: [{ required: true, message: "请输入用户名",trigger: 'change'}],
                    pwd: [{ required: true, message: "请输入密码"}],
                    // taskno: [{ required: true, message: "请输入任务编号"}],
                    mobile: [{ required: true, message: "请输入被邀请人手机号"}]
                },
                restaurants: [],
                username: '',
                disable: false,
                disable2: false
            }
        },
        methods: {
            handleBlur(val) {
                this.disable2 = val ? true: false
            },
            handleBlur2(val) {
                this.disable = val ? true: false
            },
            sub(){
                    this.$refs['formRef'].validate((valid) => {
                            if(valid){    //表示校验规则通过
                                if((!this.formModel.taskno  || !this.formModel.taskno.trim()) && (!this.formModel.tasknumber || !this.formModel.tasknumber.trim())){
                                    this.$message({
                                        type: 'error',
                                        message: '任务编号与任务数量二者必选其一'
                                    })
                                    return
                                }
                                forwardInviteTask(this.formModel).then(res => {
                                    console.log(res)
                                    if (res == 'success'){
                                        this.$message({
                                            message: '发布成功',
                                            type: 'success'
                                        });
                                    }else{
                                        this.$message({
                                            message: res,
                                            type: 'error'
                                        });
                                    }
                                })
                            }else{
                                return false
                            }
                        }

                    );
            },
            // 方法与方法之间用","隔开，方法内的不同行代码用";"隔开或者不写标点符号
            reset(){
                //data中定义的属性，需要通过this去调用
                this.formModel.username = ""
                this.formModel.pwd = ""
                this.formModel.taskno = ""
                this.formModel.tasknumber = ""
                this.formModel.mobile = ""
            },
            querySearch(queryString, cb) {
                // debugger
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                // debugger
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                queryUserName().then(res => {
                    if(res) {
                        this.restaurants = res
                    }
                })
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.loadAll()
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .demo-input-suffix{
        width: 100%;
        height: 100%;

    }

    .input-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        margin: 20px 0px 20px 0px;
        p{
            width: 150px;
            text-align: center;
        }
    }

    .el-input, .el-input__inner{
        width: 50%;
    }

    .submit-button{
        margin-left: 60px;
        width: 50%;
    }
</style>
