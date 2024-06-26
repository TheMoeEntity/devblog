"use client"
import React, { useEffect, useState } from 'react'

const loading = () => {
    const newColor = localStorage.getItem("color")
    const [color, setColor] = useState<string>("");
    useEffect(() => {
        if (newColor) {
            setColor(newColor)
        }
    }, [newColor])
    return (
        <div className='min-h-screen bg-lightOne dark:bg-darkOne w-full absolute top-0 left-0 flex justify-center items-center'><span style={{ color: color }} className="loading loading-ring loading-lg text-primary"></span></div >
    )
}

export default loading