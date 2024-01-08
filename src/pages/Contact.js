import React, { useEffect,useState} from 'react'
import img1 from '../assets/icons/github.png'
import img2 from '../assets/icons/linkedin.png'
import img3 from '../assets/icons/twitter.png'
import phone from '../assets/icons/phone-call.png'
import gmail from '../assets/icons/gmail.png'
export default function Contact() {

  const[innerWidth,setInnerWidth]=useState(window.innerWidth-10);
  const handleResize=()=>{
    setInnerWidth(window.innerWidth-10);
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('resize',handleResize);
    }

  },[])


  return (
    <div id='contacts' className=' py-10 bg-[#04090F] h-[65vh] text-white w-[100%] overflow-hidden'>
      <div style={{'--ht':innerWidth+'px'}} className=' mx-auto w-[var(--ht)] flex justify-center items-center h-[var(--ht)] rounded-full border-[10px] border-[#62B46E]'>
        <div style={{'--ht':innerWidth-125+'px'}} className='w-[var(--ht)] h-[var(--ht)] flex justify-center  rounded-full border-[10px] border-[white]'>
          <div className='mt-14 text-lg'>
          <div className='w-[50%] mx-auto'>
          <div className='font-bold'>Available for freelance opportunities</div>
          <div className='text-sm'>Have an exciting project you need help with?
Send me an email or contact me via instant message!</div>
          </div>
          <div className='flex flex-row gap-4 mt-4 justify-center'>
            <a href='https://www.linkedin.com/in/samarth-kadam-119a25209/'><img alt='info' className='w-10' src={img2}></img></a>
            <a href='https://github.com/SamarthKadam'><img alt='info' className='w-10' src={img1}></img></a>
            <a href='https://twitter.com/Samarth69908166'><img alt='info' className='w-10' src={img3}></img></a>
          </div>
          <div className='mt-4 flex flex-col items-center text-sm'>
            <div className='flex items-center gap-2'><img alt='info' className='h-5' src={gmail}></img>samarthskadam14@gmail.com</div>
            <div className='flex items-center gap-2 mt-1'><img alt='info' className='h-5' src={phone}></img> +91 9483933877</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
