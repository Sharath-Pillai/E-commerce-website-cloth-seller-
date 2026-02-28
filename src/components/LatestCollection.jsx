import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 10);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
          recusandae laboriosam eligendi nostrum dolor omnis doloremque eveniet
          cum . Officiis adipisci, quidem itaque blanditiis cumque fuga culpa
          aperiam, amet veritatis minus, voluptas ratione incidunt iure a!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
