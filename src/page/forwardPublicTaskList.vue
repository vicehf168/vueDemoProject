<template>
        <div class="demo-input-suffix">
<!--            rules属性在下面具体的校验规则里引用，data中通过rules属性传入约定的验证规则，model属性表示动态绑定，ref相当于id-->
            <el-form label-position="right" :rules="formRule" :model="formModel" ref="formRef" label-width="150px">
                <el-form-item label="任务方式" prop="publicTaskType">
<!--                所有的元素都包在校验规则模块中，因此动态绑定的属性名要用formModel.publicTaskType格式，而不是直接写publicTaskType，即该元素适用校验规则-->
                    <el-radio-group v-model="formModel.publicTaskType">
                        <el-radio :label="'fqAlipayPublicTask'">非全-支付宝-抢单</el-radio>
                        <el-radio :label="'fqAppPublicTask'">非全-app-抢单</el-radio>
                        <el-radio :label="'clAlipayPublicTask'">承揽-支付宝-抢单</el-radio>
                        <el-radio :label="'clAppPublicTask'">承揽-app-抢单</el-radio>
                        <el-radio :label="'lgAlipayPublicTask'">临时个体-支付宝-抢单</el-radio>
                    </el-radio-group>
                </el-form-item>
<!--                下面是输入建议框，即联想输入-->
<!--                label属性就是输入框前面的文字，prop设置的是需要校验的字段名，也会将v-model定义的属性反绑定到prop中，placeholder是输入框中的默认显示文字-->
                <el-form-item label="B端用户名" prop="username">
<!--                    v-model使用formModel.username，表示将该字段绑定到上面定义的el-form表单中-->
<!--                    <el-input type="text" name="username" v-model="formModel.username"/>-->
                    <el-autocomplete
                        class="inline-input"
                        v-model="formModel.username"
                        style="width: 1000px"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入用户名"
                        @select="handleSelect"
                    ></el-autocomplete>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="text" name="password" placeholder="请输入密码" v-model="formModel.pwd"/>
                </el-form-item>
                <el-form-item label="任务编号：" prop="taskno">
<!--                    冒号':'表示属性值取动态变量，不带':'则是赋固定值，先设置disabled属性的值取变量disable，@change方法表示该属性的值发生变化是触发的方法，仅限input标签-->
<!--                    属性取动态变量时，就可以在下面的methods中定义方法来赋值-->
                    <el-input :disabled="disable" @change="handleBlur(formModel.taskno)" type="text" name="taskno" placeholder="请输入任务编号" v-model="formModel.taskno"/>
                </el-form-item>
                <el-form-item label="任务数量：" prop="tasknumber">
                    <el-input :disabled="disable2" maxlength="5" @change="handleBlur2(formModel.tasknumber)" type="text" name="tasknumber" placeholder="请输入任务编号" v-model="formModel.tasknumber"/>
                </el-form-item>
                <el-form-item>
                    <span style="color: #e64242">(填了任务数量之后，任务编号为：当前时间戳后6位+任务序号，例：当前时间戳后6位为112233，则第88个任务编号为11223300088）</span>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  @click="sub">发布任务</el-button>
                    <el-button  @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
</template>

<script>
// {}里的表示引入js中具体的方法，from后面表示引入的js路径
    import { forwardPublicTask,queryUserName } from '@/utils/publishTask'
    export default {
        name: 'forwardPublicTask',    //该vue文件的别名，其他文件请求该vue文件时可以直接使用别名
        data(){
            return {
                // 初始化formModel中定义的所有prop，即各个字段的初始值，需要写在formModel{}中，其他可以直接写在return中定义
                formModel: {
                    msg: 'Welcome to Your Vue.js App',
                    username: '',
                    pwd: '',
                    taskno: '',
                    tasknumber: '',
                    publicTaskType: 'lgAlipayPublicTask',
                },
                // 校验规则，直接引用prop属性的值
                formRule: {
                    publicTaskType: [{ required: true, message: "请选择发布的任务类型"}],
                    username: [{ required: true, message: "请输入用户名",trigger: 'change'}],
                    pwd: [{ required: true, message: "请输入密码"}],
                    // taskno: [{ required: true, message: "请输入任务编号"}]
                },
                restaurants: [],
                username: '',
            }
        },
        methods: {
            // 定义handleBlur方法所在的input输入框的值发生变化时，触发该方法
            handleBlur(val) {
                // val有值时取true，否则取false
                this.disable2 = val ? true: false
            },
            handleBlur2(val) {
                this.disable = val ? true: false
            },
            sub(){
                // let obj = {
                //     username: this.username,
                //     pwd: this.pwd,
                //     taskno: this.taskno,
                //     publicTaskType: this.publicTaskType
                // }
                // 下面是固定写法，$refs['formRef']表示引用form表单中定义的ref属性，是css的引用方法，因为涉及到输入框校验位通过时下方的提示语，即css样式
                this.$refs['formRef'].validate((valid) => {      //触发校验规则
                    if(valid){      //表示整个校验规则通过
                        if((!this.formModel.taskno  || !this.formModel.taskno.trim()) && (!this.formModel.tasknumber || !this.formModel.tasknumber.trim())){
                            this.$message({
                                type: 'error',
                                message: '任务编号与任务数量二者必选其一'
                            })
                            return
                        }
                        //this.formModel是在return中初始化的几个输入框变量，传到后端就是username、pwd等动态绑定到的变量的值
                        forwardPublicTask(this.formModel).then(res => {        //res是后台接口返回的数据
                            console.log(res)
                            alert('发布成功!')
                        })
                    }else{
                        return false
                    }
                    }

                );
            },
            // 方法与方法之间用","隔开，方法内的不同行代码用";"隔开或者不写标点符号
            reset(){
                //data中定义的属性，需要通过this去调用，而个属性的v-model又有前缀formModel，因此调用时也要加前缀formModel
                this.formModel.username = "";
                this.formModel.pwd = "";
                this.formModel.taskno = "";
                this.formModel.tasknumber = "";
            },
            querySearch(queryString, cb) {      // queryString是联想框中手动输入的内容
                // debugger
                var restaurants = this.restaurants;
                //三目运算
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                // debugger
                return (restaurant) => {
                    // ===0表示输入的内容只能从联想内容的开头开始匹配，!==-1表示输入内容从联想内容的任何位置开始匹配
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
        //mounted()是最先触发的方法，类似于初始化加载方法
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
