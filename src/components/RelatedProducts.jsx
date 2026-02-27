import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory, currentId }) => {
  const { products, currency } = useContext(ShopContext);

  const relatedProductData = [...products]
    .filter(
      (item) =>
        category === item.category &&
        subCategory === item.subCategory &&
        currentId !== item._id,
    )
    .slice(0, 5);

  if (!relatedProductData.length) return null;

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {relatedProductData.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
