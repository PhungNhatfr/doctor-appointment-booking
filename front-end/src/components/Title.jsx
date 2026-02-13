import React from 'react'

const Title = ({title, content}) => {
  return (
      <div className='w-1/3 flex flex-col py-2 items-center text-center mx-auto'>
          <p className='font-bold text-2xl py-2'>{title}</p>
          <p className='text-xs'>{content}</p>
          
      </div>
  )
}

export default Title