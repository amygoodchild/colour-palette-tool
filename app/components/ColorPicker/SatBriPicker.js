import { React, useState, useRef, useEffect } from 'react';
import Picker from './Picker';
import { useMeasure } from "@uidotdev/usehooks";
import { mapNumber, clampNumber } from '../../utils/Maths';

export default function SatBriPicker({ hue, onSatBriChange}) {
  const xStart = 0;
  const yStart = 100;

  const [satBriPickerRef, { width, height }] = useMeasure();

  const [heightToUse, setHeightToUse] = useState(height);

  const divRef = useRef(null);  // To get the top and left position of the div
  const [isDragging, setIsDragging] = useState(false);

  const [xPos, setxPos] = useState(xStart);
  const [yPos, setyPos] = useState(yStart);

  const savedWidth = useRef(width);
  const savedHeight = useRef(height);

  // Handle height and width changes
  useEffect(() => {
    if (savedWidth.current == null || savedHeight.current == null) {
      // Width and height hasn't been saved, so this is the first render

      let newHeight = clampNumber(width*0.75, 0, window.innerHeight*0.5);
      setHeightToUse(newHeight);

      let newX = mapNumber(xStart, 0, 100, 0, width);
      let newY = mapNumber(100, 0, 100, 0, newHeight);

      setxPos(newX);
      setyPos(newY);
    }
    else{
      // Width or height actually changed
      let newX = mapNumber(xPos, 0, savedWidth.current, 0, width);
      let newY = mapNumber(yPos, 0, savedHeight.current, 0, height);

      setxPos(newX);
      setyPos(newY);

      let newHeight = clampNumber(width*0.75, 0, window.innerHeight*0.5);
      setHeightToUse(newHeight);
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
    const y = clampNumber(event.clientY - rect.top, 0, height);

    setxPos(x);
    setyPos(y);

    let newX = mapNumber(x, 0, width, 0, 100);
    let newY = mapNumber(y, 0, height, 0, 100);

    onSatBriChange(newX, newY);
  }

  return(
    <div ref={satBriPickerRef}>
      { height == null ? null: 
        <div ref={divRef} className="w-full rounded-lg cursor-pointer" style={{
          height: `${heightToUse}px`,
          background: `
          linear-gradient(
              0deg, 
              hsl(0, 0%, 0%), transparent
            ),
            linear-gradient(
              90deg, 
              hsl(0, 100%, 100%), hsl(${hue}, 100%, 50%)
            )`,
            
          }} 
          onMouseDown={(e) => handleMouseDown(e)} 
        >

        <Picker xPos={xPos} yPos={yPos} />
      
        </div>
      }
    </div>
  )
}