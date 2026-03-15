import React from "react";
import Rider from "../../assets/authImage.png";
const About = () => {
  return (
    <section class="px-5 pt-16 pb-24 md:pt-24 md:pb-32 ">
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
      <div class="max-w-7xl mx-auto">
        <div class="text-center my-20">
          <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why ShiftFy
          </h2>
          <p class="text-slate-500 text-lg">
            We prioritize your peace of mind with our core strengths
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1  */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg
                class="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <h4 class="font-bold text-xl text-slate-900 mb-3">
              Lightning Fast
            </h4>
            <p class="text-slate-500 leading-relaxed">
              Optimized routing ensures your package arrives in record time
              across any distance.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <svg
                class="h-8 w-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <h4 class="font-bold text-xl text-slate-900 mb-3">
              Secure Handling
            </h4>
            <p class="text-slate-500 leading-relaxed">
              Every parcel is treated with care and fully insured against any
              loss or damage during transit.
            </p>
          </div>
          {/* Feature Card 3  */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg
                class="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M8 3.935A9 9 0 0116.5 11.082M16.5 11.082A9 9 0 0115.598 18M8 3.935A9 9 0 003.055 11"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <h4 class="font-bold text-xl text-slate-900 mb-3">
              Nationwide Reach
            </h4>
            <p class="text-slate-500 leading-relaxed">
              From bustling metro cities to remote villages, we deliver
              everywhere you need to go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
