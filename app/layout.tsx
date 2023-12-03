
"use client";
import '../styles/Layout.css'

import '../styles/footer.css'
import './globals.css'
import '../styles/home.css'
import '../styles/home/section1.css'
import '../styles/home/section2.css'
import '../styles/home/section3.css'
import '../styles/home/section4.css'
import '../styles/home/section5.css'
import '../styles/login.css'
import '../styles/slider_avis.css'
import { Provide_redux } from "../Redux/provider";
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>

  
  <title>Votre Titre</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

</head>
      <body>
        <Provide_redux>
        <div className="layout-all">
        <Navbar/>
       
        <div className='layout-header'>
          <div className="layout-container">
          
         
        {children}
        </div>
        
        </div>
     <Footer/>
        </div>
        </Provide_redux>


      </body>
    </html>
  );
}
