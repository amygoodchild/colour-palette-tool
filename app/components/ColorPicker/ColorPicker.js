
import React, { useState } from 'react';
import SatBriPicker from './SatBriPicker';
import HuePicker from './HuePicker';

export default function ColorPicker({onHueChange, onSatBriChange, currentColorHSB}){

  return ( 
    <div className="COLOR-PICKER">
      <SatBriPicker hue={currentColorHSB.h} 
        onSatBriChange={(sat, bri) => onSatBriChange(sat, bri)} />
        <HuePicker onHueChange={(hue) => onHueChange(hue)} />
    </div>
  )
}
