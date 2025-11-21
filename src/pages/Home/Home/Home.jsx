import React from "react";
import Hero from "../Hero/Hero";
import HowWorks from "../How it Works/HowWorks";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="my-15"><HowWorks /></div>
    </div>
  );
};

export default Home;
