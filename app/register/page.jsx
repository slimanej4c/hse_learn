
"use client"
import React ,{useState} from 'react'
import {Register_redux} from '../../Redux'
import {connect} from 'react-redux'
function register(props) {
    const [formedata,setformedata]=useState({username:'',password:'',re_password:''})
    const {username,password,re_password}=formedata
    const onChange=e=>{ setformedata({...formedata , [e.target.name]:e.target.value})}
    const onSubmit=(e)=>{
        e.preventDefault()
        props.Register_redux(username,password,re_password)
        console.log(username,password,re_password)

    }
  return (
    <div>
        
       
        
        <form onSubmit={e=>onSubmit(e)}>

            <div>
                 <label>Username</label>
                 <input name='username' value= {username} type='email' onChange={e=>onChange(e)} />
            </div>

            <div>
                 <label>Password</label>
                 <input name='password' value={password} type='password' onChange={e=>onChange(e)}/>
            </div>

            <div>
                 <label>Password</label>
                 <input name='re_password' value={re_password} type='password' onChange={e=>onChange(e)}/>
            </div>

            <div>
               
                 <input type='submit' />
            </div>
    </form>
        
        
        
        </div>
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
      Register_redux:(username,password,re_password)=>dispatch(Register_redux(username,password,re_password))
     // ClearSectionInfo :()=>dispatch(ClearSectionInfo()),
      
    }
  }
  
  
export default  connect(
    mapStateToProps ,mapDispatchToProps
   
  )( register) 