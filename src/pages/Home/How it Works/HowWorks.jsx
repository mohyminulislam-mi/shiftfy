import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowWorks = () => {
  const WorkData = [
    {
      icon: <TbTruckDelivery />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <h1 className="text-secondary font-bold text-2xl">How it Works</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-6 items-center ">
        {WorkData.map((work, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-xl p-4.5">
            <span className="text-4xl">{work.icon}</span>
            <h1 className="my-4 font-bold">{work.title}</h1>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
