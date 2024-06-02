"use client";
import { useEffect, useState } from "react";

const ThemeHydrationWrapper = ({ children }: { children: any }) => {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default ThemeHydrationWrapper;
