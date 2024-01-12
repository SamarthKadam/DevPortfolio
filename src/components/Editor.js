import React from "react";
import Line from "./Line";
import Header from "./EditorComponents/Header";
import BulletPoints from "./EditorComponents/BulletPoints";
import TextLoading from "./EditorComponents/TextLoading";
import Input from "./EditorComponents/Input";
import Output from "./EditorComponents/Output";

export default function Editor() {
  return (
    <div>
      <Line></Line>
      <div className="w-[100%] m h-[100%] border-t-4 border-r-2 max-[742px]:mt-10 border-l-2 max-[634px]:border-t-2 max-[634px]:border-l-[1px] max-[634px]:border-r-[1px] border-l-[#999999] border-r-[#999999] border-white">
        <div className="bg-[#13181E] mx-auto relative rounded-[2px] flex flex-col px-4 py-5 max-[742px]:px-2 max-[742px]:py-3 max-[455px]:px-1 max-[455px]:py-2 border-b-[1px] border-b-[#808080]">
          <Header></Header>
        </div>
        <div className="grid  grid-cols-[1fr,2fr,7fr,3fr] max-[1500px]:grid-cols-[1fr,2fr,6fr,2fr] max-[1040px]:grid-cols-[0.6fr,1.4fr,5fr,1.8fr] max-[900px]:grid-cols-[0.5fr,5fr,1.6fr] max-[632px]:grid-cols-[5fr,1.6fr] max-[455px]:grid-cols-[5fr,2fr]">
          <div className="text-white h-[100%] max-[632px]:hidden flex items-center flex-col box-border py-3">
            <BulletPoints></BulletPoints>
          </div>
          <div className="text-white max-[900px]:hidden  py-3 flex items-center w-[100%] flex-col">
            <TextLoading></TextLoading>
          </div>
          <div className="h-[100%] text-white py-3 max-[455px]:py-0">
            <Input></Input>
          </div>
          <div className="text-white py-3 max-[502px]:py-5 max-[455px]:py-2">
            <Output></Output>
          </div>
        </div>
      </div>
    </div>
  );
}
