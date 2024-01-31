'use client'

import { React, useState } from 'react';
import Palette from '../components/Palette';
import PaletteDrawer from '../components/PaletteDrawer';
import PaletteButtons from '../components/PaletteButtons';
import { HSBtoHSL, HSBtoRGB, HSBtoHex } from '../utils/ConvertColors';
import Header from '../components/Header';
import { mapNumber, clampNumber, floorAll } from '../utils/Maths';

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

  const [currentColorHSB, setCurrentColorHSB] = useState({h: 0, s: 0, b: 0});
  const [currentColorHSL, setCurrentColorHSL] = useState({h: 0, s: 0, l: 0});
  const [currentColorRGB, setCurrentColorRGB] = useState({r: 0, g: 0, b: 0});
  const [currentColorHex, setCurrentColorHex] = useState("#000000");

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

    setAllColorMediums({h: hue, s: currentColorHSB.s, b: currentColorHSB.b})
  }

  const handleSatBrichange = (sat, bri) => {
    bri = 100 - bri;
    setAllColorMediums({h: currentColorHSB.h, s: sat, b:bri});
  }

  const setAllColorMediums = (newHSB) => {
    let hsb = floorAll(newHSB);
    setCurrentColorHSB({h: hsb.h, s: hsb.s, b: hsb.b});

    let hsl = floorAll(HSBtoHSL(newHSB.h, newHSB.s, newHSB.b));
    setCurrentColorHSL({h: hsl.h, s: hsl.s, l: hsl.l})

    let rgb = floorAll(HSBtoRGB(newHSB.h, newHSB.s, newHSB.b));
    setCurrentColorRGB({r: rgb.r, g: rgb.g, b: rgb.b})

    let hex = HSBtoHex(rgb.r, rgb.g, rgb.b).toUpperCase();
    setCurrentColorHex(hex);
  }

  return (
    <div className="overflow-hidden">
      <Header paletteColor={currentColorHSB} />
      <div className="flex h-screen w-screen">
        <Palette currentColorHSL={currentColorHSL} currentColorHSB={currentColorHSB}  />
        
        <PaletteDrawer view={view} isClosing={drawerIsClosing} onClose={closeDrawer} 
          currentColorHSB={currentColorHSB}  currentColorHSL={currentColorHSL} currentColorRGB={currentColorRGB} currentColorHex={currentColorHex}
          onHueChange={(x) => handleHueChange(x)} onSatBriChange={(sat, bri) => handleSatBrichange(sat, bri)}
          />
        { view === "buttons" ? <PaletteButtons currentColorHSB={currentColorHSB} onBackgroundClick={createBackgroundColor} onForegroundClick={createForegroundColor}  /> : null} 
      </div>
    </div>
  );
}