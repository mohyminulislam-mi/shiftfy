import React from "react";

const HowWorks = () => {
  return (
    <section class="px-5 py-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How it Works
          </h2>
          <p class="text-slate-500 text-lg">
            Shipping simplified in 3 easy steps
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-12 relative">
          <div class="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-blue-100 -z-10"></div>
          {/* Step 1  */}
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl shadow-blue-200 mx-auto mb-8 ring-8 ring-white">
              1
            </div>
            <h4 class="font-bold text-slate-900 text-xl mb-4">
              Book your Parcel
            </h4>
            <p class="text-slate-500 leading-relaxed max-w-xs mx-auto">
              Fill in the details of your parcel and pickup location via our app
              or website in minutes.
            </p>
          </div>
          {/* Step 2  */}
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl shadow-blue-200 mx-auto mb-8 ring-8 ring-white">
              2
            </div>
            <h4 class="font-bold text-slate-900 text-xl mb-4">We Pickup</h4>
            <p class="text-slate-500 leading-relaxed max-w-xs mx-auto">
              Our agent arrives at your doorstep to pick up the item at your
              preferred time window.
            </p>
          </div>
          {/* Step 3  */}
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl shadow-blue-200 mx-auto mb-8 ring-8 ring-white">
              3
            </div>
            <h4 class="font-bold text-slate-900 text-xl mb-4">
              Track &amp; Deliver
            </h4>
            <p class="text-slate-500 leading-relaxed max-w-xs mx-auto">
              Track your parcel in real-time until it reaches its destination
              safely and securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
