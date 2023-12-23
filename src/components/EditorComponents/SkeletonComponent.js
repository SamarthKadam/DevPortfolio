import React from 'react'
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonComponent({type}) {

  if(type===0)
  return (
  <div className="flex flex-row w-[100%]">
  <Skeleton style={{ width: '75%', backgroundColor: "#2B3135", height: '62px', marginTop: "5px" }} />
</div>)

  return (
    <div className="flex flex-row justify-end w-[100%]">
    <Skeleton style={{ width: '75%', backgroundColor: "#2B3135", height: '62px', marginTop: "5px" }} />
  </div>
  )
}
