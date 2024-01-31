import React from 'react';
import NumberDisplay from './NumberDisplay';

export default function HexNumbers({currentCol}){
  return (
    <div className="flex">
      <NumberDisplay value={currentCol} label={"Hex"} width={100} end={true} />
    </div>
  )
}