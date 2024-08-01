import React from "react";
import Beautyslider from "../component/Beautyslider";
import Cardcollectiontrend from "../component/Cardcollectiontrend";
import { Cardcollection } from "../component/Cardcollection";
import Menshop from "../component/Menshop";
import Recommend from "../component/Recommend";
import Promobanner from "../component/Promobanner";
import Menshoplook from "../component/Menshoplook";
const Beauty = () => {
  return (
    <div>
      <Beautyslider />
      <Recommend />
      <Menshop />
      <Cardcollection />
      <Menshoplook/>
      <Cardcollectiontrend />
      <Promobanner/>
    </div>
  );
};

export default Beauty;
