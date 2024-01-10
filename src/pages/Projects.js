import React from 'react'
import img1 from '../assets/projects/Project1.webp'
import img2 from '../assets/projects/Project2.webp'
import img3 from '../assets/projects/Project3.webp'
import img4 from '../assets/projects/Project4.webp'
import img5 from '../assets/projects/Project5.webp'


export default function Projects() {
  return (
    <div id="projects" className='px-[10%] max-[1300px]:px-[5%]  py-20 bg-[#04090F] text-white w-[100%]'>
        <div className="font-bold text-4xl max-[1300px]:text-3xl">Projects</div>
        <div className='flex mt-10 gap-4'>
          <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/ChatBox'><img alt='Project' className='h-72 max-[1500px]:h-64 max-[1140px]:h-52 rounded-xl' src={img1}></img></a>
          <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/PomodoroApp-RN'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52' src={img4}></img></a> 
        </div>
        <div className=' flex gap-4 justify-end mt-10 overflow-auto'>
        <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/Spotify'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52' src={img3}></img>     </a>   
        <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/fonkeyType'><img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52' src={img2}></img> </a>
        </div>
        <div className=' flex gap-4  mt-10 overflow-auto'>
        <a target="_blank" rel="noreferrer" href='https://github.com/SamarthKadam/NewsApp-RNCLI'>
        <img alt='Project' className='h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52' src={img5}></img> 
        </a>
        {/* <img className='h-72 rounded-xl' src={img5}></img>  */}
        </div>
    </div>
  )
}
