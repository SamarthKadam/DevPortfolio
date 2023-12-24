import React from "react";
import img from "../../assets/icons/mobile.png";

export default function ThirdCard() {
  return (
    <div className="box-border px-6 py-8">
      <div className="flex flex-row items-center gap-5">
        <img className="w-10" src={img}></img>
        <div className="font-dmSans text-2xl relative">
        <div className="relative">
            <div className="relative z-10">ReactNative Dev</div>
            <div className="absolute w-[200px] h-2 top-[63%] -z-0 bg-[#FF6B2B]"></div>
        </div>
          Android, iOS
        </div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] font-bold">{'<h3>'}</div>
      <div className="flex justify-end mt-2">
        <div className="w-[95%] font-georama box-border px-4 border-l-2 text-lg border-[#5E5E60]">Skilled in developing hybrid mobile apps and cross-platform solutions using the ReactNative framework.</div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] font-bold">{'<h3>'}</div>
    </div>
  );
}
