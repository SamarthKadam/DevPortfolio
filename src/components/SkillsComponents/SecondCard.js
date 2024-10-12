import React from "react";
import img from "../../assets/icons/react.svg";

export default function SecondCard() {
  return (
    <div className="box-border px-6 py-8 max-[880px]:px-4 max-[880px]:py-6 max-[573px]:px-2 max-[572px]:py-4">
      <div className="flex flex-row items-center gap-5 max-[880px]:gap-1">
        <img className="w-10 max-[1014px]:w-8 max-[634px]:w-6 max-[502px]:w-4" src={img}></img>
        <div className="font-dmSans text-2xl max-[1300px]:text-xl max-[1014px]:text-lg max-[992px]:text-base max-[634px]:text-sm max-[502px]:text-xs max-[450px]:text-[10px] relative">
        <div className="relative">
            <div className="relative z-10 flex">Frontend <div className="max-[743px]:hidden"> Dev</div></div>
            <div className="absolute w-[160px] max-[1300px]:w-[130px] max-[992px]:w-[100px] max-[743px]:w-[70px] max-[454px]:w-[43px]  h-2 top-[63%] max-[992px]:h-1  -z-0 bg-[#2C49D8]"></div>
        </div>
          React, NextJS
        </div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] max-[992px]:text-sm max-[455px]:text-[10px] font-bold">{'<h3>'}</div>
      <div className="flex justify-end mt-2">
        <div className="w-[95%] font-georama box-border px-4 max-[502px]:px-1 border-l-2 text-lg max-[1014px]:text-base max-[992px]:text-sm max-[634px]:text-xs max-[502px]:text-[10px] max-[455px]:text-[8px]  border-[#5E5E60]">Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, Tailwind, React and NextJS frameworks.</div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] max-[992px]:text-sm max-[455px]:text-[10px] font-bold">{'<h3>'}</div>
    </div>
  );
}
