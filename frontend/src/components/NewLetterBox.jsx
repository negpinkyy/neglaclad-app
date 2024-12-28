// import React from 'react'


const NewLetterBox = () => {
    const submitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className="text-center ">
        <p className="text-2xl font-medium text-gray-800"> Describe now $ get 20% off</p>
      <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet.</p>
      <form onSubmit={submitHandler} action="" className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2">
        <input type="email " className="w-full outline-none sm:flex-1 " placeholder="Enter Your Email" required/>
        <button className="px-10 py-4 text-xs text-white bg-black" type="submit">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewLetterBox
