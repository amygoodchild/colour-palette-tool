'use client'

import {React, useState} from 'react';
import PaletteDrawerControls from './PaletteDrawerControls';
import ColorPicker from './ColorPicker/ColorPicker';

export default function PaletteDrawer({view, isClosing, onClose, onHueChange, onSatBriChange, currentColorHSB}){
  const [drawerSize, setDrawerSize] = useState('standard');
  
  const handleSizeChange = (state) => setDrawerSize(state); 

  // Setting up the class for different drawer states 
  const cl = constructClass(view, drawerSize, isClosing);

  // const handleColorChange = (hue, sat, bri) => {
  //   onColorChange(Math.floor(hue), Math.floor(sat), Math.floor(bri));
  // }

  return (
    <div className={cl}>
      <PaletteDrawerControls drawerSize={drawerSize} onSizeChange={handleSizeChange} onCloseDrawer={onClose}  />
      <ColorPicker currentColorHSB={currentColorHSB} 
        onHueChange={(hue) => onHueChange(hue)} 
        onSatBriChange={(sat, bri) => onSatBriChange(sat, bri)}
 
      />
    </div>
  )
} 

function constructClass(view, drawerSize, isClosing){
  const baseClass ="DRAWER transition-all duration-400 bg-white h-screen p-5";
  const drawerWidth = drawerSize === 'standard' ? 'w-4/6' : 'w-1/3';
  const visibilityClass = view === 'buttons' ? 'hidden' : isClosing ? `${drawerWidth} -right-full` : `${drawerWidth} right-0`;
  return `${baseClass} ${visibilityClass}`;
}