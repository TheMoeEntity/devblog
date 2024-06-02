"use client";
import React, { type ReactElement, useEffect, useState } from "react";

const useColor = () => {
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem("color");
      setColor(storedColor);
    }
  }, []);

  return color;
};

export const Clock = (): ReactElement => {
  const color = useColor();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export const Pen = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
};

export const Eye = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const Comment = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
};

export const Bookmark = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );
};

export const Hash = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
      />
    </svg>
  );
};

export const ChevronRight = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export const ChevronLeft = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const ArrowTopRight = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

export const Folder = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="stroke-black w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
      />
    </svg>
  );
};

export const Moon = (): ReactElement => {
  const color = useColor();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={color ? color : "none"}
      className="stroke-black bi bi-moon-stars-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
    </svg>
  );
};

export const Sun = (): ReactElement => {
  const color = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={color ? color : "none"}
      className="stroke-black bi bi-lamp-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002q-.225.044-.45.081a33 33 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a33 33 0 0 1-4.645-.425q-.225-.036-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7Z"
      />
      <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.052.075l-.001.004-.004.01V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
    </svg>
  );
};
