import React from "react";
import HeroCollect from "../../../Components/Collection/HeroCollect";
import SaarKurta from "../../../Components/Collection/SaarKurta";
import SaarBluekurta from "../../../Components/Collection/SaarBluekurta";
import Handcrafted from "../../../Components/Collection/Handcrafted";
import Summercollection from "../../../Components/Collection/Summercollection";

const Collection = () => {
  return (
    <div>
      <HeroCollect />
      <Summercollection />
      <Handcrafted />
      <SaarBluekurta />
      <SaarKurta />
    </div>
  );
};

export default Collection;
