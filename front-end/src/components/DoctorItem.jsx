import React from 'react'

const DoctorItem = ({name, image, speciality}) => {
  return (
      <div className='w-1/6 border rounded-md flex flex-col cursor-pointer'>
          <div className='bg-[#EAEFFF]'>
            <img className='w-auto px-3' src={image} alt="doctor-image" />
          </div>
          
          <div className='flex flex-col py-2 px-4'>
              <div className='flex flex-row items-center gap-2'>
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