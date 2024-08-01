import React from 'react'
import Swipercarouselkids from '../component/Swipercarouselkids'
import Kidsrecommended from '../component/Kidsrecommended'
import Kidsshop from '../component/Kidsshop'
import Kidsshoplook from '../component/Kidsshoplook'
import Kidsbanner from '../component/Kidsbanner'
import Kidsstyle from '../component/Kidsstyle'
import Kidsbrandproducts from '../component/Kidsbrandproducts'
import Promobanner from '../component/Promobanner'

const Kids = () => {
  return (
    <div>
      <Swipercarouselkids/>
      <Kidsrecommended/>
      <Kidsshop/>
      <Kidsshoplook/>
      <Kidsbanner/>
      <Kidsstyle/>
      <Kidsbrandproducts/>
      <Promobanner/>
    </div>
  )
}

export default Kids;
