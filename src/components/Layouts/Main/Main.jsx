import React from 'react'

export const Main = ({ children }) => {
  return (
    <main className='w-full h-full flex flex-1 flex-col justify-center items-center pt-5 pb-5 bg-[#F6F5F2] mt-[150px] '>
      { children }
    </main>
  )
}
