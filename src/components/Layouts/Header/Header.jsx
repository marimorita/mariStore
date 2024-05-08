import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

export const Header = () => {
  return (
    <header className='bg-[#F3D0D7] w-full h-[150px]'>
      <div className='w-full h-[100px] flex flex-col justify-center items-center'> 
        <p className='text-[#402B3A] text-5xl font-semibold'>M O R I T A</p>
      </div>

      <div className='w-full h-[50px]  bg-[#FFEFEF] flex items-center justify-center'>
       <div className='w-[60%] flex justify-between items-center'>
        <div className='flex justify-center'>
          <p className='text-[#402B3A] font-medium text-2xl '>Categorias</p>
          <MdKeyboardArrowDown className='text-[#402B3A] w-10 h-10' />
        </div>

        <p className='text-[#402B3A] font-medium text-2xl hover:bg-black hover:pr-[10px] hover:pl-[10px] hover:rounded-[10px]'>Inicio</p>
         <div className='flex items-center'>   
           <input type="text" placeholder=" search " className='text-[#402B3A] w-15 h-7 indent-2 bg-[#FFEFEF] border-2 border-[#F3D0D7]  '/>
           <FaSearch className='text-[#402B3A] w-9 h-6'/> 
         </div>
         <CgShoppingCart className='text-[#402B3A] w-10 h-10'/>
        </div>
      </div>
    </header>
  )
}