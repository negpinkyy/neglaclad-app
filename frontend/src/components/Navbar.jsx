// import React from 'react'
import { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible]=  useState(false)
    const {setShowSearch, getCartCount }=  useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
      <img src={assets.logo} alt=""  className="w-36"/>
      </Link>
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink  to="/" class="flex flex-col items-center  gap-1">
            <p className="">HOME</p>
            <hr className="w-2/4 border-none  h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink  to="/collection" class="flex justify-center flex-col items-center gap-1">
            <p className="">COLLECTIONS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink  to="/about" class="flex flex-col justify-center items-center gap-1">
            <p className="">ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink  to="/contact" class="flex flex-col justify-center items-center gap-1">
            <p className="">CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className="relative group">
            <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
            <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
                <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p className="cursor-pointer hover:text-black">Orders</p>
                    <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
            </div>
        </div>
        <Link to="/cart" className="relative">
        <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img  onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden " />
      </div>
      {/* Side bar Menu for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible  ? 'w-full': 'w-0'} `}>
   <div className="flex flex-col text-gray-500">
    <div onClick={()=>setVisible(false)}  className="flex items-center gap-4 p-3 cursor-pointer">
      <img  src={assets.dropdown_icon} alt="" className="h-5 rotate-180" />
      <p className="">back</p>
    </div>
    <NavLink to='/' className="py-2 pl-6 border" onClick={()=>setVisible(false)} > Home</NavLink>
    <NavLink to='/collectin' className="py-2 pl-6 border" onClick={()=>setVisible(false)}> Collection</NavLink>
    <NavLink to='/about' className="py-2 pl-6 border" onClick={()=>setVisible(false)}> About</NavLink>
    <NavLink to='/contact' className="py-2 pl-6 border" onClick={()=>setVisible(false)}> Contact</NavLink>
   
   </div>
    </div>
    </div>
  )
}

export default Navbar
