import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
