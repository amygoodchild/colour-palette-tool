'use client'

import { React, useState } from 'react';
import Palette from '../components/Palette';
import PaletteDrawer from '../components/PaletteDrawer';
import PaletteButtons from '../components/PaletteButtons';
import { HSBtoHSL } from '../utils/ConvertColors';
import Header from '../components/Header';
import { mapNumber, clampNumber } from '../utils/Maths';

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
  
  const handleHueChange = (hue) => {
    if (hue == undefined) return;

    hue = clampNumber(mapNumber(hue, 0, 100, 0, 360), 0, 360);

    setCurrentColorHSB({hue: hue, sat: currentColorHSB.sat, bri: currentColorHSB.bri})
    let hsl = HSBtoHSL(hue, currentColorHSB.sat, currentColorHSB.bri);

    setCurrentColorHSL({hue: hsl.h, sat: hsl.s, lig: hsl.l})
  }

  const handleSatBrichange = (sat, bri) => {
    bri = 100 - bri;
   
    setCurrentColorHSB({hue: currentColorHSB.hue, sat: sat, bri: bri})
    let hsl = HSBtoHSL(currentColorHSB.hue, sat, bri);
    setCurrentColorHSL({hue: hsl.h, sat: hsl.s, lig: hsl.l})
  }


  return (
    <div className="overflow-hidden">
      <Header paletteColor={currentColorHSB} />
      <div className="flex h-screen w-screen">
        <Palette currentColorHSL={currentColorHSL} currentColorHSB={currentColorHSB}  />
        
        <PaletteDrawer view={view} isClosing={drawerIsClosing} onClose={closeDrawer} 
                  currentColorHSB={currentColorHSB}  
          onHueChange={(x) => handleHueChange(x)} onSatBriChange={(sat, bri) => handleSatBrichange(sat, bri)}
          />
        { view === "buttons" ? <PaletteButtons brightness={currentColorHSB.bri} onBackgroundClick={createBackgroundColor} onForegroundClick={createForegroundColor}  /> : null} 
      </div>
    </div>
  );
}