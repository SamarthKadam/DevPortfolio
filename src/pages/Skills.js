import React from 'react'
import Card from '../components/SkillsComponents/Card'

export default function Skills() {
  return (
    <div className='px-[10%] pt-10 bg-[#04090F]'>
        <div className="text-center font-bold text-white text-7xl font-dmSans">My Expertise</div>
        <div className='border-2 mt-10 w-[90%] mx-auto border-white grid grid-cols-3'>
          <div className='text-white'><Card></Card></div>
          <div className='text-white border-l-2 border-l-white border-r-2 '>s</div>
          <div className='text-white'>s</div>
        </div>
        <div>p</div>
        <div>p</div>
        <div>p</div>
        <div>p</div>
        <div>p</div>
        <div>p</div>
    </div>
  )
}
