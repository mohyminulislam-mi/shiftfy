import React from "react";
import Hero from "../Hero/Hero";
import HowWorks from "../How it Works/HowWorks";
import OurServices from "../Our Services/OurServices";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="my-15"><HowWorks /></div>
      <div className="py-8 bg-secondary rounded-2xl"><OurServices /></div>
      <div className="my-15"><Brands /></div>
    </div>
  );
};

export default Home;
