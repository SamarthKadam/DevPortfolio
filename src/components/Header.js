import React from 'react'

export default function Header() {

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='bg-[#19202398] mx-auto relative rounded-[2px] flex flex-row px-4 py-6'>
        <div className='text-xl font-mono text-white w-[35%]'>
        <span className='text-[#62B46E]'>The</span>Programmer
        </div>
        <div className='flex flex-row gap-10'>
            <div  className='text-white text-sm cursor-pointer '>HOME</div>
            <div onClick={handleClickScroll.bind(this,'about')} className='text-[#BDBDBD] text-sm cursor-pointer '>ABOUT</div>
            <div onClick={handleClickScroll.bind(this,'skills')} className='text-[#BDBDBD]  text-sm cursor-pointer'>EXPERTISE</div>
            <div onClick={handleClickScroll.bind(this,'projects')} className='text-[#BDBDBD]  text-sm cursor-pointer '>WORK</div>
            <div onClick={handleClickScroll.bind(this,'contacts')} className='text-[#BDBDBD]   text-sm cursor-pointer'>CONTACTS</div>
        </div>
    </div>
  )
}