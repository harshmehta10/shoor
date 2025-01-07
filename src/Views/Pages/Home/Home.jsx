import React from "react";
import Hero from "../../../Components/Home/Hero";
import Product from "../../../Components/Home/Product";
import Connect from "../../../Components/Home/Connect";
import Gallery from "../../../Components/Home/Gallery";

const Home = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Hero />
      <Product />
      <Gallery />
      <Connect />
    </div>
  );
};

export default Home;
