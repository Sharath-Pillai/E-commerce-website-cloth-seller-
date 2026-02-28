import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState("");

  const productData = products.find((item) => item._id === productId);

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
          <button onClick={()=>addToCart(productData._id,size)}className="bg-black text-white px-8 py-3 text-sm rounded-md hover:bg-gray-800 transition">
            Add To Cart
          </button>
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quae quia odio totam molestias aperiam maxime eveniet asperiores hic
            assumenda?
          </p>
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
