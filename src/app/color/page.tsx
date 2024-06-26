"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement, useEffect, useState } from "react";

const Page = (): ReactElement => {
  const colors = [
    "#FF5733",
    "#5733FF",
    "rebeccapurple",
    "crimson",
    "#033E3E",
    "#00A36C",
    "#563457",
    "#1B435E",
    "#720137",
    "#9B773D",
    "#005859",
    "#11254A",

  ];
  const [color, setColor] = useState("");
  const router = useRouter()

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);

  const handleChange = (e: { target: { id: string; }; }) => {
    const newColor = e.target.id;
    if (newColor) {
      router.refresh()
      setColor(newColor);
    }
  };

  useEffect(() => {
    if (color) {
      localStorage.setItem("color", color);
    }
  }, [color]);

  return (
    <div className="w-full bg-lightOne dark:bg-darkOne min-h-screen px-4 space-y-8 ">
      <div className="mx-auto  max-w-[1000px] py-10">

        <div className="flex justify-start items-center flex-wrap place-content-start gap-4">
          {colors.map((color, i) => (
            <button
              onClick={handleChange}
              id={color}
              style={{ backgroundColor: color }}
              className="cursor-pointer w-20 h-20 rounded-full"
              key={i}
            ></button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page;
