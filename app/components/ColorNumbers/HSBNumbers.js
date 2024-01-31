import React from 'react';
import NumberDisplay from './NumberDisplay';

export default function ColorNumbers({currentCol}){

  const {h, s, b} = currentCol;
  return (
    <div className="flex mr-6">
      <NumberDisplay value={h} label={"H"} />
      <NumberDisplay value={s} label={"S"} />
      <NumberDisplay value={b} label={"B"} end={true}  />
    </div>
  )
}