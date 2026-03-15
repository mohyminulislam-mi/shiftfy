import React from "react";
import Rider from "../../assets/authImage.png";
const About = () => {
  return (
    <section
      class="px-5 pt-16 pb-24 md:pt-24 md:pb-32 "
      data-purpose="hero-section"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
            Trusted by 10,000+ Customers
          </span>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Fast delivery, <br />
            <span class="text-blue-600">Same day delivery</span>
          </h1>
          <p class="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
            Reliable logistics solutions for individuals and businesses. We move
            your parcels across the nation with lightning speed.
          </p>
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-title">District Covered</div>
              <div className="stat-value text-secondary">64</div>
            </div>
            <div className="stat">
              <div className="stat-title">Delivery Agents</div>
              <div className="stat-value text-secondary">5000+</div>
            </div>
          </div>
        </div>
        <div class="hidden md:block relative">
          <img src={Rider} alt="Rider Image" />
        </div>
      </div>
    </section>
  );
};

export default About;
