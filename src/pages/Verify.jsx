import { useContext, useEffect } from "react";
import ShopContext from "../context/ShopContext";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  // console.log(token)
  console.log(backendUrl)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const VerifyPayment = async () => {
      const success = searchParams.get("success");
      const orderId = searchParams.get("orderId");

      if (!success || !orderId) {
        toast.error("Invalid payment link");
        navigate("/cart");
        return;
      }

      try {
        // Get token from context or localStorage
        const authToken = token || localStorage.getItem("token");

        if (!authToken) {
          console.log("No token found");
          toast.error("Please login again");
          navigate("/login");
          return;
        }

        console.log("Verifying payment with:", {
          success,
          orderId,
          token: authToken,
        });
        const response = await axios.post(
          backendUrl + "/api/order/verifyStripe",
          {
            success,
            orderId,
          },
          { headers: { token: authToken } },
        );

        console.log("Verification response:", response.data);

        if (response.data.success) {
          setCartItems({});
          toast.success("Payment Successful!");
          navigate("/orders");
        } else {
          toast.error("Payment verification failed");
          navigate("/cart");
        }
      } catch (error) {
        console.error("Verify error:", error);
        toast.error(error.message || "Verification failed");
        navigate("/cart");
      }
    };

    VerifyPayment();
  }, [searchParams, navigate, setCartItems, backendUrl]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Verifying payment...</p>
    </div>
  );
};

export default Verify;
