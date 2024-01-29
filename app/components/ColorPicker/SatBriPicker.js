import { React, useState, useRef, useEffect } from 'react';
import Picker from './Picker';
import { useMeasure } from "@uidotdev/usehooks";

export default function SatBriPicker({ hue, onSatBriChange}) {

  const [satBriPickerRef, { width, height }] = useMeasure();

  const handlePosChange = (x, y) =>{
    onSatBriChange(x, y);
  }

  return(
    <div ref={satBriPickerRef}>
      <div className="w-full h-96 rounded-lg" style={{
        background: `
        linear-gradient(
            0deg, 
            hsl(0, 0%, 0%), transparent
          ),
          linear-gradient(
            90deg, 
            hsl(0, 100%, 100%), hsl(${hue}, 100%, 50%)
          )`,
          
        }}>
      <Picker xStart={0} yStart={100} width={width} height={height} onPosChange={(x, y) => handlePosChange(x, y)} />
    
      </div>
    </div>
  )
}