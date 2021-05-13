
//配置http请求前置公共域名

/* eslint-disable no-param-reassign */
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
/**
 * 过滤 url 白名单
 * @param {String} url 待过滤地址
 */

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8899/demoapp',
    // baseURL: '/demoapp',
    withCredentials: true,
});

let url = '';
// 设置默认请求拦截器
instance.interceptors.request.use((config) => {
    console.log('config', config);
    return config
}, (err) => Promise.reject(err));

// 设置默认请求拦截器
instance.interceptors.response.use((response) => {
    console.log('response===', response)
    const { data } = response;
    return Promise.resolve(data);
}, (err) => {
    // 服务端无响应
    return false;
});

export default instance;
