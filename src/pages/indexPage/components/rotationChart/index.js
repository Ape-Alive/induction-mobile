import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import './index.css'

export default function Rotation() {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='content'
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))

  return (
    /* 循环播放 */
    
    <Swiper autoplay loop  style={{
      '--border-radius': '8px 8px 0px 0px',
    }}>{items}</Swiper>
   
  )
}
