import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import 'antd-mobile/dist/antd-mobile'
import 'antd/dist/antd.css';
import '@/assets/font_home1/iconfont.css'
import '@/assets/font_home2/iconfont.css'
import {StoreProvider} from '@/store/StoreContext'

ReactDOM.render(
<StoreProvider>
  <App/>
</StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
