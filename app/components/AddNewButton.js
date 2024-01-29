import { React, useState, useEffect } from "react";


export default function AddNewButton({label, onClick, brightness}){
  const [outerColor, setOuterColor] = useState("white");
  const [innerColor, setInnerColor] = useState("black");

  useEffect(() => {
    if (brightness < 80) {
      setOuterColor("white");
      setInnerColor("black");
    }
    else {
      setOuterColor("black");
      setInnerColor("white");
    }
  }, [brightness])

  return(
    <div onClick={onClick} className="flex flex-col justify-center items-center group cursor-pointer">
      <div className={`rounded-full w-min bg-${outerColor} p-2 group-hover:ring-4 group-hover:ring-${outerColor}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke={`${innerColor}`} className={`w-6 h-6 stroke-${innerColor}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <div className={`text-center text-xs p-1 rounded group-hover:bg-${innerColor} text-${outerColor}`}>{label}</div>
    </div>
  )
}