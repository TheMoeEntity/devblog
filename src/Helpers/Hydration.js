"use client";
import React from "react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const HydrationZustand = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationZustand;
