import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transitionId: res.data.transitionId,
            trackinId: res.data.trackinId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1>Payment successful!</h1>
      <p>Your transition-id: {paymentInfo.transitionId} </p>
      <p className="text-green-600">
        Your trackin-id: {paymentInfo.trackinId}{" "}
      </p>
    </div>
  );
};

export default PaymentSuccess;
