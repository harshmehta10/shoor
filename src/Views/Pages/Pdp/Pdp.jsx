import React from "react";
import Connect from "../../../Components/Home/Connect";
import Specs from "../../../Components/Pdp/Specs";
import Silverkurta from "../../../Components/Pdp/Silverkurta";
import Inspiration from "../../../Components/Pdp/Inspiration";
import Overview from "../../../Components/Pdp/Overview";

const Pdp = () => {
  return (
    <div>
      <Overview />
      <Inspiration />
      <Silverkurta />
      <Specs />
      <Connect />
    </div>
  );
};

export default Pdp;
