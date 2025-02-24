import React from "react";
import Connect from "../../../Components/Home/Connect";
import Specs from "../../../Components/Pdp/Specs";
import Silverkurta from "../../../Components/Pdp/Silverkurta";
import Inspiration from "../../../Components/Pdp/Inspiration";
import Overview from "../../../Components/Pdp/Overview";
import { useParams } from "react-router-dom";
import SaarKurta from "../../../Components/Collection/SaarKurta";
import SimilarProductsCarousel from "../../../Components/Pdp/SimilarProductsCarousel";

const Pdp = ({ kurtaData }) => {
  const { id } = useParams();
  const selectedKurta = kurtaData.find((kurta) => kurta.id === parseInt(id));

  if (!selectedKurta) {
    return <p>Product not found!</p>;
  }
  return (
    <div>
      <Overview {...selectedKurta} />
      <SimilarProductsCarousel />
      <Inspiration />
      <Silverkurta />
      <Specs />
      <Connect />
    </div>
  );
};

export default Pdp;
