import React, { ReactElement } from "react";
import { ChevronRight } from "./svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RightButton = (props: { onClick: any; }): ReactElement => {
  const { onClick } = props;
  return (
    <button
      className="flex justify-center slick-next items-center  h-[40px] w-[40px] bg-white rounded-r-lg hover:bg-[#786FFF] hover:text-white "
      onClick={onClick}
    >
      <ChevronRight />
    </button>
  );
};

export default RightButton;
