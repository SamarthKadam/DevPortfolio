import React from 'react'
import OutputConsole from './OutputConsole'

export default function Output() {
  return (
    <div className='flex flex-col h-[100%]'>
        <div className='flex flex-row justify-around'>
        <div className='h-10 max-[1140px]:h-8 max-[1140px]:w-8 rounded-lg w-10 max-[992px]:h-6 max-[992px]:w-6 max-[992px]:rounded-md max-[502px]:h-4 max-[502px]:w-4 max-[502px]:rounded-sm  bg-[#2B3135]'></div>
        <div className='h-10 max-[1140px]:h-8 max-[1140px]:w-8 rounded-lg w-10 max-[992px]:h-6 max-[992px]:w-6 max-[992px]:rounded-md max-[502px]:h-4 max-[502px]:w-4 max-[502px]:rounded-sm  bg-[#2B3135]'></div>
        </div>
        <OutputConsole></OutputConsole>
</div>
  )
}
