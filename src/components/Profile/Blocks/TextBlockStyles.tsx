import React from "react";

export default function TextBlockStyle() {
  return (
    <div className="space-y-8">
      <div className="bg-white text-2xl p-5 h-32 cursor-pointer flex justify-center items-center font-bold hover:bg-gray-300/50">
        Heading
      </div>
      <div className="bg-white px-16 h-32 cursor-pointer flex justify-center flex-col hover:bg-gray-300/50">
        <h1 className="text-xl font-bold">Heading</h1>
        <p className="text-[10px] pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        </p>
      </div>
      <div className="bg-white px-16 h-32 cursor-pointer flex justify-center items-center hover:bg-gray-300/50">
        <p className="text-[10px] pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        </p>
      </div>
    </div>
  );
}
