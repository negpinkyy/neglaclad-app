// import React from 'react'

import { assets } from "../assets/frontend_assets/assets"

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:text-sm md:text-base">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">7 Days return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We Provide 24/7 Customer Policy</p>
      </div>
    </div>
  )
}

export default OurPolicy
