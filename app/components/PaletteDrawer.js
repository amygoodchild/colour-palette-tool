'use client'

import {React, useState} from 'react';
import PaletteDrawerControls from './PaletteDrawerControls';
import ColorPicker from './ColorPicker/ColorPicker';

export default function PaletteDrawer({view, isClosing, onClose}){
  const [drawerSize, setDrawerSize] = useState('standard');
  
  const handleSizeChange = (state) => setDrawerSize(state); 

  // Setting up the class for different drawer states 
  const cl = constructClass(view, drawerSize, isClosing);

  return (
    <div className={cl}>
      <PaletteDrawerControls drawerSize={drawerSize} onSizeChange={handleSizeChange} onCloseDrawer={onClose} />
      <ColorPicker />
    </div>
  )
} 

function constructClass(view, drawerSize, isClosing){
  const baseClass ="DRAWER transition-all duration-400 bg-white h-screen fixed z-10 p-5";
  const drawerWidth = drawerSize === 'standard' ? 'w-1/2' : 'w-1/3';
  const visibilityClass = view === 'buttons' ? 'hidden' : isClosing ? `${drawerWidth} -right-full` : `${drawerWidth} right-0`;
  return `${baseClass} ${visibilityClass}`;
}