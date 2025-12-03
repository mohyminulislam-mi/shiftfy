import { useState } from "react";
import { Link } from "react-router";
import ParcelDetails from "./ParcelDetails";

const parcels = [
  {
    name: "Shakil",
    bnName: "শাকিল",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "01773689877",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "",
    bnName: "",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "Anika",
    bnName: "আনিকা",
    address: "ডিউটিপাড়া, সাভার, ঢাকা",
    phone: "01987654321",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "",
    bnName: "",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "Rameez",
    bnName: "রামিজ",
    address: "কুমিল্লা, ঢাকা",
    phone: "01823456789",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
];

export default function PaymentHistory() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">Parcel Info</th>
              <th className="px-4 py-2 text-left">Recipient Info</th>
              <th className="px-4 py-2 text-left">Tracking Number</th>
              <th className="px-4 py-2 text-left">Payment Info</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {parcels.map((parcel, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-3">Liquid Cleanser</td>
                <td className="px-4 py-3 whitespace-pre-line">
                  {parcel.name && (
                    <span className="font-medium">{parcel.name}</span>
                  )}
                  {parcel.bnName && <div>{parcel.bnName}</div>}
                  <div>{parcel.address}</div>
                  {parcel.phone && <div>{parcel.phone}</div>}
                </td>
                <td className="px-4 py-3">{parcel.tracking}</td>
                <td className="px-4 py-3">
                  {parcel.amount}{" "}
                  <span className="text-green-600">({parcel.status})</span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setOpen(true)}
                    className="btn btn-primary text-black"
                  >
                    View
                  </button>
                </td>
                {open && (
                  <ParcelDetails closeModal={() => setOpen(false)}  />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
