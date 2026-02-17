import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  
  const navigate = useNavigate();
  
  return (
      <div className=" w-ful flex flex-row justify-center mb-20">
      <div className=" text-gray-700 flex flex-col gap-4 border border-gray-100 shadow-md shadow-gray-300 rounded-xl sm:w-1/3 mt-20 mb-10">
        <div className="flex flex-col mt-8 ml-8 gap-5">
          <p className="text-2xl font-bold">Login</p>
          <p className="text-sm ">Please login to book appointment</p>
        </div>
        
        <form className="flex flex-col gap-3 mt-3 ml-8 mr-8">
          
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" >Email</label>
            <input className=" pl-3 border border-gray-500 rounded-md h-10" type="email"  />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" >Password</label>
            <input className=" pl-3 border border-gray-500 rounded-md h-10" type="password"  />
          </div>
          
          <button className=" mt-3 border bg-[#5F6FFF] h-10 rounded-md text-sm text-white cursor-pointer">Create Account</button>
        </form>
        
        <div className="flex flex-row gap-1 text-sm ml-8 mt-3 mb-8">
          <p>Create a new account?</p>
          <p onClick={ () => navigate("/signup")} className="underline text-[#5F6FFF] cursor-pointer">Click here</p>
        </div>
      </div>
    </div>
  )
}

export default LogIn