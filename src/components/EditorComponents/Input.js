import React from "react";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Typewriter from 'typewriter-effect/dist/core';
export default function Input() {

  useEffect(() => {
    const app = document.getElementById('typewriter');

    if (app) {
      const typewriter = new Typewriter(app, {
        strings: ['"h-[100vh] px-40 py-5 bg-[#012478]"','"bg-[#034384] flex px-48 py-[5%] "'],
        autoStart: true,
        loop: true,
      });
    }
  }, []);


  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className="text-white h-10 flex items-center justify-around">
        <div className="h-10 rounded-lg w-10 border-2 border-white"></div>
        <Skeleton
          variant="text"
          sx={{ backgroundColor: "#2B3135", width: "150px", height: "52px" }}
        />
        <Skeleton
          variant="text"
          sx={{ backgroundColor: "#1F242A", width: "150px", height: "42px" }}
        />
        <Skeleton
          variant="text"
          sx={{ backgroundColor: "#1F242A", width: "150px", height: "42px" }}
        />
      </div>
      <div className="bg-[#1C2429] flex flex-col text-lg mt-5 h-[100%] w-[100%] px-4 py-4 box-border font-consolata">
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">1</span>&nbsp;{"import React from 'react';"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">2</span>&nbsp;{"import NavBar from '../components/NavBar';"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">3</span>&nbsp;
          {"import Description from '../components/Description';"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">4</span>&nbsp;{"import Service from './Service';"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">5</span>&nbsp;{"export default function Home() {"}
        </div>
        <div className="text-white">
          <span className="text-[#656a6e]">6</span>&nbsp;&nbsp;
          {"return ("}
        </div>
        <div className="text-white">
          <span className="text-[#656a6e]">7</span>&nbsp;&nbsp;&nbsp;
          {'<div>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<React.Fragment>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<div className='}<div className="inline" id="typewriter"></div>{'>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<NavBar/>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">11</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<Description></Description>'}
        </div>
        <div className="text-[#70F1A2] flex">
          <span className="text-[#656a6e]">12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'</div>'}
        </div>
        <div className="text-[#70F1A2] flex">
        <span className="text-[#656a6e]">13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {`<Service></Service>`}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">13</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {'<React.Fragment/>'}
        </div>
        <div className="text-[white]">
          <span className="text-[#656a6e]">14</span>&nbsp;&nbsp;&nbsp;
          {'</div>'}
        </div>
        <div className="text-[white]">
          <span className="text-[#656a6e]">15</span>&nbsp;
          {');'}
        </div>
        <div className="text-[white]">
          <span className="text-[#656a6e]">16</span>&nbsp;
          {'}'}
        </div>

      </div>
    </div>
  );
}
