import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import Hydration from "../Helpers/Hydration"

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/components/ThemeHydration";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blogville",
  description: "Welcome to Blogville, your vibrant online hub where ideas thrive and stories come alive! Discover a diverse community of bloggers sharing insights, inspiration, and expertise on everything from lifestyle tips to tech trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Hydration>
          <Providers>

            <div className="w-full transition duration-[200ms]">{children}</div>
          </Providers>
        </Hydration>
      </body>
    </html>
  );
}
