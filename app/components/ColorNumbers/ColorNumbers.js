import React from 'react';
import HSBNumbers from './HSBNumbers';
import RGBNumbers from './RGBNumbers';
import HexNumbers from './HexNumbers';


export default function ColorNumbers({currentColorHSB, currentColorRGB, currentColorHex}){

  return (
    <div className="flex flex-wrap w-full mt-6 justify-between gap-5">
      <HSBNumbers currentCol={currentColorHSB} />
      <RGBNumbers currentCol={currentColorRGB} />
      <HexNumbers currentCol={currentColorHex} />
    </div>
  )
}