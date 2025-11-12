import React from "react";
import Hero from "./HomeComponents/Hero";
import Product from "../Products/Product";
import Banner from "../SectionBanner/banner";
import DealProduct from "../Products/DealProduct/DealProduct";
import CardBanner from "../SectionBanner/CardBanner/CardBanner";
import FeaturesSection from "../SectionBanner/FeaturesSection/FeaturesSection";

function Home() {
  return (
    <div>
      <Hero />
      <Product></Product>
      <Banner></Banner>
      <DealProduct></DealProduct>
      <CardBanner></CardBanner>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}

export default Home;
