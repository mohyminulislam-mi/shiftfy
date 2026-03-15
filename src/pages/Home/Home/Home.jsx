import React, { Suspense } from "react";
import Hero from "../Hero/Hero";
import HowWorks from "../How it Works/HowWorks";
import OurServices from "../Our Services/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Loading from "../../../Loading/Loading";
import ServiceFeatures from "../ServiceFeatures/ServiceFeatures";
import Merchant from "../Merchant/Merchant";
import FAQ from "../FAQ/FAQ";
import CoverageArea from "./Coverage Area/CoverageArea";
import LiveTracking from "./Live Tracking/LiveTracking";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Hero />
      <LiveTracking />
      <CoverageArea />
      <HowWorks />
      <OurServices />
      <Brands />
      <ServiceFeatures />
      <Merchant />
      <Suspense fallback={<Loading></Loading>}>
        <Reviews reviewsPromise={reviewsPromise} />
      </Suspense>

      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
