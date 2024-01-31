import { Red_Hat_Mono } from "next/font/google";

const redhat = Red_Hat_Mono({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: '400',
});

export default function NumberDisplay({value, label, end, width}){
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  if (width === undefined) width = '50px';
 
  return(
    <div>
      <div className="text-sm select-none text-slate-600 ml-1">{label}</div>
      <input className={`border border-slate-400 text-md text-slate-600 px-2 py-1 rounded ${redhat.className}`} value={value} onChange={handleChange}
        style={{width: width, 'marginRight': end ? '0px' : '8px'}}
      />
    </div>
  )
}