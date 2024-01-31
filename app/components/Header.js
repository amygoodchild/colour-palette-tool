import Link from 'next/link';
import { React, useState, useEffect } from 'react';

export default function Header({paletteColor}){
  const [color, setColor] = useState("white");

  const {h, s, b} = paletteColor;

  useEffect(() => {

    let satBoundary = 60;
    if (h > 38 && h < 197) satBoundary = 100;

    if (b < 80 || s > satBoundary) setColor("white");
    else setColor("black");
  }, [paletteColor])
  
  

  return(
    <div className="fixed top-5 left-5 flex z-20 justify-center content-left">
      {/* Hamburger */} 
      <Link href="/" className="p-1.5 space-y-1 mr-2">
        <span className={`block h-0.5 w-5 ${color === "white" ? "bg-white" : "bg-black"} rounded-md`}></span>
        <span className={`block h-0.5 w-5 ${color === "white" ? "bg-white" : "bg-black"} rounded-md`}></span>
        <span className={`block h-0.5 w-5 ${color === "white" ? "bg-white" : "bg-black"} rounded-md`}></span>
      </Link>

      {/* Logo */} 
      <div className={`pt-px font-light ${color === "white" ? "text-white" : "text-black"} select-none`}>GoodAtPalettes</div>
    </div>
  )
}