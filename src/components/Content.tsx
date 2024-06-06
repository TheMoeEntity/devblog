import React, { ReactElement } from "react";

export const Content = (): ReactElement => {
  return (
    <div className="w-full my-10 bg-red min-h-[400px] ">
      <div className="w-[200px] bg-lightTwo text-black dark:text-white dark:bg-darkTwo mx-auto py-2 px-4 rounded-lg ">
        Page of 4
      </div>
    </div>
  );
};
