import "./globals.css";
import Link from 'next/link';
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata = {
  title: "Dev - Palette creator",
  description: "A tool for creating colour palettes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen bg-gradient-to-b from-bg-top to-bg-bottom text-white ${raleway.className}`}>
        {/* Header */} 
        <div className="fixed top-5 left-5 flex z-20 justify-center content-left">
          {/* Hamburger */} 
          <Link href="/" className="p-1.5 space-y-1 mr-2">
            <span className="block h-0.5 w-5 bg-white rounded-md"></span>
            <span className="block h-0.5 w-5 bg-white rounded-md"></span>
            <span className="block h-0.5 w-5 bg-white rounded-md"></span>
          </Link>

          {/* Logo */} 
          <div className="pt-px font-light">Good at Palettes</div>
        </div>

        <div className="content">{children}</div>
      
        </body>
    </html>
  );
}
