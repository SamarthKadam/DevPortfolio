import React from 'react'
import Skeleton1 from './Skeleton1'
export default function TextLoading() {
  return (
    <div>
    <div className='h-10 rounded-lg w-32  bg-[#2B3135] flex justify-center items-center text-white'>
        <div className='h-2 w-[80%] bg-[#787D81] rounded-lg'></div>
    </div>
    {[1,2,3,4,5,6,7].map((val,index)=><Skeleton1 key={index}></Skeleton1>)}
    </div>
  )
}
