import { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("Backend URL:", backendUrl);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const addToCart = async (itemId, size) => {
    if (!token) {
      toast.error("Please sign in to add items to your cart");
      navigate("/login");
      return;
    }
    if (!size) {
      toast.error("Please select size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log("error in size", error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      // console.log(products);
      // console.log(items);
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log("error in get cart amount", error);
        }
      }
    }
    return totalAmount;
  };

  const getProductData = async () => {
    try {
      console.log("Fetching products from:", backendUrl + "/api/product/list");
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log("Product response:", response.data);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(backendUrl + "/api/user/data", {
        headers: { token },
      });
      if (response.data.success) {
        setUserData(response.data.user);
        setWishlist(response.data.user.wishlistData || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleWishlist = async (itemId) => {
    if (!token) {
      toast.error("Please sign in to manage your wishlist");
      navigate("/login");
      return;
    }
    let updatedWishlist = [...wishlist];
    const isAdded = updatedWishlist.includes(itemId);

    if (isAdded) {
      updatedWishlist = updatedWishlist.filter((id) => id !== itemId);
      toast.success("Item removed from wishlist");
    } else {
      updatedWishlist.push(itemId);
      toast.success("Item added to wishlist");
    }

    setWishlist(updatedWishlist);

    try {
      const endpoint = isAdded
        ? "/api/user/wishlist/remove"
        : "/api/user/wishlist/add";
      await axios.post(
        backendUrl + endpoint,
        { itemId },
        { headers: { token } },
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserCart(token);
      fetchUserData(token);
    } else {
      setCartItems({});
      setUserData(null);
      setWishlist([]);
    }
  }, [token]);

  const data = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    wishlist,
    toggleWishlist,
    setWishlist,
  };
  return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
