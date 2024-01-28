'use client'

import { React, useState } from 'react';
import PaletteDisplay from '../components/PaletteDisplay';
import PaletteDrawer from '../components/PaletteDrawer';
import PaletteButtons from '../components/PaletteButtons';


// Custom hook to control whether page shows the buttons or the drawer
function useToggleView(){
  const [view, setView] = useState("drawer");

  const showDrawer = () => setView("drawer");
  const showButtons = () => setView("buttons");

  return { view, showDrawer, showButtons };
}

export default function PalettePage() {
  const { view, showDrawer, showButtons } = useToggleView();

  const createBackgroundColor = () => {
    showDrawer();
  }

  const createForegroundColor = () => {
    showDrawer();
  }

  return (
    <div>
      <PaletteDisplay />
      { view === "drawer" ? <PaletteDrawer onClose={showButtons} /> : null }
      { view === "buttons" ? <PaletteButtons onBackgroundClick={createBackgroundColor}  onForegroundClick={createForegroundColor} /> : null}
    </div>
  );
}