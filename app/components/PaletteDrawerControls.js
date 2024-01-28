'use client'

import {React, useState} from 'react';
import ChevronRight from '../icons/ChevronRight';
import ChevronLeft from '../icons/ChevronLeft';
import Close from '../icons/Close';

export default function PaletteDrawerControls({ drawerSize, onSizeChange, onCloseDrawer }){
  return(
    <div className="flex justify-between w-full h-6 m-5 pr-5">
      <div className="LEFT flex gap-2">
        {
          drawerSize === 'standard' ? 
          <ChevronRight clicker={() => onSizeChange("reduced")} /> :
          <ChevronLeft clicker={() => onSizeChange("standard")} />
        }
      </div>
      <div className="RIGHT flex mr-5">
        <Close clicker={() => onCloseDrawer() } />
      </div>
    </div>
  )
}