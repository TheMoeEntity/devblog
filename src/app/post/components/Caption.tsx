import React from "react";

const Caption = ({ caption }: { caption: string }) => {
  const color = localStorage.getItem("color");
  return (
    <h5 className="border-l-[2px] border-darkThree dark:border-lightThree lg:max-w-[720px] mx-auto pl-6 italic text-[20px] dark:text-[#a2a2ac] text-[#4e4d58] relative">
      <span
        className="absolute top-0 left-0 text-6xl font-black text-[#6e6e6e42]"
        style={{ color: color || "#000" }}
      >
        &apos;
      </span>
      {caption}
    </h5>
  );
};

export default Caption;
