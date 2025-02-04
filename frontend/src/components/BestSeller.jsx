import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from './Title';
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const {products} =  useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // console.log("Products:", products);
        const bestProduct = products.filter((item)=>(item.bestseller))
        // console.log("Filtered products:", bestProduct);
        setBestSeller(bestProduct.slice(0, 5));
    },[products]);
    
  return (
    <div className="my-10">
        <div className="py-8 text-3xl text-center">
            <Title  text1={'BEST'} text2={'SELLERS'}/>
            <p className="w-3/4 m-auto text-xs text-gray-700 md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, earum.
            </p>
        </div>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {
            bestSeller.map((item, index)=>{
               return <ProductItem  
                key={index}
                id={item._id}
                name ={item.name}
                image ={item.image}
                price={item.price}
                />
})
        }
      </div>
    </div>
  )
}

export default BestSeller
