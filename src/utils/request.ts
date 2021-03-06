import axios from 'axios';
import { getToken } from '@/utils/auth';
// import {  Toast } from '@ant-design/mobile'
// import {  Toast } from 'antd-mobile'
import {  Toast } from 'antd-mobile';
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:7000',
  timeout: 12000, // 请求超时时间
});

// request请求拦截器
service.interceptors.request.use(
  (config:any) => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // Do something with request error
    // for debug
    Promise.reject(error);
  },
);

// response 响应拦截器
service.interceptors.response.use(
  /**
   * 如果想要http 的详细信息例如头，状态
   * Please return  response => response
   */

  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.code === 'ECONNABORTED') {
    //   Toast.show({
    //     icon: 'fail',
    //     content: '登入超时',
    //   });
    //   return Promise.reject(error);
    // }
    if (error.response.status === 401) {
      Toast.show({
        icon: 'fail',
        content: '您的登录已失效',
      });
    } else {
      let msg = error.message;
      if (error.response) {
        const { data } = error.response;
        msg = data.message;
      }
      Toast.show({
        icon: 'fail',
        content: msg,
      });
    }
    return Promise.reject(error);
  },
);
export default service;
