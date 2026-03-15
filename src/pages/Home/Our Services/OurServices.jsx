import React from "react";
import { Clock, CreditCard, Map, Truck } from "lucide-react";

const OurServices = () => {
  const ServiceData = [
    {
      id: 1,
      icon: Clock,
      title: "Same Day Delivery",
      description:
        "Need it today? We've got you covered with lightning speed local delivery.",
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Cash on Delivery",
      description:
        "Safe and reliable payment collection for your customers upon arrival.",
    },
    {
      id: 3,
      icon: Truck,
      title: "Nationwide Delivery",
      description:
        "Sending items across the country? Our inter-city network is unmatched.",
    },
    {
      id: 4,
      icon: Map,
      title: "Real-time Tracking",
      description:
        "Always know exactly where your package is with live GPS tracking updates.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-6 py-15">
      <div className="text-center lg:px-52 px-10">
        <h1 className="font-bold text-4xl text-secondary">Our Services</h1>
        <p className="text-gray-400 my-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-center">
        {ServiceData.map((service) => (
          <div
            key={service.id}
            class="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform"
          >
            <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
              <service.icon size={32} />
            </div>
            <h4 class="font-bold text-slate-800 text-lg">{service.title}</h4>
            <p class="mt-2 text-slate-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
