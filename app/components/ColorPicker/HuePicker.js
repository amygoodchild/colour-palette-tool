
import { React, useState, useRef, useEffect } from 'react';
import Picker from './Picker';

export default function HuePicker({ onHueChange}) {
  const huePickerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(huePickerRef.current){
      setWidth(huePickerRef.current.offsetWidth);
    }
  }, [huePickerRef]);

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

        <Picker xpos={0} xmin={0} xmax={360} ypos={12} ymin={0} ymax={0} width={width} height={0} onPosChange={(x, y) => handleHueChange(x)} />
      </div>
    </div>
  )
}