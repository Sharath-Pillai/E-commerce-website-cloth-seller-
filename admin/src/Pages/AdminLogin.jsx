import React, { useState } from "react";
import { backendUrl } from "../constants/config";
import axios from "axios";
import { toast } from "react-toastify";

const AdminLogin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userURL = import.meta.env.VITE_FRONTEND_URL;

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Welcome Admin");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg px-8 py-8 max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-gray-500 mt-2">Sign in to manage your store</p>
        </div>
        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              type="email"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          <button
            className="w-full py-3 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition duration-200 font-medium text-lg mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-sm text-center">
          <a
            href={userURL + "/login"}
            className="text-gray-500 hover:text-black underline"
          >
            Go to User Sign-in
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
