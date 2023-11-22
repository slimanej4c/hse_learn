
"use client"
import React ,{useState} from 'react'
import Image from 'next/image'
import {connect} from 'react-redux'
import { Show_register_form_redux } from '../Redux';
import { Show_Login_form_redux } from '../Redux';
function Register(props) {
    const [formedata,setformedata]=useState({username:'',password:'',re_password:''})
    const {username,password,re_password}=formedata
    const onChange=e=>{ setformedata({...formedata , [e.target.name]:e.target.value})}
    const onSubmit=(e)=>{
        e.preventDefault()
        props.Register_redux(username,password,re_password)
        console.log(username,password,re_password)

    }
  return (
    <form onSubmit={e=>onSubmit(e)} className='login-form'>
    <div className="login-sous-form" >
       <div className="sous-form" >
           <div  className="exit" >
              <div onClick={()=>props.Show_register_form_redux()} className="exit-btn" >
              <h1 >x</h1>
                </div>
            </div>
            <div className="form-logo" >
          <Image src={"/logo.png"} alt="logo_m" width={130} height={50} />
            </div>

            <div className='form-input'>
             
            <input name='username' 
            value= {username} type='email' 
            placeholder='email'
            onChange={e=>onChange(e)} />
            </div>

            <div className='form-input'>
             
            <input name='password' 
            value={password} type='password'
            placeholder='password'
             onChange={e=>onChange(e)}/>
            </div>
            <div className='form-input'>
             
            <input name='re_password' 
            value={re_password} type='password' 
            placeholder='confirm password'
            onChange={e=>onChange(e)}/>
            </div>
            <button type="submit">Inscrire</button>

            <div className='form-compte'>
            <p>
            J'ai un compte {' '}
            <a href="#" onClick={()=>props.Show_Login_form_redux()}>
            connecté
            </a>
          </p>
          </div>
            </div>

            
      </div>

</form>
    
  )
}

const mapStateToProps = state => {

    return {
    
      
      username :state.authreducer.username_register,
      password :state.authreducer.password_register,
      er_password :state.authreducer.re_password_register,
 
  
    
    }
  }
  
  
  
  const mapDispatchToProps = dispatch => {
    
    return {
      Register_redux:(username,password,re_password)=>dispatch(Register_redux(username,password,re_password)),
     // ClearSectionInfo :()=>dispatch(ClearSectionInfo()),
     Show_register_form_redux:()=>dispatch(Show_register_form_redux()),
     Show_Login_form_redux:()=>dispatch(Show_Login_form_redux()),
    }
  }
  
  
export default  connect(
    mapStateToProps ,mapDispatchToProps
   
  )( Register) 