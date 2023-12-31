'use client';
import React ,{  useState } from 'react'
import { connect } from 'react-redux'
import { Login_redux } from '../../Redux';
import Image from 'next/image';

export const login = (props) => {
 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.Login_redux(username,password)
      // Vous pouvez ajouter ici la logique de gestion de la soumission du formulaire
      console.log('Nom d\'utilisateur:', username);
      console.log('Mot de passe:', password);
    };
  
    return (
      <form onSubmit={handleSubmit} className='login-form'>
        <div className="login-logo" >
       <Image src={"/logo.png"} alt="logo_m" width={130} height={50} />
        </div>
        <div>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
        <div>
        <p>
        Vous n'avez pas de compte ?{' '}
        <a href="#" onClick={null}>
          Créer un compte
        </a>
      </p>
      </div>
      </form>
    );
}


const mapStateToProps = state => {

    return {
    
      
      username :state.authreducer.username_login,
      password :state.authreducer.password_login,
      error :state.authreducer.error_login,
 
  
    
    }
  }
  
  
  
  const mapDispatchToProps = dispatch => {
    
    return {
      Login_redux:(username,password)=>dispatch(Login_redux(username,password))
     // ClearSectionInfo :()=>dispatch(ClearSectionInfo()),
      
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(login)