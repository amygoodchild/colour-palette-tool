export default function PaletteControlDrawer(){
  return (
    <div className="bg-white h-screen w-1/2 fixed z-10 right-0">
      <div className="flex justify-between w-full h-6 m-5 pr-5">
        <div className="LEFT flex gap-2">
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="black" className="w-6 h-6 stroke-slate-400 hover:stroke-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="black" className="w-6 h-6 stroke-slate-400 hover:stroke-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>

          </div>
        </div>
        <div className="RIGHT flex mr-5">
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="black" className="w-6 h-6 stroke-slate-400 hover:stroke-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}