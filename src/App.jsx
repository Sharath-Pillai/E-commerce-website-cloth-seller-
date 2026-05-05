import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Collection from "./pages/Collection.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Product from "./pages/Product.jsx";
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify.jsx";
import Chatbot from "./components/Chatbot.jsx";


const App = () => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8">
      <ToastContainer />
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
        <Route path="/verify" element={<Verify />} />
      </Routes>
    <div>
      <Chatbot />
    </div>
    </div>

  );
};

export default App;
