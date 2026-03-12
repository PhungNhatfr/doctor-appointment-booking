import React, { useContext, useState } from 'react'
import { assets, doctors } from '../assets/assets_frontend/assets'
import { UserContext } from '../context/userContext'
import DoctorItem from './DoctorItem'
import Title from './Title'

const RelatedDoctor = () => {
    
  const { relatedDoctor, getRelatedDoctor, setRelatedDoctor } = useContext(UserContext);
     
  return (
      <div className='mt-12'>
          <Title title="Related Doctors" content="Simply browse through our extensive list of trusted doctors." />
          
          <div className='w-full grid sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8'>
              {relatedDoctor.map((doctor) => (
              
                <DoctorItem _id={doctor._id} name={doctor.name} image={doctor.image ? doctor.image : assets.upload_area} speciality={doctor.speciality}  />
              ))}
          </div>
      </div>
  )
}

export default RelatedDoctor