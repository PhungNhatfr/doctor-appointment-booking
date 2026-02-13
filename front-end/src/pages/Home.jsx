import React from 'react'
import Hero from '../components/Hero'
import Speciality from '../components/Speciality'

const Home = () => {
  return (
      <div className='py-3 flex flex-col  gap-8'>
        <Hero />
        <Speciality />
      </div>
  )
}

export default Home