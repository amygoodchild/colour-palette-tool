import Link from 'next/link';
import PaletteDisplay from '../components/PaletteDisplay';
import PaletteControlDrawer from '../components/PaletteControlDrawer';
import PaletteButtons from '../components/PaletteButtons';



export default function Palette() {
  return (
    <div>
      <PaletteDisplay />
      <PaletteControlDrawer />
      <PaletteButtons />
    </div>
  );
}