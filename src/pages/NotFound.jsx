import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative">
        <h1 className="text-9xl font-black text-gray-200 select-none tracking-widest">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800 uppercase tracking-wider">
          Page Not Found
        </p>
      </div>
      <p className="text-gray-500 mt-6 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors shadow-lg active:scale-95 transform duration-150"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
