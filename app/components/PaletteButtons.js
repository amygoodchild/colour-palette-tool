import AddNewButton from './AddNewButton';

export default function PaletteButtons({currentColorHSB, onBackgroundClick, onForegroundClick}){

  return(
    <div className="h-screen flex flex-col items-end justify-center pr-4 fixed right-0 z-10">
      <div className="flex flex-col justify-center items-center gap-8">
        <AddNewButton label="background" paletteColor={currentColorHSB} onClick={onBackgroundClick} />
        <AddNewButton label="foreground" paletteColor={currentColorHSB} onClick={onForegroundClick} />
      </div>
    </div>
  )
}