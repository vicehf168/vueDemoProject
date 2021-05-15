
//配置http请求前置公共域名

/* eslint-disable no-param-reassign */
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
/**
 * 过滤 url 白名单
 * @param {String} url 待过滤地址
 */
// Loading，页面请求接口自动加载转圈，全局设置
import { Loading } from 'element-ui';
var loading = null;
const instance = axios.create({
    baseURL: 'http://uatdatatools-uat.renliwo.com/demoapp',
    // baseURL: 'http://127.0.0.1:8899/demoapp',
    // baseURL: '/demoapp',
    withCredentials: true,
});

let url = '';
// 设置默认请求拦截器
instance.interceptors.request.use((config) => {
    console.log('config', config);

    // 请求拦截器，即接口请求前做的事，请求之前发送loading，全局设置，每个接口请求都会加载转圈
    loading = Loading.service({
        lock: true,

        text: 'Loading',

        spinner: 'el-icon-loading',

        background: 'rgba(0, 0, 0, 0.7)'

    })
    return config
}, (err) => Promise.reject(err));

// 设置默认请求拦截器
instance.interceptors.response.use((response) => {
    // 接口有返回时，loading关闭，全局
    loading.close();
    console.log('response===', response)
    const { data } = response;
    return Promise.resolve(data);
}, (err) => {
    // 服务端无响应
    return false;
});

export default instance;
