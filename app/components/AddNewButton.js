import { React, useState, useEffect } from "react";


export default function AddNewButton({label, onClick, paletteColor}){
  const [outerColor, setOuterColor] = useState("white");
  const [innerColor, setInnerColor] = useState("black");

  const {h, s, b} = paletteColor;

  useEffect(() => {
    let satBoundary = 60;
    if (h > 38 && h < 197) satBoundary = 100;

    if (b < 80 || s > satBoundary) {
      setOuterColor("white");
      setInnerColor("black");
    }
    else {
      setOuterColor("black");
      setInnerColor("white");
    }

    

  }, [paletteColor])

  return(
    <div onClick={onClick} className="flex flex-col justify-center items-center group cursor-pointer">
      <div className={`rounded-full w-min p-2 group-hover:ring-4
           ${outerColor === "white" ? "bg-white" : "bg-black"}  
           ${outerColor === "white" ? "group-hover:ring-white" : "group-hover:ring-black"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke={`${innerColor === "white" ? "white" : "black"}`} className={`w-6 h-6 ${innerColor === "white" ? "stroke-white" : "stroke-black"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <div className={`text-center text-xs p-1 rounded 
       
        ${outerColor === "white" ? "text-white" : "text-black"}`}> {label}</div>
    </div>
  )
}