"use client";
import { useEffect, useState } from "react";
import React from "react";
import "../../app/globals.css";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";


const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("Blogville");
  const [color, setColor] = useState<string>("");
  const newColor = localStorage.getItem("color")
  const router = useRouter();
  const path = usePathname()

  useEffect(() => {

    path.includes("/profile") ? setText("profile") : setText("Blogville")
  }, [path])

  useEffect(() => {
    if (newColor) {
      setColor(newColor)
    }
  }, [newColor])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full text-center py-24 h-[166px] flex flex-col justify-center items-center text-black dark:text-white bg-lightOne dark:bg-darkOne relative z-50">
      {/* Mobile */}
      <div className="fixed w-full top-0 shadow-xl lg:hidden left-0 px-5 py-7 bg-lightOne dark:bg-darkOne flex justify-between">
        <div className="flex items-center font-semibold gap-x-3  ">
          <span className="font-medium" onClick={() => router.push("/")}>Menu</span>
        </div>
        <div className="flex gap-x-6 text-lg items-center has-[i]:cursor-pointer ">
          <i style={{ color: `${color}` }} className={`bi bi-palette-fill  `} onClick={() => router.push("/color")}></i>
          <i className="bi bi-person-fill" onClick={() => router.push("/profile")}></i>
          {theme === "dark" ? (
            <div onClick={toggleTheme}>
              <i style={{ color: `${color}` }} className={`bi bi-moon-stars-fill  `} onClick={() => router.push("/color")}></i>
            </div>
          ) : (
            <div onClick={toggleTheme}>
              <i style={{ color: `${color}` }} className={`bi bi-lamp-fill  `} onClick={() => router.push("/color")}></i>
            </div>
          )}
          <span>
            <i className="bi bi-arrow-left " onClick={() => router.back()}></i>
          </span>
        </div>
      </div>
      <h1
        className="text-[45px] py-4 w-full font-black dark:text-[#d0d4d0] text-[#34343B] mt-20  capitalize mx-4"
        style={{ fontFamily: "copycat" }}
      >
        {text}

        <div className="breadcrumbs lg:hidden text-sm text-start">
          <ul>

            {path.split("/").map((route, i) => <li key={i}><a>{route}</a></li>)}
          </ul>
        </div>
      </h1>
      {/* Desktop */}
      <div className="mx-auto z-10 hidden lg:flex bg-lightTwo dark:bg-darkTwo  h-[70px] gap-x-10 items-center justify-center w-[1000px] px-7 rounded-xl py-7 shadow-lg">
        <div className={`flex has-[span]:capitalize has-[span]:cursor-pointer transition-[.8s]   gap-x-8 text-[13px] font-semibold`}>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("/")}>home</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("")}>categories</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("")}>blog</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("")}>about</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("")}>contact</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("/profile")}>Profile</span>
          <span className="transition-[.8s] hover:scale-[1.2] " onClick={() => router.push("/color")}>colors</span>

        </div>
        <div className="flex gap-x-3">
          <a href="">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="flex gap-x-3 ">
          <button className="">
            <i className="bi bi-search"></i>
          </button>

        </div>
      </div>
      <div className="breadcrumbs text-md  z-10 hidden lg:flex w-[800px] gap-x-10 items-center justify-center px-7 rounded-xl py-7 overflow-hidden  ">
        <ul className="no-underline disabled">
          {path.split("/").map((route, i) => <li key={i}><a className="no-underline disabled ">{route}</a></li>)}
        </ul>
      </div>
    </header>
  );
};

export default Header;
