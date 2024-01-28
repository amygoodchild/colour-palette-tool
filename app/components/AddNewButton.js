
export default function AddNewButton({label, onClick}){
  return(
    <div onClick={onClick} className="flex flex-col justify-center items-center group cursor-pointer">
      <div className="rounded-full w-min bg-white p-2 ring-white group-hover:ring-4 group-hover:ring-slate-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="black" className="w-6 h-6 stroke-slate-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <div className="text-center text-xs p-1 rounded group-hover:bg-slate-600">{label}</div>
    </div>
  )
}