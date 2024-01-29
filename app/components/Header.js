import Link from 'next/link';
import { React, useState, useEffect } from 'react';

export default function Header({brightness}){
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (brightness < 80) setColor("white");
    else setColor("black");
  }, [brightness])
  
  

  return(
    <div className="fixed top-5 left-5 flex z-20 justify-center content-left">
      {/* Hamburger */} 
      <Link href="/" className="p-1.5 space-y-1 mr-2">
        <span className={`block h-0.5 w-5 bg-${color} rounded-md`}></span>
        <span className={`block h-0.5 w-5 bg-${color} rounded-md`}></span>
        <span className={`block h-0.5 w-5 bg-${color} rounded-md`}></span>
      </Link>

      {/* Logo */} 
      <div className={`pt-px font-light text-${color}`}>GoodAtPalettes</div>
    </div>
  )
}