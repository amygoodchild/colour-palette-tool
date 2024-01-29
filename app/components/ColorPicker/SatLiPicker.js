
import { React, useState, useRef, useEffect } from 'react';
import Picker from './Picker';

export default function SatLiPicker({ hue, onSatLiChange }) {
  const satLiPickerRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if(satLiPickerRef.current){
      setWidth(satLiPickerRef.current.offsetWidth);
      setHeight(satLiPickerRef.current.offsetHeight);
    }
  }, [satLiPickerRef]);

  const handleSatLiChange = (x, y) =>{
    onSatLiChange(x, y);
  }


  return(
    <div ref={satLiPickerRef}>
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
      <Picker xpos={0} xmin={0} xmax={100} ypos={height} ymin={0} ymax={100} width={width} height={height} onPosChange={(x, y) => handleSatLiChange(x, y)} />
    
      </div>
    </div>
  )
}