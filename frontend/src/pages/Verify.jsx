import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [loading, setLoading] = useState(true);

  const verifyPayment = async () => {
    if (!token || !orderId) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment verification failed.");
      navigate("/cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && orderId) {
      verifyPayment();
    } else {
      setLoading(false);
    }
  }, [token, orderId]);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p className="text-lg font-semibold">Verifying Payment...</p>
      ) : (
        <p className="text-lg font-semibold text-red-500">Verification failed. Redirecting...</p>
      )}
    </div>
  );
};

export default Verify;
