import React from 'react'
import womenbannerimg from '../image/womenbanner.jpeg'
import "../component-css/promobanner.css";
const WomenBanner = () => {
  return (
    <div className='container mt-4 mb-5  pt-2 pb-0 promobanner'>
        <img src={womenbannerimg} alt="promobanner" />
    </div>
  )
}

export default WomenBanner


