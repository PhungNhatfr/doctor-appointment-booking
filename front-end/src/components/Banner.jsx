import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
    const navigate = useNavigate()
    
  return (
      <div className='flex flex-row bg-[#5F6FFF] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
          <div className='flex-1 flex-col py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 gap-5'>
              <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>Book Appointment</p>
              <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>With 100+ Trusted Doctors</p>
              <button onClick={() => navigate("/signup")} className='bg-white  px-8 py-3 rounded-3xl mt-6 hover:scale-105 transition-all'>
                <p className='text-sm sm:text-base text-gray-600'>Create Account</p>
              </button>
          </div>
          
          <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img 
                    className='w-full absolute bottom-0 right-0 max-w-md' 
                    src={assets.appointment_img} 
                    alt="doctor_banner" 
                />
            </div>
      </div>
  )
}

export default Banner