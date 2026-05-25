import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import ShopContext from "../context/ShopContext.jsx";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    wishlist,
    userData,
    setWishlist,
  } = useContext(ShopContext);

  const handleLogout = () => {
    localStorage.removeItem("wishlist"); // clear any stale localStorage wishlist data just in case
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setWishlist([]); // clear wishlist state
    navigate("/login");
  };

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="flex items-center justify-between py-5  font-medium">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 ">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {location.pathname === "/collection" ? (
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        ) : (
          ""
        )}

        <div className="group relative flex items-center gap-2">
          {token && userData && (
            <span className="hidden sm:block text-sm text-gray-700 font-medium">
              {userData.name.split(" ")[0]}
            </span>
          )}
          <img
            onClick={() => (token ? navigate("/profile") : navigate("/login"))}
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />

          {/* dropbarmenu */}
          {token && (
            <div className="dropdown-menu group-hover:block  hidden right-0 pt-4 absolute top-5 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/orders")}
                >
                  Orders
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/wishlist" className="relative mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={wishlist.length > 0 ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={wishlist.length > 0 ? "red" : "currentColor"}
            className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {wishlist.length > 0 && (
            <p className="absolute -right-1 -bottom-1 w-3.5 h-3.5 flex items-center justify-center bg-red-500 text-white text-[7px] rounded-full">
              {wishlist.length}
            </p>
          )}
        </Link>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart-icon"
            className="w-5 cursor-pointer min-w-5"
          />
          <p className="absolute right-1.25 bottom-1.25 w-4 text-center bg-black text-white leading-4 text-[8px] rounded-full aspect-square">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* sidebar menu for small screens  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer "
          >
            <img
              src={assets.dropdown_icon}
              alt="back"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
