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
    </>
  );
};
export default Template;
