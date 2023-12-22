import React from 'react'
import Line from './Line'
import Header from './EditorComponents/Header'
import BulletPoints from './EditorComponents/BulletPoints'
import TextLoading from './EditorComponents/TextLoading'

export default function Editor() {
  return (
    <div>
        <Line></Line>
        <div className='w-[100%] m h-[100vh] border-t-4 border-r-2 border-l-2 border-l-[#999999] border-r-[#999999] border-white'>
        <div className='bg-[#13181E] mx-auto relative rounded-[2px] flex flex-col px-4 py-5 border-b-[1px] border-b-[#808080]'>
        <Header></Header>
       </div>
       <div className='grid grid-cols-[1fr,2fr,7fr,3fr]'>
          <div className='text-white flex items-center flex-col box-border py-3'>
            <BulletPoints></BulletPoints>
          </div>
          <div className='text-white py-3 flex items-center flex-col'>
            <TextLoading></TextLoading>
          </div>
          <div className='text-white  flex items-center flex-col'>Hello world</div>
          <div className='text-white flex items-center flex-col'>Hello world</div>
        </div>
        </div>
    </div>
  )
}
