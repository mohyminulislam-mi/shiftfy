import React from "react";
const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-primary text-primary-content py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold italic">ShiftFy</h1>
            <p className="py-6 text-xl">
              Bangladesher protiti prante apnar parcel pouchate amra
              boddho-porikor.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Amader Kotha</h2>
            <p className="text-lg">
              ShiftFy shudhumatro ekta courier service noy, eti apnar ebong
              apnar priyo manusher moddhe ekta shetubondhon. Amra 64 jelay khub
              druto parcel delivery kore thaki. Gram hok ba shohor, ShiftFy
              pouche jabe shobkhane.
            </p>
            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-title">District Covered</div>
                <div className="stat-value text-primary">64</div>
              </div>
              <div className="stat">
                <div className="stat-title">Delivery Agents</div>
                <div className="stat-value text-secondary">5000+</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=800"
              alt="Delivery"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
