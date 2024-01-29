import React from 'react';
import "./globals.css";
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
      <body className={`h-screen bg-gradient-to-b from-bg-top to-bg-bottom ${raleway.className}`}>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
