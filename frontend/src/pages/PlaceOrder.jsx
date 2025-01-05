// import React from 'react'

import { useContext, useState } from "react"
import { assets } from "../assets/frontend_assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t justify-between">
      {/* Left Side */}
      <div className="flex flex-col gap-4 sm:max-w-[480px]">
        <div className="text-xl sm;text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="First name" />
          <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Last name" />
        </div>
        <input type="email" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Email Address" />
        <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Street" />
        <div className="flex gap-3">
          <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="City" />
          <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input type="number" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Zip Code" />
          <input type="text" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Country" />
        </div>
        <input type="number" className="border-gray-300 py-1.5 w-full px-3.5 border" placeholder="Phone" />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* Text Method Collections */}
          <div  className="flex flex-col gap-3 lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full bg-white ${method === 'stripe' ? 'bg-green-400 ' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className="mx-4 text-sm font-medium text-gray-500 ">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button onClick={()=>navigate('/orders')} className="px-16 py-3 text-sm text-white bg-black">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
