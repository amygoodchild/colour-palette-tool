'use client'

import {React, useState} from 'react';
import PaletteDrawerControls from './PaletteDrawerControls';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorNumbers from './ColorNumbers/ColorNumbers';

export default function PaletteDrawer({view, isClosing, onClose, onHueChange, onSatBriChange, currentColorHSB, currentColorRGB, currentColorHex}){
  const [drawerSize, setDrawerSize] = useState('standard');
  
  const handleSizeChange = (state) => setDrawerSize(state); 

  // Setting up the class for different drawer states 
  const cl = constructClass(view, drawerSize, isClosing);
  
  return (
    <div className={cl}>
      <PaletteDrawerControls drawerSize={drawerSize} onSizeChange={handleSizeChange} onCloseDrawer={onClose}  />
      <ColorPicker currentColorHSB={currentColorHSB} 
        onHueChange={(hue) => onHueChange(hue)} 
        onSatBriChange={(sat, bri) => onSatBriChange(sat, bri)}
      />
      <ColorNumbers currentColorHSB={currentColorHSB} currentColorRGB={currentColorRGB} currentColorHex={currentColorHex} />
    </div>
  )
} 

function constructClass(view, drawerSize, isClosing){
  const baseClass ="DRAWER transition-all duration-400 bg-white h-screen p-5 border-l shadow-lg";
  const drawerWidth = drawerSize === 'standard' ? 'w-4/6' : 'w-1/3';
  const visibilityClass = view === 'buttons' ? 'hidden' : isClosing ? `${drawerWidth} -right-full` : `${drawerWidth} right-0`;
  return `${baseClass} ${visibilityClass}`;
}