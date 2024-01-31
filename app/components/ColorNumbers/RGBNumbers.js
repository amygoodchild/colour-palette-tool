import React from 'react';
import NumberDisplay from './NumberDisplay';

export default function ColorNumbers({currentCol}){
  return (
    <div className="flex mr-6">
      <NumberDisplay value={currentCol.r} label={"R"} />
      <NumberDisplay value={currentCol.g} label={"G"} />
      <NumberDisplay value={currentCol.b} label={"B"} end={true} />
    </div>
  )
}