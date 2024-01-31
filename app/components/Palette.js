import React, { useState } from 'react';

export default function Palette({currentColorHSL, currentColorHSB}){
  const [bgCols, setBgCols] = useState([]);
  const [fgCols, setFgCols] = useState([]);

  const handleAddNewBgCol = (col) => {
    setBgCols((prev) => [...prev, col]);
  }

  const handleAddNewFgCol = (col) => {
    setFgCols((prev) => [...prev, col,]);
  }

  return(
    <div className="PALETTE flex-1" 
      style={{
        background: `hsl(${currentColorHSL.h}, ${currentColorHSL.s}%, ${currentColorHSL.l}%)`
      }}>
      
    </div>
  )
}