import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut illum
            earum quia unde eligendi laudantium tempore ex quae blanditiis
            repellendus!
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul>
                <li>+1-234-567-890</li>
                <li>contact@example.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-sm py-6">© 2024 E-commerce Website All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
