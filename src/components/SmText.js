import React from "react";

export default function SmText({ text }) {
  return (
    <div className="mt-4">
      <div className="text-white text-lg max-[992px]:text-base max-[600px]:text-sm max-[634px]:text-xs max-[455px]:text-[10px] ">{text}</div>
    </div>
  );
}
