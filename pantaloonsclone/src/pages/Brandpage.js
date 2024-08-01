import React from 'react'
import Brand from '../component/Brand'
import { Cardcollection } from '../component/Cardcollection'
import Cardcollectionnew from '../component/Cardcollectionnew'
import Menshoplook from '../component/Menshoplook'
import Womenshoplook from '../component/Womenshoplook'
import Recommend from '../component/Recommend'
import Promobanner from '../component/Promobanner'

const Brandpage = () => {
  return (
    <div>
      <Brand/>
      <Cardcollectionnew/>
      <Menshoplook/>
      <Cardcollection/>
      <Recommend/>
      <Womenshoplook/>
      <Promobanner/>
    </div>
  )
}

export default Brandpage
