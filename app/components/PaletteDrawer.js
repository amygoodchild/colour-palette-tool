'use client'

import {React, useState} from 'react';
import PaletteDrawerControls from './PaletteDrawerControls';

export default function PaletteDrawer({view, isClosing, onClose}){
  const [drawerSize, setDrawerSize] = useState('standard');
  
  const handleSizeChange = (state) => setDrawerSize(state); 

  const baseClass ="DRAWER transition-all duration-400 bg-white h-screen fixed z-10";

  const drawerWidth = drawerSize === 'standard' ? 'w-4/6' : 'w-1/3';
  const visibilityClass = view === 'buttons' ? 'hidden' : isClosing ? `${drawerWidth} -right-full` : `${drawerWidth} right-0`;

  const cl = `${baseClass} ${visibilityClass}`;

  return (
    <div className={cl}>
      <PaletteDrawerControls drawerSize={drawerSize} onSizeChange={handleSizeChange} onCloseDrawer={onClose} />
    </div>
  )
} 