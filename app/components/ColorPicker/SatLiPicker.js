

export default function SatLiPicker({ hue, sat, lig }) {
  return(
    <div>
      <div className="w-full h-96 rounded-lg" style={{
        background: `
        linear-gradient(
            0deg, 
            hsl(0, 0%, 0%), transparent
          ),
          linear-gradient(
            90deg, 
            hsl(0, 100%, 100%), hsl(${hue}, 100%, 50%)
          )`,
          
        }}>

      </div>
    </div>
  )
}