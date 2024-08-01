import React from 'react'
// import { Cardcollection } from '../component/Cardcollection'
// import Cardcollectionnew from '../component/Cardcollectionnew'
import Promobanner from '../component/Promobanner';
import { Swipercarouselwomen } from '../component/Swipercarouselwomen';
import Recommend from '../component/Recommend';
import Womenshop from '../component/Womenshop';
import Womenshoplook from '../component/Womenshoplook';
import WomenBanner from '../component/Womenbanner';
import Womentrends from '../component/Womentrends';
import Womenbrand from '../component/Womenbrand';
import Womendeal from '../component/Womendeal';
const Womenpage = () => {
  return (
    <div>
      <Swipercarouselwomen/>
      <Womendeal/>
      <Recommend/>
      <Womenshop/>
      <Womenshoplook/>
      <WomenBanner/>
      <Womentrends/>
      <Womenbrand/>
      <Promobanner/>
    </div>
  )
}

export default Womenpage
