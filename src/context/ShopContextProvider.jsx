import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import  ShopContext  from "./ShopContext";

const ShopContextProvider = ({children}) => {
  const currency = "$";
  const delivery_fee = 10;
const[search,setSearch]=useState("")
const[showSearch,setShowSearch]=useState(false)

  const data = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch

  };
  return (
    <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
