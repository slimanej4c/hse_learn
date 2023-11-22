'use client';

import React, { useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { connect } from 'react-redux';
import Login from '../components/Login'
import { Show_Login_form_redux } from '../Redux';
import { Show_register_form_redux } from '../Redux';
import { Logout_redux } from '../Redux';
import { Login_store} from '../Redux';

const Navbar = (props) =>{
    
const[show_nav,setshow_nav]=useState(false)
const [open, setOpen] = useState(false);
const [nav_closed, setnav_closed] = useState("layout-nav");
const [nav_opened, setnav_opened] = useState("layout-nav");
const [is_login, setis_login] = useState(false);
const [per, setper] = useState(false);
const [show_model, setshow_model] = useState(true);
const [clickedd, setClickedd] = useState(false);
const [To_link, setTo_link] = useState(2000);
const [showNav, setShowNav] = useState(true);

const lastWord = "/";
useEffect(() => {

  
    setShowNav(true)
// Délai de 2 secondes avant d'afficher le composant de navigation
}, []);
useEffect(() => {
props.Login_store()
}, []);

useEffect(() => {
 
}, [props.is_login]);
useEffect(() => {
 
}, [props.show_login_form]);
useEffect(() => {
 
}, [props.show_register_form]);
const logout=() => {
  console.log('logout...')
  props.Logout_redux()
}


const clicked_mobile =()=>{
  
    {setOpen(!open)}
    setshow_nav(!show_nav)
    setnav_closed("layout-nav nav_closed")
    setnav_opened("layout-nav nav_opened")
  }
  const clicked =(to_link)=>{
    setshow_nav(!show_nav)
  
  }
  const MenuIcon = () => {
 
 

    return (
      <div className={`menu-icon ${open ? "open" : ""}`} onClick={() =>clicked_mobile()}>
        <div className="bar line1"></div>
        <div className="bar line2"></div>
        <div className="bar line3"></div>
      </div>
    );
  };
  
const link_array_logout = [
    {
      FR: [
        { id: 1, title: 'Acceuil', to: '/' },
        { id: 2, title: 'Formations', to: '/formation' },
        { id: 3, title: 'Service', to: '/service' },
        { id: 4, title: 'Contact', to: '/contact' },
        { id: 5, title: 'Login', to: '/login' },
       
      ],
      ENG: [
        { id: 1, title: 'Homee', to: '/' },
        { id: 2, title: 'Act with us', to: '/agir'  },
        { id: 3, title: 'Our actions', to: '/actions' },
        { id: 4, title: 'Contact us', to: '/contact' },
        { id: 5, title: 'Logout', to: '/login' }
      ],
     
    }
  ];
  const link_array_login = [
    {
      FR: [
        { id: 1, title: 'Acceuil', to: '/' },
        { id: 2, title: 'Formations', to: '/formation' },
        { id: 3, title: 'Service', to: '/service' },
        { id: 4, title: 'Contact', to: '/contact' },
        { id: 5, title: 'Logout', to: '/logout' },
       
      ],
      ENG: [
        { id: 1, title: 'Homee', to: '/' },
        { id: 2, title: 'Act with us', to: '/agir'  },
        { id: 3, title: 'Our actions', to: '/actions' },
        { id: 4, title: 'Contact us', to: '/contact' },
        { id: 5, title: 'Login', to: '/login' }
      ],
     
    }
  ];
 
  const menu=(link_array)=>{
    const contact_div="item-div contact"
    const other_div="item-div"
    const Show_form=()=>{
      console.log('show form ')
      props.Show_Login_form_redux()
    }
   return(

    <ul className="nav-ul">
          
             
   


                      {link_array[0]['FR'].map((item) => {
                        if (item.title==='Logout'){
                          return(
                            <div className="div-btn" key={item.id}>
                                <div className="div-btn-line" key={item.id} >
                                
                               </div>
                               <button onClick={()=>logout()}>Logout</button>
                       
                              </div>
                           

                          )
                        }
                        else if (item.title==='Login') {
                          return(
                            <div className="div-btn" key={item.id} >
                               <div className="div-btn-line" key={item.id} >
                                
                                </div>
                             <button onClick={()=>Show_form()}>S'identifier</button>
                       
                              </div>
                            

                          )
                        } 
                        else{
                          return(
                          <li
                          key={item.id}
                          className={ other_div}
                        >
                          <Link className={ "nav-link"} 
                          href={item.to} onClick={() => clicked(item.to)}>
                            {item.title}
                          </Link>
                        </li>
                        )
                        }
              
            })}
          
                </ul>
   )
  }
  //{is_login ?  menu(link_array_login)   : menu(link_array_logout)}
  // 
  const Nav=()=>{
   
    return(
      <nav className={show_nav ? nav_opened :nav_closed}>
      
   
     
     {  props.is_login ?  menu(link_array_login) :  menu(link_array_logout)}
      
   
   
     

        
        </nav>
    )
  }
  const texts_model = {
    FR: {
      title: 'Ce site utilise des cookies.',
      content: 'Ce site utilise des cookies. En continuant à utiliser ce site, vous consentez à l\'utilisation des cookies.',
      acceptButton: 'Accepter les cookies',
      continueButton: 'Continuer sans cookies'
    },
    ENG: {
      title: 'This site uses cookies.',
      content: 'This site uses cookies. By continuing to use this site, you consent to the use of cookies.',
      acceptButton: 'Accept cookies',
      continueButton: 'Continue without cookies'
    },
    DE: {
      title: 'Diese Website verwendet Cookies.',
      content: 'Diese Website verwendet Cookies. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.',
      acceptButton: 'Cookies akzeptieren',
      continueButton: 'Ohne Cookies fortfahren'
    }
  };
  const { title, content, acceptButton, continueButton } = texts_model['FR'];
return(
 
   
    <div className="layout-all">
       
       {showNav && Nav()}
       
       <div className="nav-logo" >
       <Image src={"/logo.png"} alt="logo_m" width={130} height={50} />
        </div>
              <div className="layout-nav-mobile">
             
                        {MenuIcon()}
                  
            </div>
    
      
      </div>

 
  )

}

const mapStateToProps = state => {

  return {
  
    
    is_login:state.authreducer.is_login,
    show_navbar:state.authreducer.show_navbar,
    show_login_form:state.authreducer.show_login_form,
    show_register_form:state.authreducer.show_register_form,


  
  }
}



const mapDispatchToProps = dispatch => {
  
  return {
   
    Logout_redux:()=>dispatch(Logout_redux()),
    Login_store:()=>dispatch( Login_store()),
    Show_Login_form_redux:()=>dispatch(Show_Login_form_redux()),
   
  
  }
}



export default  connect(
  mapStateToProps ,mapDispatchToProps
 
)( Navbar) 
