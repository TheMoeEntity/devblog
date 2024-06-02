import type { ReactElement, ReactNode } from "react";
import React from "react";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Script from "next/script";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Template = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      />
    </>
  );
};
export default Template;
