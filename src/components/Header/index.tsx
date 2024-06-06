"use client";
import { useEffect, useState } from "react";
import React from "react";
import "../../app/globals.css";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/app/post/components/svg";
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState<string>("");
  const storageEventName = "localStorageUpdate";
  const router = useRouter();

  useEffect(() => {
    console.log(color);
    const storedColor = localStorage.getItem("color");
    if (!storedColor) {
      const defaultColor = "#ff0000";
      localStorage.setItem("color", defaultColor);
      setColor(defaultColor);
    } else {
      setColor(storedColor);
    }

    const handleStorageChange = () => {
      const newColor = localStorage.getItem("color");
      if (newColor) {
        setColor(newColor);
      }
    };

    window.addEventListener(storageEventName, handleStorageChange);

    return () => {
      window.removeEventListener(storageEventName, handleStorageChange);
    };
  }, [color]);

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
    <header className="w-full text-center py-24 h-[166px] flex justify-center items-center text-black dark:text-white bg-lightOne dark:bg-darkOne relative z-50">
      {/* Mobile */}
      <div className="fixed w-full top-0 shadow-xl lg:hidden left-0 px-5 py-7 bg-lightOne dark:bg-darkOne flex justify-between">
        <div className="flex items-center font-semibold gap-x-3">
          <i className="fas fa-bars text-2xl"></i>
          <span className="font-medium">Menu</span>
        </div>
        <div className="flex gap-x-5 items-center">
          <span>A</span>
          {theme === "dark" ? (
            <div onClick={toggleTheme}>
              <Moon />
            </div>
          ) : (
            <div onClick={toggleTheme}>
              <Sun />
            </div>
          )}
          <span>
            <i className="bi bi-arrow-left " onClick={() => router.back()}></i>
          </span>
        </div>
      </div>
      <h1
        className="text-[45px] font-black dark:text-[#d0d4d0] text-[#34343B] mt-20 lg:mt-0"
        style={{ fontFamily: "copycat" }}
      >
        Blogville
      </h1>
      {/* Desktop */}
      <div className="absolute z-10 hidden lg:flex bg-lightTwo dark:bg-darkTwo w-[1000px] h-[70px] gap-x-10 items-center justify-center -bottom-5 left-1/2 -translate-x-1/2 px-7 rounded-xl py-7 shadow-lg">
        <div className="flex gap-x-8 text-[13px] font-semibold">
          <span>Homepage</span>
          <span>Categories</span>
          <span>Blog</span>
          <span>Styles</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="flex gap-x-3">
          <a href="">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="flex gap-x-3">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <span className="font-semibold">@Subscribe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
