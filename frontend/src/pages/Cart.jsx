// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
// import PlaceOrder from "./PlaceOrder";

const Cart = () => {
  const {products, currency,cartItems, updateQuantity, navigate} = useContext(ShopContext);
  
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
   const tempData = [];
   for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item] > 0){
        tempData.push({
          _id:items,
          size:item,
          quantity:cartItems[items][item]
        });
      };
    }
   }
   setCartData(tempData);
  }, [cartItems]);
 
  return (
    <div className="border-t pt-14">
      
     <div className="mb-3 text-2xl">
      <Title text1={'Your'} text2={'Cart'}/>
     </div>
     
      <div className="">
        {cartData.map((item, index)=>{
          const productData = products.find(product=> product._id === item._id);
          return(
            <div className="grid items-center py-4 px-4 text-gray-700 border border-t-b grid-cols sm:grid-cols-[4fr_2fr_0.5fr] gap-4" key={index}>
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
             <div>
              <p className="text-xs font-medium sm:text-lg">{productData.name}</p>
              <div className="flex items-center gap-5 mt-2">
                <p className="">{currency}{productData.price}</p>
                <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">{item.size}</p>
              </div>
              </div>
              </div>
              <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity}  className="px-1 py-1 border max-w-20 sm:px-2" />
              <img src={assets.bin_icon} alt=""  className="cursor-pointer" onClick={()=>updateQuantity(item._id, item.size,0)}/>
            </div>
          
          )
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm-w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={()=>navigate('./place-order')}  className="px-8 py-3 my-8 text-sm text-white bg-black">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
