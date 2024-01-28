
import { React, useRef, useEffect } from 'react';
import Picker from './Picker';

export default function HuePicker({ hue, onWidthChange, width, onHueChange}) {
  const huePickerRef = useRef(null);

  useEffect(() => {
    if(huePickerRef.current){
      onWidthChange(huePickerRef.current.offsetWidth);
    }
  }, [huePickerRef, onWidthChange]);

  const handleHueChange = (x, y) =>{
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

        <Picker xpos={0} xmin={0} xmax={360} ypos={0} ymin={0} ymax={0} width={width} height={0} onPosChange={(x, y) => handleHueChange(x)} />
      </div>
    </div>
  )
}