import React, { useContext } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { products, wishlist, toggleWishlist, currency } = useContext(ShopContext);

  // Filter products that are in the wishlist
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product._id)
  );

  return (
    <div className="border-t pt-14 px-4 sm:px-10">
      <div className="text-2xl mb-6">
        <Title text1={"My"} text2={"Wishlist"} />
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-gray-300 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="text-gray-500 text-lg font-medium">
            Your wishlist is empty.
          </p>
          <p className="text-gray-400 text-sm mt-1 max-w-xs">
            Save items that you like to find them easily here later!
          </p>
          <Link
            to="/collection"
            className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded shadow hover:bg-gray-800 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8">
          {wishlistProducts.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border border-gray-100 p-3 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="relative overflow-hidden rounded bg-gray-50 aspect-square">
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      src={item.image[0]}
                      alt={item.name}
                    />
                  </Link>
                  <button
                    onClick={() => toggleWishlist(item._id)}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-white rounded-full text-red-500 shadow-sm transition-colors"
                    title="Remove from Wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </div>
                <Link to={`/product/${item._id}`}>
                  <h3 className="text-gray-700 text-sm font-medium mt-3 line-clamp-1 group-hover:text-black transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-gray-900 text-sm font-semibold mt-1">
                  {currency}
                  {item.price}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  to={`/product/${item._id}`}
                  className="block text-center w-full py-2 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-gray-800 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
