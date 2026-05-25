import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Add from "./Pages/Add";
import { ToastContainer } from "react-toastify";
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import AdminLogin from "./Pages/AdminLogin";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
      ? localStorage.getItem("adminToken")
      : "",
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("adminToken", token);
    } else {
      localStorage.removeItem("adminToken");
    }
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Routes>
        {/* Admin Login Route */}
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/list" replace />
            ) : (
              <AdminLogin setToken={setToken} />
            )
          }
        />

        {/* Protected Admin Routes */}
        {token ? (
          <Route
            path="/*"
            element={
              <>
                <NavBar setToken={setToken} />
                <hr />
                <div className="flex w-full">
                  <SideBar />
                  <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                    <Routes>
                      <Route path="/add" element={<Add token={token} />} />
                      <Route path="/list" element={<List token={token} />} />
                      <Route path="/order" element={<Orders token={token} />} />
                      <Route
                        path="/"
                        element={<Navigate to="/list" replace />}
                      />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
