import React from 'react'

export default function Projects() {
  return (
    <div className='px-[10%]   py-20 bg-[#04090F] text-white w-[100%]'>
        <div className="font-bold text-4xl">Projects</div>
        <div className='flex mt-10 gap-10'>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project1</div>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project2</div>
        </div>
        <div className=' flex gap-5 justify-end mt-10 overflow-auto'>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project1</div>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project1</div>
        </div>
        <div className=' flex gap-5  mt-10 overflow-auto'>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project1</div>
          <div className=" h-72 rounded-xl w-[40%] bg-white">Project1</div>
        </div>
    </div>
  )
}
