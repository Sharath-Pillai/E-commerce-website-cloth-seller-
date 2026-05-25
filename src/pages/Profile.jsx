import React, { useContext } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userData, token, navigate, wishlist, getCartCount } = useContext(ShopContext);

  // Redirect to login if not authenticated
  if (!token) {
    navigate("/login");
    return null;
  }

  if (!userData) {
    return (
      <div className="border-t pt-14 flex justify-center items-center min-h-[40vh]">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const initials = userData.name
    ? userData.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <div className="border-t pt-14 px-4 sm:px-10 pb-20">
      <div className="text-2xl mb-8">
        <Title text1={"My"} text2={"Profile"} />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold select-none shadow-md">
            {initials}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{userData.email}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="border rounded-lg p-5 text-center hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-gray-800">{wishlist.length}</p>
            <p className="text-gray-500 text-sm mt-1">Wishlist Items</p>
          </div>
          <div className="border rounded-lg p-5 text-center hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-gray-800">{getCartCount()}</p>
            <p className="text-gray-500 text-sm mt-1">Cart Items</p>
          </div>
          <div className="border rounded-lg p-5 text-center hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
            <Link to="/orders" className="block">
              <p className="text-3xl font-bold text-gray-800">→</p>
              <p className="text-gray-500 text-sm mt-1">View Orders</p>
            </Link>
          </div>
        </div>

        {/* Account Info */}
        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Account Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-2 border-b">
              <span className="text-gray-500 text-sm w-20">Name</span>
              <span className="text-gray-800 font-medium">{userData.name}</span>
            </div>
            <div className="flex items-center gap-3 py-2">
              <span className="text-gray-500 text-sm w-20">Email</span>
              <span className="text-gray-800 font-medium">{userData.email}</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/orders"
            className="flex items-center justify-between border rounded-lg px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-800">My Orders</p>
              <p className="text-xs text-gray-500">View your order history</p>
            </div>
            <span className="text-gray-400 group-hover:text-gray-800 transition-colors">→</span>
          </Link>
          <Link
            to="/wishlist"
            className="flex items-center justify-between border rounded-lg px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-800">My Wishlist</p>
              <p className="text-xs text-gray-500">{wishlist.length} saved items</p>
            </div>
            <span className="text-gray-400 group-hover:text-gray-800 transition-colors">→</span>
          </Link>
          <Link
            to="/collection"
            className="flex items-center justify-between border rounded-lg px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-800">Shop Now</p>
              <p className="text-xs text-gray-500">Browse all collections</p>
            </div>
            <span className="text-gray-400 group-hover:text-gray-800 transition-colors">→</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center justify-between border rounded-lg px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-800">My Cart</p>
              <p className="text-xs text-gray-500">{getCartCount()} items in cart</p>
            </div>
            <span className="text-gray-400 group-hover:text-gray-800 transition-colors">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
