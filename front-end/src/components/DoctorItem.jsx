import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorItem = ({ _id, name, image, speciality }) => {
    const navigate = useNavigate()
  return (
      <div onClick={() => navigate(`/appointment/${_id}`)} className=' border rounded-md flex flex-col cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
          <div className='bg-[#EAEFFF]'>
            <img className='w-full px-3' src={image} alt="doctor-image" />
          </div>
          
          <div className='flex flex-col py-2 px-4 gap-2'>
              <div className='flex flex-row items-center gap-2 pt-2'>
                  <span className='bg-green-600 border rounded-full w-2 h-2'></span>
                  <p className='text-xs text-green-600'>Available</p>
              </div>
              
              <p className='text-md font-bold'>{name}</p>
              <p className='text-xs text-gray-600'>{speciality}</p>
          </div>
 
      </div>
  )
}

export default DoctorItem