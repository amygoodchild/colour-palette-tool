import {React, useState, useEffect, useRef} from 'react';
import { useDrag } from '@use-gesture/react';
import { mapNumber, clampNumber } from '../../utils/Maths';

export default function Picker({xStart, yStart, width, height, onPosChange}){
  const [xPos, setxPos] = useState(xStart);
  const [yPos, setyPos] = useState(yStart);

  const savedWidth = useRef(width);
  const savedHeight = useRef(height);

  useEffect(() => {
    if (savedWidth.current === width && savedHeight.current === height) return;
    if (savedWidth.current == null || savedHeight.current == null) {
      // Width and height are null, so this is the first render
      let newX = mapNumber(xStart, 0, 100, 0, width);
      let newY = mapNumber(yStart, 0, 100, 0, height);

      if (yStart == 12) newY = 12;

      setxPos(newX);
      setyPos(newY);
    }
    else{
      // Width or height actually changed 
      let newX = mapNumber(xPos, 0, savedWidth.current, 0, width);
      let newY = mapNumber(yPos, 0, savedHeight.current, 0, height);

      setxPos(newX);
      setyPos(newY); 
    }

    savedWidth.current = width;
      savedHeight.current = height;

  }, [height, width]);

  const bind = useDrag(({ down, movement: [mx, my], memo = {x: xPos, y: yPos} }) => {
    if(down){
      let newX = clampNumber(memo.x + mx, 0, width);
      setxPos(newX);

      let newY = clampNumber(memo.y + my, 0, height);
      if (height < 100) newY = 12; // For the hue picker, it doesn't use Y
      setyPos(newY);

      let normX = mapNumber(newX, 0, width, 0, 100);
      let normY = mapNumber(newY, 0, height, 0, 100);

      onPosChange(normX, normY);
    }
    return memo;
  });

  return(
    <div>
      <div className="w-4 h-4 rounded-full border-white border ring-2 ring-black cursor-pointer"
      style={{ position: 'relative',  'touchAction': `none`, left: `${xPos-8}px`, top: `${yPos-8}px` }}
        {...bind()}>
      </div>
    </div>
  )
}