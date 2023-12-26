import React from 'react'
import FirstCard from '../components/SkillsComponents/FirstCard'
import SecondCard from '../components/SkillsComponents/SecondCard'
import ThirdCard from '../components/SkillsComponents/ThirdCard'

export default function Skills() {
  return (
    <div className='px-[10%] py-20 bg-[#04090F]'>
        <div className="text-center font-bold text-white text-7xl font-dmSans">My Expertise</div>
        <div className='border-2 mt-10 w-[90%] mx-auto border-white grid grid-cols-3'>
          <div className='text-white'><FirstCard></FirstCard></div>
          <div className='text-white border-l-2 border-l-white border-r-2 '><SecondCard></SecondCard></div>
          <div className='text-white'><ThirdCard></ThirdCard></div>
        </div>
    </div>
  )
}
