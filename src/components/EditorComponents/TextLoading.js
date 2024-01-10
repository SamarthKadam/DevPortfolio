import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import SkeletonComponent from './SkeletonComponent'
export default function TextLoading() {
  return (
    <div>
    <div className='h-10 max-[1140px]:h-8 max-[1140px]:w-32 rounded-lg w-40  max-[992px]:w-20 max-[992px]:h-6 bg-[#2B3135] flex justify-center items-center text-white'>
        <div className='h-2 w-[80%] bg-[#787D81] rounded-lg'></div>
    </div>
    {/* {[1,2,3,4,5,6,7].map((val,index)=><Skeleton key={index}></Skeleton>)} */}
    <div className="flex flex-row w-[100%] max-[992px]:mt-1">
    {/* <Skeleton style={{ width: '100%', backgroundColor: "#2B3135", height: '62px', marginTop: "5px" }} /> */}
    <Skeleton
  variant="text"
  sx={{ backgroundColor: "#2B3135", width: "120px",marginTop:'5px', height: "62px",'@media (max-width: 1400px)': {
    height: "52px",
    width:'80px' // Adjust the width for screens <= 1400px
  },'@media (max-width: 992px)': {
    height: "40px",
    width:'60px' // Adjust the width for screens <= 1400px
  } }}
/>
    </div>
    <SkeletonComponent type={1}></SkeletonComponent>
    <SkeletonComponent type={1}></SkeletonComponent>
    <SkeletonComponent type={0}></SkeletonComponent>
    <SkeletonComponent type={0}></SkeletonComponent>
    <SkeletonComponent type={1}></SkeletonComponent>
    </div>
  )
}
