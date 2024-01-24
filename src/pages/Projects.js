import React from 'react'
import img1 from '../assets/projects/Project1.webp'
import img2 from '../assets/projects/Project2.webp'
import img3 from '../assets/projects/Project3.webp'
import img4 from '../assets/projects/Project4.webp'
import img5 from '../assets/projects/Project5.webp'
import img6 from '../assets/projects/Project6.webp'


export default function Projects() {
  return (
    <div id="projects" className='px-[10%] max-[1300px]:px-[5%]  py-20 max-[455px]:py-10 bg-[#04090F] text-white w-[100%]'>
        <div className="font-bold text-4xl max-[1300px]:text-3xl max-[992px]:text-2xl">Projects</div>
        <div className='flex max-[940px]:flex-col mt-10 gap-4'>
          <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/ChatBox'><img alt='Project' className='h-72 max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44 rounded-xl' src={img1}></img></a>
          <a target="_blank" rel="noreferrer" className='max-[940px]:flex max-[940px]:justify-end' href='https://github.com/SamarthKadam/Nike-MobileApp'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44' src={img6}></img></a> 
        </div>
        <div className=' flex gap-4 max-[940px]:flex-col justify-end mt-10 overflow-auto'>
        <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/Spotify'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44' src={img3}></img>     </a>   
        <a target="_blank" className='max-[940px]:flex max-[940px]:justify-end'  rel="noreferrer" href='https://github.com/SamarthKadam/fonkeyType'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44' src={img2}></img> </a>
        </div>
        <div className=' flex gap-4 max-[940px]:flex-col  mt-10 overflow-auto'>
        <a target="_blank" rel="noreferrer" className='max-[940px]:flex' href='https://github.com/SamarthKadam/PomodoroApp-RN'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44' src={img4}></img></a> 
        <a target="_blank" className='max-[940px]:flex max-[940px]:justify-end'  rel="noreferrer" href='https://github.com/SamarthKadam/NewsApp-RNCLI'>
        <img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44' src={img5}></img> 
        </a>
        </div>
    </div>
  )
}
