import React, { ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "./svg";

const Control = (): ReactElement => {
  return (
    <div className="flex absolute top-2 lg:hidden">
      <button className="flex justify-center items-center  h-[40px] w-[40px] bg-white rounded-l-lg hover:bg-[#786FFF] hover:text-white ">
        <ChevronLeft />
      </button>
      <button className="flex justify-center items-center  h-[40px] w-[40px] bg-white rounded-r-lg hover:bg-[#786FFF] hover:text-white ">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Control;
