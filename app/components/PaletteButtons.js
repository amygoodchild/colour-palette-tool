import AddNewButton from './AddNewButton';

export default function PaletteButtons({brightness, onBackgroundClick, onForegroundClick}){
  return(
    <div className="h-screen flex flex-col items-end justify-center pr-4 fixed right-0 z-10">
      <div className="flex flex-col justify-center items-center gap-8">
        <AddNewButton label="background" brightness={brightness} onClick={onBackgroundClick} />
        <AddNewButton label="foreground" brightness={brightness} onClick={onForegroundClick} />
      </div>
    </div>
  )
}