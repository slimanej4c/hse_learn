'use client';
import React, { useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Login_redux } from '../Redux';
import Image from 'next/image'
import { Show_Login_form_redux } from '../Redux';
import { Show_register_form_redux } from '../Redux';
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      
    }, [props.error_login]);
    useEffect(() => {
      
    }, [props.show_loading_auth]);
    const handleSubmit = (e) => {
      e.preventDefault();
      props.Login_redux(username,password)
      // Vous pouvez ajouter ici la logique de gestion de la soumission du formulaire
      console.log('Nom d\'utilisateur:', username);
      console.log('Mot de passe:', password);
    };
  
    const Loadding = () => {
      return(
          <div  className="login-laoding" >
                            <div  className="login-laoding-div" >
                                    
                                  <div  className="login-laoding-cyrcle" >
                                          
                                          
                                </div>
                          </div>
                          
                  </div>
      )
    };

    return (
      <form onSubmit={handleSubmit} className='login-form'>
         
        <div className="login-sous-form" >
           <div className="sous-form" >
           {props.show_loading_auth && Loadding()}
              
               <div  className="exit" >
                  <div onClick={()=>props.Show_Login_form_redux()} className="exit" >
                  <h1 >x</h1>
                    </div>
                </div>
                <div className="form-logo" >
              <Image src={"/logo.png"} alt="logo_m" width={130} height={50} />
                </div>

                <div className='form-input'>
                 
                  <input
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className='form-input'>
                 
                  <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {!props.show_loading_auth &&  <p className='login-error'> {props.error_login}</p>}
                <button type="submit">Se connecter</button>

                <div className='form-compte'>
                <p>
                Vous n'avez pas de compte ?{' '}
                <a href="#" onClick={()=>props.Show_register_form_redux()}>
                  Créer un compte
                </a>
              </p>
              </div>
          </div>
      </div>
    </form>
    );
}


const mapStateToProps = state => {

    return {
    
      
      username :state.authreducer.username_login,
      password :state.authreducer.password_login,
     
      show_loading_auth:state.authreducer.show_loading_auth,
      error_login:state.authreducer.error_login,
  
    
    }
  }
  
  
  
  const mapDispatchToProps = dispatch => {
    
    return {
      Login_redux:(username,password)=>dispatch(Login_redux(username,password)),
     // ClearSectionInfo :()=>dispatch(ClearSectionInfo()),
     Show_Login_form_redux:()=>dispatch(Show_Login_form_redux()),
     Show_register_form_redux:()=>dispatch(Show_register_form_redux()),
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Login)