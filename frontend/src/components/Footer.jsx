// import React from 'react'
import  {Link} from 'react-router-dom'
import { assets } from "../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
<Link to={'/'}>          <img src={assets.logo} alt="" className="w-32 mb-5" /></Link>
<p className="w-full text-gray-600 md:w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nobis aperiam sequi libero quas obcaecati eligendi distinctio commodi similique laudantium </p>
        </div>
        <div className="">
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
           
          </ul>
      
        </div>
        <div className="">
          <p className="mb-5 text-xl font-medium uppercase">  Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600"></ul>
          <li className="">+234 7047952599</li>
          <li className="">negpinky@gmail.com</li>
        </div>
      </div>
      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">copyright 2024@ neglaclad.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
