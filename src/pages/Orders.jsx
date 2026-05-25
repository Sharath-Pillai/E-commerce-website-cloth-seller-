import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title.jsx";
import ShopContext from "../context/ShopContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderedData, setOrderedData] = useState([]);
  const [visibleTracker, setVisibleTracker] = useState(null);

  const steps = [
    "Order Placed",
    "Packing",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  const getStepIndex = (status) => {
    const cleanedStatus = (status || "").trim().toLowerCase();
    if (cleanedStatus === "order placed") return 0;
    if (cleanedStatus === "packing") return 1;
    if (cleanedStatus === "shipped") return 2;
    if (cleanedStatus === "out for delivery") return 3;
    if (cleanedStatus === "delivered") return 4;
    return 0;
  };

  const toggleTracker = (index) => {
    if (visibleTracker === index) {
      setVisibleTracker(null);
    } else {
      setVisibleTracker(index);
      loadOrderedData();
    }
  };

  const loadOrderedData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } },
      );
      // console.log(response)
      if (response.data.success) {
        const allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            item["orderId"] = order._id;
            allOrdersItem.push(item);
          });
        });
        console.log(allOrdersItem);

        setOrderedData(allOrdersItem.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderedData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Orders"} />
      </div>

      <div>
        {orderedData.map((item, index) => (
          <div
            key={index}
            className="py-6 border-b border-t text-gray-700 flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1">
                    Payment:{" "}
                    <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
                <button
                  onClick={() => toggleTracker(index)}
                  className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50 active:scale-95 transition-all duration-150"
                >
                  {visibleTracker === index ? "Hide Tracking" : "Track Order"}
                </button>
              </div>
            </div>

            {visibleTracker === index && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-100 transition-all duration-300 w-full">
                <p className="text-sm font-semibold text-gray-800 mb-6">
                  Order Status Timeline
                </p>

                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-2 relative">
                  {steps.map((step, sIdx) => {
                    const currentStep = getStepIndex(item.status);
                    const isCompleted = sIdx <= currentStep;
                    const isCurrent = sIdx === currentStep;

                    return (
                      <div
                        key={sIdx}
                        className="flex flex-1 flex-row md:flex-col items-center md:items-center relative w-full md:w-auto"
                      >
                        {/* Horizontal Connector Line for Desktop */}
                        {sIdx < steps.length - 1 && (
                          <div
                            className={`hidden md:block absolute top-3.75 left-[50%] right-[-50%] h-0.75 z-0 ${
                              sIdx < currentStep
                                ? "bg-green-500"
                                : "bg-gray-200"
                            }`}
                          />
                        )}
                        {/* Vertical Connector Line for Mobile */}
                        {sIdx < steps.length - 1 && (
                          <div
                            className={`md:hidden absolute left-3.75 top-8 bottom-8 w-0.75 z-0 ${
                              sIdx < currentStep
                                ? "bg-green-500"
                                : "bg-gray-200"
                            }`}
                          />
                        )}

                        {/* Step circle */}
                        <div
                          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                            isCompleted
                              ? "bg-green-500 border-green-500 text-white"
                              : "bg-white border-gray-300 text-gray-400"
                          } ${isCurrent ? "ring-4 ring-green-100 scale-110" : ""}`}
                        >
                          {isCompleted ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
                            <span className="text-xs font-semibold">
                              {sIdx + 1}
                            </span>
                          )}
                        </div>

                        {/* Step Label */}
                        <div className="ml-4 md:ml-0 md:mt-2 text-left md:text-center flex flex-col items-start md:items-center">
                          <span
                            className={`text-xs font-semibold ${isCompleted ? "text-green-600" : "text-gray-500"}`}
                          >
                            {step}
                          </span>
                          {isCurrent && (
                            <span className="text-[9px] text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded-full mt-0.5">
                              Current Status
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
