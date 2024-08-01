import React from 'react'
import Banner from '../component/Banner'
import { Swipercarouselmen } from '../component/Swipercarouselmen'
import Menrecommended from '../component/Menrecommended'
import Menshop from '../component/Menshop'
import Menshoplook from '../component/Menshoplook'
import Promobanner from '../component/Promobanner'; 
import Mentrends from '../component/Mentrends'
import Menbrand from '../component/Menbrand'
import Mendeal from '../component/Mendeal'
const Menpage = () => {
  return (
    <div>
      <Swipercarouselmen/>
      <Mendeal/>
      <Menrecommended/>
      <Menshop/>
      <Menshoplook/>
      <Banner/>
      <Mentrends/>
      <Menbrand/>
      <Promobanner/>
    </div>
  )
}

export default Menpage
