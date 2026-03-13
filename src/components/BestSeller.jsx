import { useContext } from 'react'
import ShopContext from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import ProductItem from './ProductItem.jsx'

const BestSeller = () => {

const {products}=useContext(ShopContext)
const bestSeller=products.filter((item)=>item.bestSeller===true).slice(0,5)
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
          recusandae laboriosam eligendi nostrum dolor omnis doloremque eveniet
          cum . Officiis adipisci, quidem itaque blanditiis cumque fuga culpa
          aperiam, amet veritatis minus, voluptas ratione incidunt iure a!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestSeller