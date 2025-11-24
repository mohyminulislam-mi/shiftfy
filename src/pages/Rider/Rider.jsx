import React from "react";
import AgentPending from "../../assets/agent-pending.png";
import { useForm } from "react-hook-form";

const districts = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const warehouses = ["Warehouse A", "Warehouse B", "Warehouse C", "Warehouse D"];

const Rider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl text-secondary font-extrabold mb-4">Be a Rider</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
        <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-base-100 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Tell us about yourself
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-semibold">Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Your Age</label>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  placeholder="Your Age"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Your Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Your District</label>
                <select
                  {...register("district")}
                  className="select select-bordered"
                >
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label font-semibold">NID No</label>
                <input
                  type="text"
                  {...register("nid", { required: true })}
                  placeholder="NID"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Contact</label>
                <input
                  type="text"
                  {...register("contact", { required: true })}
                  placeholder="Contact"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control md:col-span-2 ">
                <label className="label font-semibold">
                  Which wire-house you want to work?
                </label>
                <select
                  {...register("warehouse")}
                  className="select select-bordered w-full"
                >
                  {warehouses.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary text-secondary w-full mt-4">
              Submit
            </button>
          </form>
        </div>
        {/* Agent Pending  */}
        <div>
          <img src={AgentPending} />
        </div>
      </div>
    </div>
  );
};

export default Rider;
