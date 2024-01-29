import { React } from 'react';
import Picker from './Picker';
import { useMeasure } from "@uidotdev/usehooks";

export default function HuePicker({ onHueChange}) {

  const [huePickerRef, { width, height }] = useMeasure();

  const handleHueChange = (x) =>{
    onHueChange(x);
  }
  
  return(
    <div ref={huePickerRef}>
      <div 
        className="w-full h-6 rounded-lg mt-4"
        style={{
          background: `
            linear-gradient(to right, 
              rgb(255, 0, 0) 0%, 
              rgb(255, 255, 0) 17%, 
              rgb(0, 255, 0) 33%, 
              rgb(0, 255, 255) 50%, 
              rgb(0, 0, 255) 67%, 
              rgb(255, 0, 255) 83%, 
              rgb(255, 0, 0) 100%)`
          }}
       >

        <Picker xStart={0} yStart={12} width={width} height={0} onPosChange={(x, y) => handleHueChange(x)} />
      </div>
    </div>
  )
}