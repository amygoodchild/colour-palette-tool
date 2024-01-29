import {React, useState, useEffect} from 'react';
import { useDrag } from '@use-gesture/react';
import { mapNumber, clampNumber } from '../../utils/Maths';

export default function Picker({xpos, xmin, xmax, ypos, ymin, ymax, width, height, onPosChange}){
  const [xPos, setxPos] = useState(xpos);
  const [yPos, setyPos] = useState(ypos);

  const [xVal, setxVal] = useState(mapNumber(xpos, 0, width, xmin, xmax));
  const [yVal, setyVal] = useState(mapNumber(ypos, 0, width, xmin, xmax));

  useEffect(() => {
    setxPos(xpos);
    setyPos(ypos);
  }, [height, width]);

  const handlePosChange = () => {
    onPosChange(xVal, yVal);
  }

  const bind = useDrag(({ down, movement: [mx, my], memo = {x: xPos, y: yPos} }) => {
    if(down){
      let newX = clampNumber(memo.x + mx, 0, width);
      setxPos(newX);

      let newY = clampNumber(memo.y + my, 0, height);
      if (height < 100) newY = 12;
      setyPos(newY);

      let newXval = mapNumber(newX, 0, width, xmin, xmax);
      setxVal(newXval);
  
      let newYval = mapNumber(newY, 0, height, ymin, ymax);
      setyVal(newYval);

      handlePosChange(newXval, newXval);
    }
    return memo;
  });

  return(
    <div className="w-4 h-4 rounded-full border-white border ring-2 ring-black cursor-pointer"
    style={{ position: 'relative',  'touchAction': `none`, left: `${xPos-8}px`, top: `${yPos-8}px` }}
      {...bind()}>
    </div>
  )
}