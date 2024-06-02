"use client";
import React, { ReactElement, useEffect, useState } from "react";

const Page = (): ReactElement => {
  const colors = [
    "#FF5733",
    "#DAEE01",
    "#00ff00",
    "#33FF57",
    "#5733FF",
    "#16E2F5",
    "#033E3E",
    "#00A36C",
    "#FFFF00",
    "#FFFFC2",
    "#BD33FF",
  ];
  const [color, setColor] = useState("");

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);

  const handleChange = (e: any) => {
    const newColor = e.target.name;
    if (newColor) {
      setColor(newColor);
    }
  };

  useEffect(() => {
    if (color) {
      localStorage.setItem("color", color);
    }
  }, [color]);

  return (
    <div className="w-full bg-lightOne dark:bg-darkOne min-h-screen px-4 space-y-8 p-4">
      <div className="p-4 text-white" style={{ backgroundColor: color }}>
        Selected Color
      </div>
      <div className="flex justify-start items-center flex-wrap place-content-start gap-4">
        {colors.map((color, i) => (
          <button
            onClick={handleChange}
            name={color}
            style={{ backgroundColor: color }}
            className="cursor-pointer w-20 h-20 rounded-full"
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Page;
