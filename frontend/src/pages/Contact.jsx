// import React from 'react'

import { assets } from "../assets/frontend_assets/assets"
import NewLetterBox from "../components/NewLetterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className="flex flex-col justify-center gap-3 my-10 mb-20 md:flex-row">
        <img src={assets.contact_img} alt="w-full md:w-[480px]" className="" />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="font-semibold text-gray-600 text-gray-500text-xl">Our Store</p>
          <p className="text-gray-500">yemi Olabinjo Street <br/>  Abule Egba</p>
          <p className="text-gray-500">0704 7952599 <br /> Email:negpinky@gmail.com</p>
          <p className="font-semibold text-gray-500">careers of Forever</p>
          <p className="text-gray-500">Learn more about our teams and Job Openings</p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white">Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
