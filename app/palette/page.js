'use client'

import { React, useState } from 'react';
import Palette from '../components/Palette';
import PaletteDrawer from '../components/PaletteDrawer';
import PaletteButtons from '../components/PaletteButtons';
import { HSBtoHSL } from '../utils/ConvertColors';
import Header from '../components/Header';

// Custom hook to control whether page shows the buttons or the drawer
function useToggleView(){
  const [view, setView] = useState("drawer");

  const showDrawer = () => {
    setView("drawer");
  }

  const showButtons = () => {
    setView("buttons");
  }

  return { view, showDrawer, showButtons };
}

// The page component
export default function PalettePage() {
  const { view, showDrawer, showButtons } = useToggleView();
  const [drawerIsClosing, setDrawerIsClosing] = useState(false);

  const [currentColorHSB, setCurrentColorHSB] = useState({hue: 0, sat: 0, bri: 0});
  const [currentColorHSL, setCurrentColorHSL] = useState({hue: 0, sat: 0, lig: 0});

  // Drawer open and close functions
  
  const closeDrawer = () => {
    setDrawerIsClosing(true);
    setTimeout(showButtons, 200); // Delay the onClose callback until after the animation
  }

  const openDrawer = () => {
    showDrawer();
    setTimeout(() => setDrawerIsClosing(false), 50);
  }

  const createBackgroundColor = () => openDrawer();
  const createForegroundColor = () => openDrawer();
  

  // Color change functions
  const handleColorChange = (type, a, b) => {  
    let hsl;

    // Changing hue 
    if (type==0){
      if (a == undefined) return;
      const hue = a;
      setCurrentColorHSB({hue: hue, sat: currentColorHSB.sat, bri: currentColorHSB.bri})
      hsl = HSBtoHSL(hue, currentColorHSB.sat, currentColorHSB.bri);
    }

    // Changing saturation and lightness
    if (type==1){
      if (a == undefined || b == undefined) return;
      const sat = a;
      const lig = 100-b;
      setCurrentColorHSB({hue: currentColorHSB.hue, sat: sat, bri: lig})
      hsl = HSBtoHSL(currentColorHSB.hue, sat, lig);
    }

    setCurrentColorHSL({hue: hsl.h, sat: hsl.s, lig: hsl.l})

    // console.log(currentColorHSB)
    // console.log(currentColorHSL)
    // console.log("----")

  }

  return (
    <div>
      <Header brightness={currentColorHSB.bri} />
      <div className="flex h-screen w-screen">
        <Palette currentColorHSL={currentColorHSL} currentColorHSB={currentColorHSB}  />
        <PaletteDrawer view={view} isClosing={drawerIsClosing} onClose={closeDrawer} 
          onColorChange={handleColorChange} currentColorHSB={currentColorHSB}  />
        { view === "buttons" ? <PaletteButtons brightness={currentColorHSB.bri} onBackgroundClick={createBackgroundColor} onForegroundClick={createForegroundColor}  /> : null} 
      </div>
    </div>
  );
}