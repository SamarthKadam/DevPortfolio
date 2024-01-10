import React from 'react'
import RoundIcon from '../assets/icons/round.svg'

export default function RightDesign() {
  return (
    <div className='relative w-60 h-[100%]'>
    <div className='h-[2px] absolute top-[82%] translate-y-[-82%] right-[100%] translate-x-[100%] -rotate-45 w-16 bg-white'></div>
    <div className='h-[2px] absolute top-[61.5%] right-[14%] translate-x-[14%] translate-y-[-61.5%] w-44 bg-white'></div>
    <div className='h-[2px] absolute top-[40%] translate-y-[-40%] right-[55%] translate-x-[55%] -rotate-45 w-16 bg-white'></div>
    <div className='h-[2px] absolute top-[20%] right-[17%] translate-x-[17%] translate-y-[-20%] w-20 bg-white'></div>
    <img className="absolute h-10 max-[992px]:h-8 max-[992px]:left-[86%] left-[87.5%] translate-x-[-87.5%] animate-spin-slow" src={RoundIcon}></img>
  </div>
  )
}
