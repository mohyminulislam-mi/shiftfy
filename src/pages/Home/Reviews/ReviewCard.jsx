import React from "react";
import {  FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm p-6 max-w-xl">
        {/* Quote */}
        <blockquote className="relative">
          <FaQuoteRight
            aria-hidden="true"
            className="text-[#C3DFE2] absolute -top-1 -left-1 h-6 w-6"
          />
        </blockquote>{" "}
        <br />
        <p className="text-base leading-relaxed text-secondary mt-5">
          {review.review}
        </p>
        {/* Divider */}
        <div className="divider my-4"></div>
        {/* Author */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center text-white">
            <img
              src={review.user_photoURL}
              className="h-15 w-15 rounded-full"
            />
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900">{review.userName}</p>
            <p className="text-sm text-slate-600">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
