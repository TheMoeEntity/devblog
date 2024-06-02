import React, { ReactElement } from "react";
import { ChevronLeft } from "./svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeftButton = (props: { onClick: any }): ReactElement => {
  const { onClick } = props;
  return (
    <button
      className="flex justify-center slick-prev items-center  h-[40px] w-[40px] bg-white rounded-l-lg hover:bg-[#786FFF] hover:text-white z-50 "
      onClick={onClick}
    >
      <ChevronLeft />
    </button>
  );
};

export default LeftButton;
