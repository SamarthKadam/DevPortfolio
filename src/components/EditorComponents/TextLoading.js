import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import SkeletonComponent from './SkeletonComponent'
export default function TextLoading() {
  return (
    <div>
    <div className='h-10 rounded-lg w-40  bg-[#2B3135] flex justify-center items-center text-white'>
        <div className='h-2 w-[80%] bg-[#787D81] rounded-lg'></div>
    </div>
    {/* {[1,2,3,4,5,6,7].map((val,index)=><Skeleton key={index}></Skeleton>)} */}
    <div className="flex flex-row w-[100%]">
    <Skeleton style={{ width: '100%', backgroundColor: "#2B3135", height: '62px', marginTop: "5px" }} />
    </div>
    <SkeletonComponent type={1}></SkeletonComponent>
    <SkeletonComponent type={1}></SkeletonComponent>
    <SkeletonComponent type={0}></SkeletonComponent>
    <SkeletonComponent type={0}></SkeletonComponent>
    <SkeletonComponent type={1}></SkeletonComponent>
    </div>
  )
}
