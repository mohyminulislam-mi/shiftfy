import React from "react";
import { Link } from "react-router";

const CoverageArea = () => {
  return (
    <section class="px-5 py-24 md:py-32">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Widespread Coverage Area
          </h2>
          <p class="text-slate-500 text-lg mb-8">
            Serving the entire nation from coast to coast. We have established a
            robust network to reach even the most remote locations.
          </p>
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold">
                DH
              </div>
              <span class="font-semibold text-slate-700">Dhaka</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold">
                KH
              </div>
              <span class="font-semibold text-slate-700">Khulna</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold">
                RG
              </div>
              <span class="font-semibold text-slate-700">Rangpur</span>
            </div>

            <Link
              to="/coverage"
              class="flex items-center gap-3 text-primary font-bold cursor-pointer underline"
            >
              + 497 more cities
            </Link>
          </div>
        </div>
        <div class="relative h-64 md:h-96 bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-inner">
          <img
            alt="Coverage Map"
            class="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGkJyfJ3pSVbanK1_wLx6K8aqTiceAjbtYqeSVkMGTzpkY7YokO6tMXQRpyCWItTcj7yvXjOTs8FU-yf5yofYehNy3zOFszBv2h81ho4_H3RYZ7jXLHnqZsqdY1uBKICo1ru2ODJBeLGnLjTroYoLEN3B0fXlBui7eJJXF_IEqVWt2RwpaydOZx2O4iMg_TPezJAJzvJhGcecRhEj_Y7siL0VKVZicauESHBWPTfTCAyiFPWGbFYrVWoNL5a1iJAqv_MvEabq4bfI"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative">
              <div class="absolute -inset-6 bg-blue-500/20 rounded-full animate-pulse-soft"></div>
              <div class="relative bg-green-600 p-4 rounded-full shadow-2xl">
                <svg
                  class="h-6 w-6 text-white"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg">
            <div class="flex justify-between items-center">
              <div>
                <span class="block text-sm font-bold text-slate-900 leading-none">
                  Nationwide Network
                </span>
                <span class="text-xs text-slate-500">500+ Cities Covered</span>
              </div>
              <span class="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                LIVE TRACKING ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
