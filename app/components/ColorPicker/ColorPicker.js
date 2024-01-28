
import React, { useState } from 'react';
import SatLiPicker from './SatLiPicker';
import HuePicker from './HuePicker';

export default function ColorPicker(){
  const [hue, setHue] = useState(60);
  const [sat, setSat] = useState(60);
  const [lig, setLig] = useState(80);

  const [huePickerWidth, setHuePickerWidth] = useState(0);

  const handleHuePickerWidthChange = (width) => {
    setHuePickerWidth(width);
  };

  const handleHueChange = (x) => {
    setHue(x);
  }

  return ( 
    <div className="COLOR-PICKER">
      <SatLiPicker hue={hue} sat={sat} lig={lig} />
      <HuePicker hue={hue} onWidthChange={handleHuePickerWidthChange} width={huePickerWidth} onHueChange={(x) => handleHueChange(x)} />
    </div>
  )
}
