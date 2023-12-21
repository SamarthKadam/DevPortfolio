import React from 'react'

export default function LeftDesign() {
  return (
    <div className='relative w-60 h-[100%]'>
        <div className='h-[2px] absolute top-[82%] translate-y-[-82%] left-[100%] translate-x-[-100%] rotate-45 w-16 bg-white'></div>
        <div className='h-[2px] absolute top-[61.5%] left-[14%] translate-x-[-14%] translate-y-[-61.5%] w-44 bg-white'></div>
        <div className='h-[2px] absolute top-[40%] translate-y-[-40%] left-[55%] translate-x-[-55%] rotate-45 w-16 bg-white'></div>
        <div className='h-[2px] absolute top-[20%] left-[17%] translate-x-[-17%] translate-y-[-20%] w-20 bg-white'></div>
    </div>
  )
}