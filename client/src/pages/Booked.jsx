import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [showTick, setShowTick] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const paymentNumber = searchParams.get("paymentNumber");
    const bookingDate = searchParams.get("bookingDate");
    const doctorName = searchParams.get("doctorName");

    if (paymentNumber && bookingDate && doctorName) {
      setPaymentData({ paymentNumber, bookingDate, doctorName });

      const timer = setTimeout(() => {
        setShowTick(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setError("Missing required parameters in URL.");
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const formattedDate = new Date(paymentData.bookingDate).toLocaleDateString();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          {showTick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-green-500 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-4">
            Appointment booked on date: {formattedDate} with{" "}
            <span className="font-bold"> {paymentData.doctorName}.</span>
          </p>
          <p className="text-gray-600">
            Payment Number: {paymentData.paymentNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
