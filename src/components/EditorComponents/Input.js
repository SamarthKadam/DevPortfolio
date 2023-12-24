import React from "react";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Typewriter from 'typewriter-effect/dist/core';
export default function Input() {

  useEffect(() => {
    const app = document.getElementById('typewriter');

    if (app) {
      const typewriter = new Typewriter(app, {
        strings: ['Please Fill the Form!', 'Thank you for filling the form ❤.'],
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
      <div className="bg-[#1C2429] flex flex-col gap-1 text-lg mt-5 h-[100%] w-[100%] px-4 py-4 box-border font-consolata">
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">1</span>&nbsp;{"<html>"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">2</span>&nbsp;&nbsp;&nbsp;{"<head>"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"<title>Login Page</title>"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">4</span>&nbsp;&nbsp;&nbsp;{"</head>"}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">5</span>&nbsp;&nbsp;&nbsp;{"<body>"}
        </div>
        <div className="text-white">
          <span className="text-[#656a6e]">6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"<h1>Simple Form</h1>"}
        </div>
        <div className="text-white">
          <span className="text-[#656a6e]">7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {' <form action="/submit" method="post">'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {' <label for="name">Name:</label><br>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<input type="text" id="name" name="name"><br><br>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<label for="email">Email:</label><br>'}
        </div>
        <div className="text-[#70F1A2]">
          <span className="text-[#656a6e]">11</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<input type="email" id="email" name="email"><br><br>'}
        </div>
        <div className="text-[#70F1A2] flex">
          <span className="text-[#656a6e]">12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {' <input type="submit" value="Submit">'}
        </div>
        <div className="text-[#70F1A2] flex">
        <span className="text-[#656a6e]">13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {`<p>`}<div id="typewriter"></div>{`</p>`}
        </div>
        <div className="text-white">
          <span className="text-[#656a6e]">13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'</form>'}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">14</span>&nbsp;&nbsp;&nbsp;
          {'</body>'}
        </div>
        <div className="text-[#E67777]">
          <span className="text-[#656a6e]">15</span>&nbsp;
          {'</html>'}
        </div>

      </div>
    </div>
  );
}
