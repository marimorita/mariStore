import React from 'react'

export const Cards = ({img,title,description}) => {

  return (
    <div classname='bg-[#F3D0D7] h-60 w-56'>
      <div className=''>
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
