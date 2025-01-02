// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const { search,setSearch, showSearch,setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        if(location.pathname.includes('collection') ){
            setVisible(true)
        }
        else{
          setVisible(false)
        }
    },[location]);
  return showSearch  && visible ? (
    <div className="text-center border border-t-b bg-gray-50">
      <div className="inline-flex items-center justify-center w-3/4 px-5 py-2 mx-3 my-5 border border-gray-400 rounded-fu ll sm:w-1/2">
        <input type="text" placeholder="Seaarch"  value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 text-sm outline-none bg-inherit" />
        <img src={assets.search_icon} alt="" className="" />
      </div>
      <img src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer" onClick={()=>setShowSearch(false)}/>
      
    </div>
  ):null
}

export default SearchBar
