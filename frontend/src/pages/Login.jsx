// import React from 'react'

import { useState } from "react"

const Login = () => {
  const [currentState, setcurrentState] = useState('Sign Up')

  const onSubmitHandler = async(event) =>{
    event.preventDefault();
  }
  
   return (
    <form onSubmit={onSubmitHandler()} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prate-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
      {currentState === 'Login' ?'' : <input type="text" className="w-full px-3 py-3 border border-gray-800"placeholder="Name" required/>}
      <input type="email" className="w-full px-3 py-3 border border-gray-800"placeholder="Email" required/>
      <input type="password" className="w-full px-3 py-3 border border-gray-800"placeholder="Password" required/>
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password ?</p>
        {
          currentState == 'Login' ? 
          <p onClick={()=>setcurrentState('Sign Up')}  className="cursor-pointer">Create Account</p>
          : <p onClick={()=>setcurrentState('Login')} className="cursor-pointer">Login Here</p>
        }
      </div>
      <button className="px-8 py-2 mt-4 font-light text-white bg-black">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
