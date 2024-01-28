import {React, useState, useEffect} from 'react';
import { useDrag } from '@use-gesture/react';

export default function Picker({xpos, xmin, xmax, ypos, ymin, ymax, width, height, onPosChange}){
  const [xPos, setxPos] = useState(xpos);
  const [yPos, setyPos] = useState(ypos);

  const [xVal, setxVal] = useState();
  const [yVal, setyVal] = useState();

  const xRange = xmax - xmin;
  const yRange = ymax - ymin;

  useEffect(() => {
    let newXval = (xRange * (xPos / 100));
    if (newXval < 0 || newXval== NaN) newXval = 0;
    setxVal(newXval);

    let newYval = (yRange * (yPos / 100));
    if (newYval < 0 || newYval== NaN) newYval = 0;
    setyVal(newYval);

    handlePosChange(xVal, yVal);
  });

  const handlePosChange = () => {
    onPosChange(xVal, yVal);
  }

  const bind = useDrag(({ down, movement: [mx, my], memo = {x: xPos, y: yPos} }) => {
    if(down){
      let newX = memo.x + (mx / width) * 100;
      newX = Math.max(0, Math.min(newX, 100)); 
      setxPos(newX);
      setyPos(memo.y + (my / height) * 100);
    }
    return memo;
  });

  return(
    <div className="w-6 h-6 rounded-full ring-2 ring-black cursor-pointer"
    style={{ position: 'relative', left: `calc(${xPos}% - 10px`, top: `${yPos}px` }}
      {...bind()}>
    </div>
  )
}