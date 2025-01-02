// import React from 'react'

import { useState,  useContext, useEffect } from "react"
import {ShopContext} from "../context/ShopContext"
import { assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";




const Collection = () => {
const {products, search, showSearch} = useContext(ShopContext)
const [showFilter, setShowFilter] = useState(false)
const [filterProducts, setFilterProducts] = useState([])
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [sortType, setSortType] = useState('relavant');

const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
    // Filter by category
    setCategory(prev=>prev.filter(item=>item !==e.target.value))

  }
  else{
    // Add category
    setCategory(prev =>[...prev, e.target.value])

   }
}

const toggleSubCategory = (e) => {
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev, e.target.value])
  }
}


const applyFilter = ()=>{
  let productsCopy =  products.slice();
  if(search && showSearch){
    productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }
  
  if(category.length >0){
    productsCopy = productsCopy.filter(item=>category.includes(item.category))
  }
  if(subCategory.length >0){
    productsCopy = productsCopy.filter(item =>subCategory.includes(item.subCategory))
  }
  setFilterProducts(productsCopy)
}

const sortProducts = () =>{
  // Sort by price
  let fpCopy =  filterProducts.slice();
  switch(sortType){
    case "low-high":
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break;
      
    case "high-low":
      setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
      break;
      
    default: 
    applyFilter();
    break;


    
  }

}
useEffect(()=>{
  sortProducts();
  
},[sortType])


useEffect(() =>{
  applyFilter()
},[category, subCategory,search, showSearch])

// useEffect(() => {
//   setFilterProducts(products)
// },[])
 
  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10">
      {/* Filter Options */}
      
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter )} className="flex items-center gap-2 my-2 text-xl cursor-pointer">FILTERS
        <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' :''}`} />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'Women'} onChange={toggleCategory}/>Woman
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
      {/* Sub Categoris filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3"  value={'winterwear'} onChange={toggleSubCategory}/>winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <Title text1={'All'} text2={'Collections'} />
        {/* Products sort */}
        <select onChange={(e)=>setSortType(e.target.value)} className="px-2 text-sm border-gray-300">
          <option value="relavant" className="">Sort by: Relavant</option>
          <option value="low-high" className="">Sort by: Low to High</option>
          <option value="high-low" className="">Sort by: High to low</option>
        </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 ">
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
