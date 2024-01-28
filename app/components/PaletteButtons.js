import AddNewButton from './AddNewButton';

export default function PaletteButtons({onBackgroundClick, onForegroundClick}){
  return(
    <div className="h-screen flex flex-col items-end justify-center pr-4">
      <div className="flex flex-col justify-center items-center gap-8">
        <AddNewButton label="background" onClick={onBackgroundClick} />
        <AddNewButton label="foreground" onClick={onForegroundClick} />
      </div>
    </div>
  )
}