import React, { useEffect } from "react";

const RelatedProducts = ({ category, subCategory }) => {
  const { produts } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (produts.length > 0) {
      let productcopy = produts.slice();
      productcopy = productcopy.filter((item) => category === item.category);
      productcopy = productcopy.filter(
        (item) => subCategory === item.subCategory,
      );
      setRelated(productcopy.slice(0, 5));
    }
  }, [produts]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
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
