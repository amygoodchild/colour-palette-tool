export default function Picker({xPos, yPos}){
  return(
    <div>
      <div className="w-4 h-4 rounded-full border-white border ring-2 ring-black cursor-pointer"
      style={{ position: 'relative',  'touchAction': `none`, left: `${xPos-8}px`, top: `${yPos-8}px` }}>
      </div>
    </div>
  )
}