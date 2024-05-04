import { ReactNode } from "react";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Template = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Template;