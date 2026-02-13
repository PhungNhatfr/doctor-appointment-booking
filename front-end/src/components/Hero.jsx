import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const Hero = () => {
  return (
      <div className='flex flex-row  text-sm rounded-lg bg-[#5F6FFF] items-center'>
          <div className='flex flex-col px-8 py-16'>
              <h2 className='text-3xl text-white'>Book Appointment With Trusted Doctors</h2>
              
              <div className='flex flex-row gap-3 items-center py-4'>
                  <img className='w-20' src={assets.group_profiles} alt="group-profiles" />
                  <p className='text-sm text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
              </div>
              
              <NavLink to='/appointment' className='flex items-center rounded-full bg-white w-1/2 hover:bg-gray-200'>
                  <p className='text-black px-4 py-2 text-sm'>Book appointment</p>
                  <img className='w-3' src={assets.arrow_icon} alt="arrow-icon"  />
              </NavLink>
          </div>
          
          <img className='w-auto' src={assets.header_img} alt="header-img" />
      </div>
  )
}

export default Hero