import React from 'react'

const Button = ({text}) => {
  return (
      <div className='rounded-full bg-[#5F6FFF]  '>
          <p className='text-sm px-4 py-2 text-white'>{text}</p>
      </div>
  )
}

export default Button