import React, { useCallback, useState } from "react";
import { Swipercarousel } from "../component/Swipercarousel";
import { Cardcollection } from "../component/Cardcollection";
import Cardcollectionnew from "../component/Cardcollectionnew";
import Cardcollectiontrend from "../component/Cardcollectiontrend";
import Womenshoplook from "../component/Womenshoplook";
import Grid from "../component/Grid";
import Brand from "../component/Brand";
import Video from "../component/Video";
import Promobanner from "../component/Promobanner";
import Giftcard from "../component/Giftcard";
import Greencard from "../component/Greencard";
import Bestseller from "../component/Bestseller";
const Home = () => {
  return (
    <div>
      <Swipercarousel />
      <Cardcollection />
      <Cardcollectionnew />
      <Cardcollectiontrend />
      <Womenshoplook />
      <Bestseller />
      <Grid />
      <Brand />
      <Video />
      <Giftcard />
      <Greencard />
      <Promobanner />
    </div>
  );
};

export default Home;
