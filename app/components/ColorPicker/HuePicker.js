import { React, useRef, useEffect, useState } from 'react';
import Picker from './Picker';
import { useMeasure } from "@uidotdev/usehooks";
import { mapNumber, clampNumber } from '../../utils/Maths';

export default function HuePicker({onHueChange}) {
  const xStart = 0;
  const yStart = 12;

  const [huePickerRef, { width, height }] = useMeasure();

  const divRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const [xPos, setxPos] = useState(xStart);
  const [yPos, setyPos] = useState(yStart);

  const savedWidth = useRef(width);
  const savedHeight = useRef(height);

  // Handle height and width changes
  useEffect(() => {
    if (savedWidth.current == null || savedHeight.current == null) {
      // Width and height hasn't been saved, so this is the first render
      let newX = mapNumber(xStart, 0, 100, 0, width);
      let newY = 12;

      setxPos(newX);
      setyPos(newY);
    }
    else{
      // Width or height actually changed
      let newX = mapNumber(xPos, 0, savedWidth.current, 0, width);
      let newY = 12;

      setxPos(newX);
      setyPos(newY);
    }

    savedWidth.current = width;
    savedHeight.current = height;

  }, [height, width]);

  // Mouse down inside the element
  const handleMouseDown = (event) => {
    setIsDragging(true);
    trackPosition(event);
  }

  // Mouse move anywhere (to capture if the mouse is outside the element)
  useEffect(() => {
    function handleMouseMove(event) {
      if (isDragging) trackPosition(event);
    }

    window.addEventListener('mousemove', handleMouseMove);


    return () => { // Clean up
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isDragging]);

  // Mouse up anywhere
  useEffect(() => {
    function handleMouseUp(event) {
      setIsDragging(false);
    }

    window.addEventListener('mouseup', handleMouseUp);

    return () => { // Clean up
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, []);

  const trackPosition = (event) =>{
    const rect = divRef.current.getBoundingClientRect();

    const x = clampNumber(event.clientX - rect.left, 0, width);
    setxPos(x);

    let newX = mapNumber(x, 0, width, 0, 100);
    onHueChange(newX);
  }

  return(
    <div ref={huePickerRef}>
      { height == null ? null: 
      <div ref={divRef}  
        className="w-full h-6 rounded-lg mt-4 cursor-pointer"
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

          onMouseDown={handleMouseDown} 
       >
        <Picker xPos={xPos} yPos={yPos} />
      </div>
      }
    </div>
  )
}