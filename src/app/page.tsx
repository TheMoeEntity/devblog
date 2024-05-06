import React from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-[90%] flex flex-col gap-y-10 mx-auto ">
        <div className="w-full h-auto rounded-2xl">
          <Hero />
        </div>

      </div>
    </main>
  );
}
