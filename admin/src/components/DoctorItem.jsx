import React from 'react'

const DoctorItem = ({ _id, name, image, speciality }) => {
  return (
      <div  className=' border border-[#C9D8FF] rounded-md flex flex-col cursor-pointer hover:translate-y-[-5px] transition-all duration-500'>
          <div className='bg-[#C9D8FF]'>
            <img className='w-full px-3' src={image} alt="doctor-image" />
          </div>
          
          <div className='flex flex-col py-2 px-4 gap-2'>
              <p className='text-md font-bold'>{name}</p>
              <p className='text-xs text-gray-600'>{speciality}</p>
          </div>
 
      </div>
  )
}

export default DoctorItem