'use client'

import { React, useState } from 'react';
import PaletteDisplay from '../components/PaletteDisplay';
import PaletteDrawer from '../components/PaletteDrawer';
import PaletteButtons from '../components/PaletteButtons';


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

  return (
    <div>
      <PaletteDisplay />
      <PaletteDrawer view={view} isClosing={drawerIsClosing} onClose={closeDrawer} />
      { view === "buttons" ? <PaletteButtons onBackgroundClick={createBackgroundColor}  onForegroundClick={createForegroundColor}  /> : null} 
    </div>
  );
}