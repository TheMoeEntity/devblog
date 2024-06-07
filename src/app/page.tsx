import React from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { Content } from "@/components/Content";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden  bg-lightOne dark:bg-darkOne  flex flex-col gap-y-10 mx-auto ">
      <div className="w-full h-auto rounded-2xl">

        <Hero />
        
        <Content />
      </div>
    </div>
  );
}
