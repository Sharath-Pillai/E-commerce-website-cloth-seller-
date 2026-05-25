import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts.jsx";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, toggleWishlist, wishlist, navigate, token } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState("");

  const productData = products.find((item) => item._id === productId);

  const handleBuyNow = () => {
    if (!token) {
      toast.error("Please sign in to purchase");
      navigate("/login");
      return;
    }
    if (!size) {
      toast.error("Please select size");
      return;
    }
    navigate("/place-order", {
      state: {
        buyNowItem: {
          _id: productData._id,
          size: size,
          quantity: 1,
        }
      }
    });
  };

  if (!productData) {
    return <div className="opacity-50 pt-10 text-center">Not Found.....</div>;
  }

  const displayImage = selectedImage || productData.image?.[0];
  return (
    <div className="border-t pt-10 px-4 sm:px-10 transition-opacity duration-500">
      {/* Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Images Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setSelectedImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                alt="image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={displayImage} alt="product" />
          </div>
        </div>
        {/* product info  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col my-8 gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border px-4 py-2 ${
                    item === size
                      ? "border-orange-500 bg-orange-50"
                      : "bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm rounded-md hover:bg-gray-800 transition">
              Add To Cart
            </button>
            <button onClick={handleBuyNow} className="bg-orange-600 text-white px-8 py-3 text-sm rounded-md hover:bg-orange-700 transition">
              Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(productData._id)}
              className="p-3 border rounded-md hover:bg-gray-50 transition"
              title={wishlist.includes(productData._id) ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={wishlist.includes(productData._id) ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={wishlist.includes(productData._id) ? "red" : "currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is avilable on this product</p>
            <p>Easy return and exchange policy with 7 days.</p>
          </div>
        </div>
      </div>
      {/* description & review Section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{productData.description}</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentId={productData._id}
      />
    </div>
  );
};

export default Product;
