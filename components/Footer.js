"use client";

import { connect } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image';

import Login from '../components/Login'
import Register from '../components/Register'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook ,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faLocationDot ,faPhone ,faMobilePhone ,faEnvelope ,faBank ,faMoneyBill} from "@fortawesome/free-solid-svg-icons";
const Footer = (props) => {
const aprops_footer={"FR":"Soladirité est une association à but non lucratif qui travaille pour améliorer la vie des enfants en difficulté en leur fournissant de l'aide alimentaire, l'accès à l'eau potable, l'éducation et la santé,en collaboration avec des partenaires locaux.",
"ENG": "Soladirité is a non-profit organization that works to improve the lives of children in need by providing them with food aid, access to clean water, education, and health care in collaboration with local partners.",
"DE": "Soladirité ist eine gemeinnützige Organisation, die sich dafür einsetzt, das Leben von benachteiligten Kindern durch verschiedene Programme wie Lebensmittelhilfe, Zugang zu sauberem Wasser, Bildung und Gesundheit zu verbessern und mit lokalen Partnern zusammenzuarbeiten."}

const info = {
  "Coor": {
      "FR": "Coordonnées bancaires",
      "ENG": "Bank details",
      "DE": "Bankverbindung"
  },
  "Contact": {
    "FR": "Coordonnées de contact",
    "ENG": "Contact Information",
    "DE": "Kontaktinformationen"
    },
  "Menu": {
    "FR": "Menu",
    "ENG": "Menu",
    "DE": "Menü"
},
"apropos": {
  "FR": "À propos",
  "ENG": "About",
  "DE": "Über uns"
}
}

const link_array = [
  {
    FR: [
      { id: 1, title: 'Accueil', to: '/' },
      { id: 2, title: 'Agir avec nous', to: '/agir' },
      { id: 3, title: 'Nos actions', to: '/actions' },
      { id: 4, title: 'Nous contacter', to: '/contact' }
    ],
    ENG: [
      { id: 1, title: 'Home', to: '/' },
      { id: 2, title: 'Act with us', to: '/agir'  },
      { id: 3, title: 'Our actions', to: '/actions' },
      { id: 4, title: 'Contact us', to: '/contact' }
    ],
    DE: [
      { id: 1, title: 'Startseite', to: '/' },
      { id: 2, title: 'Mit uns handeln', to: '/agir'  },
      { id: 3, title: 'Unsere Aktionen', to: '/actions'  },
      { id: 4, title: 'Kontaktiere uns', to: '/contact' }
    ]
  }
];
const clicked =(to_link)=>{


}
  return (
    
    <footer className="footer">
      {props.show_register_form &&    <Register/>}
      {props.show_login_form &&    <Login/>}
    <div className="footer-top">
      <div className='footer-top-1'>
        <div className='footer-description'>
          
            <div className='footer-aprops'>
                <h1>{info["apropos"]["FR"]}</h1>
                <p>{aprops_footer["FR"]}</p>
            </div>
          
        </div>
        <nav className="footer-menu">
                <h1>{info["Menu"]["FR"]}</h1>
                <ul>
                  {link_array[0]["FR"].map((item) => (
                    <li key={item.to}>
                      <Link className="footer-nav-link" href={item.to}  onClick={() => clicked(item.to)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              
              </nav>
        
        </div>

      
        <div className='footer-top-2'>
        
        <div className="footer-coordone">
              <h1>{info["Contact"]["FR"]}</h1>
                <ul>
                  <li><FontAwesomeIcon icon={faLocationDot}  className="footer-icon"/>xxxxx 5, xxxxx Boniswil (SUISSE)</li>
                  <li> +xx xx xxx xx xx </li>
                  <li>+xx xx xxx xx xx </li>
                  <li>solidarite@domaine.com</li>
                </ul>
               
              </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
      <div className='footer-logo-title'>
                  <div className="footer-logo">
              
                  
                  </div>
                  <div className="footer-title">
                            <h2>SOLIDARITé</h2>
                    </div> 
                    
            </div>
         
       
        <h4>Personne de référence : M. Xxxxx Xxxxxx, Président</h4>
      </div>
   
  </footer>
  
  );
  }
  



  const mapStateToProps = (state) => ({
 
    show_login_form:state.authreducer.show_login_form,
    show_register_form:state.authreducer.show_register_form,
  
  })
  
  const mapDispatchToProps = dispatch =>{
  return{
   
  }
  
  }
  

export default connect(mapStateToProps, mapDispatchToProps)( Footer)