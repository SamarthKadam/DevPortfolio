import React from 'react'
import { useState,useEffect } from 'react'

export default function OutputConsole() {

    const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsIncreasing((prev) => !prev);
    }, 2500); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-5 mx-4  max-[634px]:mx-2 h-[100%] relative'>
        <div className="border-2 h-[85%] border-[#3434]">
            <div className='h-6 max-[900px]:h-4 max-[632px]:h-3 max-[632px]:gap-1 bg-[#ffffff] border-bottom-2 flex items-center gap-2 px-2'>
             <div className='bg-[#D9846B] h-3 w-3 max-[992px]:h-2 max-[992px]:w-2 max-[632px]:h-1 max-[632px]:w-1 rounded-full'></div>
             <div className='bg-[#D6BD74] h-3 w-3 max-[992px]:h-2 max-[992px]:w-2 max-[632px]:h-1 max-[632px]:w-1 rounded-full'></div>
             <div className='bg-[#9DCF9D] h-3 w-3 max-[992px]:h-2 max-[992px]:w-2 max-[632px]:h-1 max-[632px]:w-1 rounded-full'></div>
            </div>
        <div className='bg-[#3A4142] h-full flex gap-3 max-[992px]:gap-2 max-[400px]:py-2 max-[400px]:px-1 flex-col py-3 px-2'>
        <div className='bg-[#FF747B] h-2 max-[992px]:h-1 w-[40%] rounded-md'></div>
        <div className='flex gap-1'>
        <div className='bg-[#75D2F0] h-2 max-[992px]:h-1 w-[40%] rounded-md'></div>
        <div className={`bg-[#FFFFFF] h-2 max-[992px]:h-1 w-[20%] rounded-md transition-all duration-500 ${isIncreasing ? 'w-[10%]' : 'w-[20%]'}`}></div>
        <div className='bg-[#F1D65E] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        </div>
        <div className='bg-[#9070F4] h-2 max-[992px]:h-1 w-[70%] rounded-md'></div>
        <div className='flex gap-1'>
        <div className={`bg-[#75D2F0] h-2 max-[992px]:h-1 w-[40%] rounded-md transition-all duration-500 ${isIncreasing ? 'w-[40%]' : 'w-[50%]'} `}></div>
        <div className='bg-[#F1D65E] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        </div>
        <div className='bg-[#FFFFFF] h-2 max-[992px]:h-1 w-[40%] rounded-md'></div>
        <div className='flex gap-1'>
        <div className='bg-[#75D2F0] h-2 max-[992px]:h-1 w-[40%] rounded-md'></div>
        <div className='bg-[#F1D65E] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        <div className='bg-[#9070F4] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        </div>
        <div className='bg-[#F1D65E] h-2 max-[992px]:h-1 w-[36%] rounded-md'></div>
        <div className='flex gap-1'>
        <div className={`bg-[#FF747B] h-2 max-[992px]:h-1 w-[40%] rounded-md transition-all duration-500 ${isIncreasing ? 'w-[40%]' : 'w-[60%]'} `}></div>
        <div className='bg-[#FFFFFF] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        </div>
        <div className='flex gap-1'>
        <div className={`bg-[#75D2F0] h-2 max-[992px]:h-1 w-[15%] rounded-md transition-all duration-500 ${isIncreasing ? 'w-[15%]' : 'w-[30%]'} `}></div>
        <div className='bg-[#9070F4] h-2 max-[992px]:h-1 w-[20%] rounded-md'></div>
        <div className='bg-[#F1D65E] h-2 max-[992px]:h-1 w-[30%] rounded-md'></div>
        </div>
        <div className='flex gap-1'>
        <div className='bg-[#75D2F0] h-2 max-[992px]:h-1 w-[40%] rounded-md'></div>
        <div className={`bg-[#FFFFFF] h-2 max-[992px]:h-1 w-[20%] rounded-md transition-all duration-500 ${isIncreasing ? 'w-[20%]' : 'w-[40%]'} `}></div>
        </div>
        </div>
        </div>
    </div>
  )
}
