// import React from 'react'

import { assets } from "../assets/frontend_assets/assets"
import NewLetterBox from "../components/NewLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div >
      <div className="pt-8 text-2xl text-center border-t">
      <Title  text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex-col justify-center gap-6 text-gray-600 md:w-2/4">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti, animi accusamus eaque explicabo consectetur magnam minima dignissimos modi similique.</p>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quasi odit maiores autem minus voluptates a culpa harum eum aliquid sit recusandae ab natus eveniet!</p>
        <b className="text-gray-800">Our Mission</b>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus in cupiditate eius culpa. Ex qui quisquam ipsam dicta eaque nulla provident blanditiis. Ratione repellat nostrum, ipsa cumque illum rem.</p>
        </div>
        </div>
        <div className="py-4 text-4xl">
          <Title text1={'WAY'} text2={'CHOOSE US'}/>
        </div>
        <div className="flex flex-col mb-20 text-sm md:flex-row">
          <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
            <b className="">Quality Assurance</b>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis voluptas veniam iusto nam reiciendis mollitia doloribus officiis magni, quae praesentium provident sapiente a iure nisi, minus consequuntur nostrum eius.</p>
          </div>
          <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
            <b className="">Convenience</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis voluptas veniam iusto nam reiciendis mollitia doloribus officiis magni, quae praesentium provident sapiente a iure nisi, minus consequuntur nostrum eius.</p>
          </div>
          <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
            <b className="text-gray-600">Exceptional Customer Service</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis voluptas veniam iusto nam reiciendis mollitia doloribus officiis magni, quae praesentium provident sapiente a iure nisi, minus consequuntur nostrum eius.</p>
          </div>
        </div>
        <NewLetterBox />
     
    </div>
    
  )
}

export default About
