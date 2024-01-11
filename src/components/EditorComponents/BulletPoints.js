import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import DarkPoint from './DarkPoint';
export default function BulletPoints() {
  return (
    <div>
        <DarkPoint></DarkPoint>
        {[1,2,3,4,5,6,7].map((data,index)=><div key={index} className='h-10 max-[1140px]:h-8 max-[1140px]:w-8 rounded-lg w-10 mt-5 max-[992px]:h-6 max-[992px]:w-6 max-[992px]:rounded-md bg-[#2B3135]'></div>)}
    </div>
  )
}
