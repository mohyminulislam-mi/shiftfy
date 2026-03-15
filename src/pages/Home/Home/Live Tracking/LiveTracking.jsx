import React from "react";

const LiveTracking = () => {
  return (
    <section class="px-5 my-8 relative z-10">
      <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-8 border border-slate-100">
        <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-6 text-center md:text-left">
          Live Tracking
        </h3>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <input
              class="w-full pl-5 pr-12 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400 font-medium"
              placeholder="Enter Tracking Number"
              type="text"
            />
          </div>
          <button class="md:w-48 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer shadow-lg">
            Track Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveTracking;
