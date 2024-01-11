import React from 'react'
import LeftDesign from '../designs/LeftDesign'
import RightDesign from '../designs/RightDesign'
export default function Line() {
  return (
    <div className='text-white h-28 max-[742px]:hidden flex justify-around'>
        <LeftDesign></LeftDesign>
        <RightDesign></RightDesign>
    </div>
  )
}
