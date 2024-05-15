import React from 'react'

export const Cards = ({img,title,category,price}) => {

  return (
      <div className='bg-[#F3D0D7] w-[30%] h-[60%] flex  '>
        <div >
         <img src={img} alt="product" className='h-40 w-36'  />
        </div>
        <div className='flex flex-col ml-4'>
        <div className='text-[#402B3A] text-2xl'>
         <p>{title}</p>
        </div>
        <p className='text-gray-400 text-xl'>{category}</p>
        <p className='mt-8 text-teal-800 text-xl'>{price}</p>
        <div className='w-[10px] h-[10px] bg-black rounded-[50%]'> </div>
        </div>

      </div>
  )
}