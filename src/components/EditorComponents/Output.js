import React from 'react'
import OutputConsole from './OutputConsole'

export default function Output() {
  return (
    <div className='flex flex-col h-[100%]'>
        <div className='flex flex-row justify-around'>
        <div className='h-10 rounded-lg w-10  bg-[#2B3135]'></div>
        <div className='h-10 rounded-lg w-10  bg-[#2B3135]'></div>
        </div>
        <OutputConsole></OutputConsole>
</div>
  )
}
