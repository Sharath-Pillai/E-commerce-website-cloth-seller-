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
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/searchBar.jsx";
const App = () => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
