import { Post } from "@/components/types";
import Image from "next/image";
import React, { ReactElement } from "react";

const Paragraph = (): ReactElement => {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <h3 className="text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          mollitia ipsum libero. Dolorum impedit, veritatis optio cum beatae quo
          dignissimos nostrum quisquam ratione exercitationem sequi perferendis
          vel id sed hic commodi ab minima asperiores totam rerum reiciendis.
          Doloremque quam ducimus, laudantium vitae consequatur officiis
          provident tempore, quasi obcaecati placeat temporibus?
        </h3>

        {/* Caption */}
        <h5 className="border-l-[2px] pl-6 italic text-[20px] text-[#4e4d58] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          corporis fugiat saepe dolores sed voluptate necessitatibus minus
          laudantium ratione animi.
        </h5>

        <h3 className="text-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          delectus omnis fuga architecto vitae culpa sint, totam dolores, rerum
          expedita nisi odit corrupti dolorum velit iste aut obcaecati alias
          illo! Voluptates nam rerum sint dignissimos vel incidunt non enim
          natus.
        </h3>
      </div>
    </div>
  );
};

export default Paragraph;
