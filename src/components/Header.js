import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#19202398] mx-auto relative rounded-[2px] flex flex-row px-4 py-6'>
        <div className='text-xl font-mono text-white w-[35%]'>
        <span className='text-[#62B46E]'>The</span>Programmer
        </div>
        <div className='flex flex-row gap-10'>
            <div className='text-white text-sm cursor-pointer '>HOME</div>
            <div className='text-[#BDBDBD] text-sm cursor-pointer '>ABOUT</div>
            <div className='text-[#BDBDBD]  text-sm cursor-pointer'>EXPERTISE</div>
            <div className='text-[#BDBDBD]  text-sm cursor-pointer '>WORK</div>
            <div className='text-[#BDBDBD]   text-sm cursor-pointer'>CONTACTS</div>
        </div>
    </div>
  )
}
// #21292d98