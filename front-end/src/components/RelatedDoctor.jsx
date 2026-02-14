import React, { useState } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import DoctorItem from './DoctorItem'
import Title from './Title'

const RelatedDoctor = () => {
    
    const [relatedDoctors, setRelatedDoctor] = useState(doctors.slice(0,5))
     
  return (
      <div className='mt-12'>
          <Title title="Related Doctors" content="Simply browse through our extensive list of trusted doctors." />
          
          <div className='w-full grid sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8'>
              {relatedDoctors.map((doctor) => (
              
                <DoctorItem _id={doctor._id} name={doctor.name} image={doctor.image} speciality={doctor.speciality}  />
              ))}
          </div>
      </div>
  )
}

export default RelatedDoctor