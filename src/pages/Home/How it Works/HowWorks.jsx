import React from "react";
import { TbTruckDelivery, TbCashBanknote, TbBuildingWarehouse, TbBriefcase } from "react-icons/tb";

const HowWorks = () => {
  const WorkData = [
    {
      icon: <TbTruckDelivery className="text-blue-600" />,
      title: "Fast Pick & Drop",
      description:
        "Effortless scheduling for personal or business parcels with real-time pickup updates.",
    },
    {
      icon: <TbCashBanknote className="text-green-600" />,
      title: "Secure COD",
      description:
        "Reliable Cash on Delivery service with instant payment processing and tracking.",
    },
    {
      icon: <TbBuildingWarehouse className="text-orange-600" />,
      title: "Smart Hubs",
      description:
        "Centralized distribution centers ensuring your goods reach the destination faster.",
    },
    {
      icon: <TbBriefcase className="text-purple-600" />,
      title: "SME Solutions",
      description:
        "Tailored logistics and bulk shipment management for corporate and small business growth.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="font-medium uppercase text-sm mb-2">Workflow</h2>
        <h1 className="text-secondary font-extrabold text-4xl">How It's Works</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {WorkData.map((work, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon Container */}
            <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl text-5xl group-hover:scale-110 transition-transform duration-300 mb-6">
              {work.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
              {work.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {work.description}
            </p>

            {/* Step Number Badge */}
            <span className="absolute top-4 right-6 text-gray-100 font-black text-5xl -z-0 group-hover:text-gray-200 transition-colors">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;