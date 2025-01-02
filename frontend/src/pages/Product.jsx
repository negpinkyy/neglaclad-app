// import React from 'react'

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {

const {productId} = useParams();
const {products, currency, addToCart} =  useContext(ShopContext);
const [productData, setProductData] = useState(false);
const [image, setImage] = useState('')
const [size, setSize] = useState('')

const fetchProductData = async () =>{

products.map((item)=>{
  if(item._id === productId){
    setProductData(item);
    setImage(item.image[0])
    // console.log(item)
    return null;
  }
})
}

 useEffect(()=>{
fetchProductData();
},[productId])


  return productData ?(
    <div className="transition-opacity ease-in border border-t-2 dueation-500 opacity-1">
      {/* product data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* products images */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex flex-col justify-between w-full overflow-x-auto sm:justify-normal sm:w-[17.8%]">
            {
              productData.image.map((item,index)=>(
                <img src={item}  onClick={()=>setImage(item)} alt="" className="w-[24%] sm:w-full sm:mb-5 flex-shrink-4 cursor-pointer" key={index} />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="min-w-3.5" />
            <img src={assets.star_icon} alt="" className="min-w-3.5" />
            <img src={assets.star_icon} alt="" className="min-w-3.5" />
            <img src={assets.star_icon} alt="" className="min-w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="min-w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-6">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index)=>(
                <button onClick={()=>setSize(item)}  key={index} className={`border py-2 px-4 bg-gray-100 ${item=== size ? 'border border-orange-500' : ''} `}>{item}</button>
                ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="px-8 py-3 text-sm text-white bg-black active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p className="">100% original Product</p>
            <p className="">Cash on delivery is available on this product</p>
            <p className="">Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div className="mt-20">
        <div className="flex ">
          <p className="px-5 py-3 text-sm border">Description </p>
          <p className="px-5 py-3 text-sm border">Reviews (122) </p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border ">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam minus neque nesciunt, eius blanditiis vel dolorum quaerat nobis deleniti.</p>
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, tempore!</p>
        </div>
      </div>
      {/* related products section */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):<div className="opacity-0"></div>

}

export default Product
