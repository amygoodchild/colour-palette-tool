'use client'

import {React, useState} from 'react';
import PaletteDrawerControls from './PaletteDrawerControls';

export default function PaletteDrawer({onClose}){
  const [drawerSize, setDrawerSize] = useState('standard');

  const handleSizeChange = (state) => {
    setDrawerSize(state); 
  };

  const handleClose = () => { 
    onClose();
  };

  const c ="transition-width duration-300 bg-white h-screen fixed z-10 right-0"

  const drawerClasses = {
    standard: c + " w-4/6",
    reduced: c + " w-1/3", 
  };

  return (
    <div className={drawerClasses[drawerSize]}>
      <PaletteDrawerControls drawerSize={drawerSize} onSizeChange={handleSizeChange}  onCloseDrawer={handleClose} />
    </div>
  )
}