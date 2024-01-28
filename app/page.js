import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="INTRO h-screen flex flex-col items-left justify-center pl-20 pb-10">
      <h1 className="text-5xl font-sans font-bold text-primary mb-3">Shapeshift your palettes</h1>
      <p className="text-xl font-light">Arrange colours to see how they look <span className="font-bold">together</span>,<br />
      then export <span className="font-bold">customised</span> code</p>
      
      <Link href="/palette" className="w-fit bg-primary hover:bg-primary-up hover:ring-4 ring-primary-down text-dark-grey py-2.5 px-6 rounded mt-4">Create a palette</Link>
    </div>
  );
}