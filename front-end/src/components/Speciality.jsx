import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import Title from './Title'

const Speciality = () => {
    
    const navigate = useNavigate();
    
  return (
      <div>
          <Title title={"Find by Speciality"} content={"Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."} />
          <div className='flex flex-row justify-center mt-10 gap-5 cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
              {specialityData.map((data) => 
                  <div onClick={() => navigate(`/doctors/${data.speciality}`)} className=' w-auto flex flex-col items-center gap-2'>
                      <img className='w-24' src={data.image} alt="speacialityData" />
                      <p className="text-center text-xs">{data.speciality}</p>
                  </div>

                )}
          </div>
      </div>
  )
}

export default Speciality