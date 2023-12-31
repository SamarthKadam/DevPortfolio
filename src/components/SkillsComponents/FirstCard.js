import React from "react";
import img from "../../assets/icons/backend.png";

export default function FirstCard() {
  return (
    <div className="box-border px-6 py-8">
      <div className="flex flex-row items-center gap-5">
        <img className="w-10" src={img}></img>
        <div className="font-dmSans text-2xl relative">
        <div className="relative">
            <div className="relative z-10">Backend</div>
            <div className="absolute w-[105px] h-2 top-[63%] -z-0 bg-[#DF058D]"></div>
        </div>
          Development
        </div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] font-bold">{'<h3>'}</div>
      <div className="flex justify-end mt-2">
        <div className="w-[95%] font-georama box-border px-4 border-l-2 text-lg border-[#5E5E60]">Experienced in both REST and Graphql: Express, NodeJS, JWT, Mongoose, Graphql, Mongodb, SQL, SQLite</div>
      </div>
      <div className="mt-4 font-mono text-[#5E5E60] font-bold">{'<h3>'}</div>
    </div>
  );
}
