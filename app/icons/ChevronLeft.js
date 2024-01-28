export default function ChevronLeft({clicker}){
  return(
    <div onClick={clicker} className="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="black" className="w-6 h-6 stroke-slate-400 hover:stroke-slate-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
      </svg>

    </div>
  )
}