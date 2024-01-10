import React from 'react'
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonComponent({type}) {


//   <Skeleton
//   variant="text"
//   sx={{ backgroundColor: "#2B3135", width: "120px", height: "62px",'@media (max-width: 1400px)': {
//     height: "32px",
//     width:'80px' // Adjust the width for screens <= 1400px
//   } }}
// />

  if(type===0)
  return (
  <div className="flex flex-row w-[100%]">
      <Skeleton
  variant="text"
  sx={{ backgroundColor: "#2B3135", width: "120px", height: "62px",'@media (max-width: 1400px)': {
    height: "52px",
    width:'80px' // Adjust the width for screens <= 1400px
  },'@media (max-width: 992px)': {
    height: "40px",
    width:'60px' // Adjust the width for screens <= 1400px
  } }}
/>
</div>)

  return (
    <div className="flex flex-row justify-end w-[100%]">
        <Skeleton
  variant="text"
  sx={{ backgroundColor: "#2B3135", width: "120px", height: "62px",'@media (max-width: 1400px)': {
    height: "52px",
    width:'80px' // Adjust the width for screens <= 1400px
  },'@media (max-width: 992px)': {
    height: "40px",
    width:'60px' // Adjust the width for screens <= 1400px
  } }}
/>
  </div>
  )
}
