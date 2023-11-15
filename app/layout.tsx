
"use client";
import '../styles/Layout.css'
import '../styles/formation.css'
import './globals.css'
import '../styles/accueil/home-part1.css'
import '../styles/accueil/home-part2.css'
import { Provide_redux } from "../Redux/provider";
import Navbar from '../components/navbar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provide_redux>
        <div className="layout-all">
        <Navbar/>
        <div className='layout-header'>
          <div className="layout-container">
        {children}
        </div>
        
        </div>
        </div>
        </Provide_redux>


      </body>
    </html>
  );
}
