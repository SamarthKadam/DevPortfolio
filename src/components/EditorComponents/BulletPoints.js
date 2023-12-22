import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import DarkPoint from './DarkPoint';
export default function BulletPoints() {
  return (
    <div>
        <DarkPoint></DarkPoint>
        {[1,2,3,4,5,6,7].map((data,index)=><div className='h-10 rounded-lg w-10 mt-5 bg-[#2B3135]'></div>)}
    </div>
  )
}
