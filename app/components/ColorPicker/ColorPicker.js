
import React, { useState } from 'react';
import SatLiPicker from './SatLiPicker';
import HuePicker from './HuePicker';

export default function ColorPicker({onColorChange, currentColorHSB}){

  const handleHueChange = (x) => {
    onColorChange(0, x);
  }

  const handleSatBriChange = (x, y) => {
    onColorChange(1, x, y);
  }

  return ( 
    <div className="COLOR-PICKER">
      <SatLiPicker hue={currentColorHSB.hue} onSatLiChange={(x, y) => handleSatBriChange(x, y)} />
       <HuePicker onHueChange={(x) => handleHueChange(x)} />
    </div>
  )
}
