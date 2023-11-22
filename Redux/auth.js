const SET_CURRENT_IMAGE= 'SET_CURRENT_IMAGE'
const SET_REGISTER_FORM= 'SET_REGISTER_FORM'
const SET_LOGIN_FORM= 'SET_LOGIN_FORM'
import {

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    
    LOGIN_RESET,
  
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,

    STORE_SUCCESS,
   STORE_FAILURE
  } from './type'
  
  import axios from 'axios';
  //import Cookies from 'js-cookie';
  import localStorage from 'redux-persist/lib/storage';
  import AsyncStorage from 'redux-persist/lib/storage';
  


export const Login_redux = (username, password ) => async dispatch => {


    console.log('redux login',username,password)
    
    dispatch(LoginRequest())
    const config = {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           //'X-CSRFToken': Cookies.get('csrftoken')
         
       }
    };
    
    const body = JSON.stringify({ username, password });
      
    try {
       //axios.defaults.xsrfHeaderName = "X-CSRFToken";
       //axios.defaults.xsrfCookieName = "csrftoken";
       //axios.defaults.withCredentials = true;
       const res = await axios.post('http://localhost:8000/blog/login', body, config);
    
       if (res.data.error) {
           dispatch(LoginFailure(res.data.error))
           console.log(res.data.error)
       } else {
           dispatch(LoginSuccess(username,password))
           localStorage.setItem('is_login', true);
       }
    } catch (err) {
       console.log('etape error',err.message)
       dispatch(LoginFailure(err.message))
    }
    
    
    }
    
    export const LoginRequest = () => {
      return {
        type: LOGIN_REQUEST ,
    
      }
    }
    
    export const LoginSuccess = (username,password) => {
      return {
        type: LOGIN_SUCCESS ,
        setusername_login:username,
        setpassword_login:password,
       
      }
    }
    
    
    export const LoginFailure = (error) => {
      return {
        type: LOGIN_FAILED ,
        seterror_login:error
       
      }
    }

    
export const Register_redux = (username, password ,re_password) => async dispatch => {


    console.log('redux',username,password,re_password)
  
    dispatch(RegisterRequest())
    const config = {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         
       }
   };
  
   const body = JSON.stringify({ username, password, re_password });
      
   try {
   
       axios.defaults.withCredentials = true;
       const res = await axios.post('http://localhost:8000/blog/register', body, config);
  
       if (res.data.error) {
           dispatch(RegisterFailure(res.data.error))
       } else {
           dispatch(RegisterSuccess(username))
       }
   } catch (err) {
       dispatch(RegisterFailure(err.message))
   }
  
  
  }
  
  export const RegisterRequest = (username,password,re_password) => {
      return {
        type: REGISTER_REQUEST ,
    
      }
    }
  
  export const RegisterSuccess = (username,password,re_password) => {
      return {
        type: REGISTER_SUCCESS ,
        setusername_register:username,
        setpassword_register:password,
        setre_password_register:re_password,
      }
    }
  
  
  export const RegisterFailure = (username) => {
      return {
        type: REGISTER_FAILED ,
       
      }
    }
    export const Logout_redux = () => async dispatch => {
      
      console.log('logout..........')
       
       const config = {
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
            
         
         }
     };
    
     const body = JSON.stringify({   'withCredentials': true});
    
     try {
         //axios.defaults.xsrfHeaderName = "X-CSRFToken";
         //axios.defaults.xsrfCookieName = "csrftoken";
         //axios.defaults.withCredentials = true;
         const res = await axios.post('http://localhost:8000/blog/logout', body, config);
        
         if (res.data.success) {
         
          dispatch(LogoutSuccess())
         
               
          localStorage.setItem('is_login', false);
              }
              else{
              
         
               dispatch(LogoutFailure(res.data.error))
             
                   
              }
           
      
     }
    
    catch (err) {
         dispatch(LogoutFailure(err.message))
     }
       ////////////////////////////////////////////
       ////////////////////////////////////////////
     
    
    };
    export const LogoutSuccess = (v) => {
      return {
        type:   LOGOUT_SUCCESS ,
      
      }
    }  
    
    
    export const LogoutFailure = (error) => {
      return {
        type: LOGOUT_FAILURE ,
        error_LOGOUT:error
      }
    }    
  
export const Login_store = () => async dispatch => {
  
  AsyncStorage.getItem('is_login').then(log => {
    //you can access user here
  
    const is_login= log
    console.log('stockage  auth :',is_login)
   if (is_login==='true'){
   // setchecklogin(true)
     dispatch(StoreSuccess())
   console.log('stockage  true :',is_login)

   }
   else{
    dispatch(StoreFailure())
    console.log('stockage  false :',is_login)
   }
  })
}
export const StoreSuccess = (v) => {
  return {
    type:   STORE_SUCCESS ,
  
  }
}  


export const StoreFailure = (error) => {
  return {
    type: STORE_FAILURE ,

  }
} 

export const Set_current_image_redux= (val) => async dispatch => {
  console.log(  'change_curent img....')
 
  dispatch(SetCurrentImageRequest(val))
 
 } 
 export const SetCurrentImageRequest = (val) => {
  return {
    type: SET_CURRENT_IMAGE ,
    set_current_image:val,

  }
}

export const Show_Login_form_redux = () =>   dispatch => {
  
     console.log('show login redux form ..')
    dispatch(Showformrequest())
    
 
}
export const Showformrequest = () => {
  return {
    type:   SET_LOGIN_FORM ,
  
  }
}  
export const Show_register_form_redux = () =>   dispatch => {
  
  console.log('show register form ..')
 dispatch(Showformregisterrequest())
 

}
export const Showformregisterrequest = () => {
return {
 type:   SET_REGISTER_FORM ,

}
} 
    const initialState = {
        show_login_form:false,
        show_register_form:false,
        username_login: '',
        password_login: '',
        is_login:false,
        error_login:'',
        show_loading_auth:false,
        username_register: '',
      password_register: '',
      re_password_register: '',
       show_navbar:false,
       current_image:0,
        //is_LOGIN:' yesss',
        //is_LOGIN:localStorage.getItem('is_LOGIN'),
        //is_LOGIN:localStorage.getItem('is_LOGIN') || false,
        //is_LOGIN:JSON.parse(localStorage.getItem('is_LOGIN')) || false,
       
      
      }
      
const AuthReducer = (state = initialState, action) => {
 
    switch (action.type) {
      case LOGIN_REQUEST: return {
        ...state,
        show_loading_auth:true,
        error_login:'',
       
     
      }
      case LOGIN_SUCCESS: return {
        ...state,
      
       username_login:action.setusername_login,
       password_login:action.setpassword_login,
       show_loading_auth:false,
       is_login:true,
       show_login_form:false,
       error_login:'',
      
  
      }
      case LOGIN_FAILED: return {
        ...state,
      show_loading_auth:false,
       error_login:action.seterror_login
      
   
  
      }
      
      case REGISTER_REQUEST: return {
        ...state,
     
      }
      case REGISTER_SUCCESS: return {
        ...state,
      
       username_register:action.setusername_register,
       password_register:action.setpassword_register,
       re_password_register:action.setre_password_register

      }
      case REGISTER_FAILED: return {
        ...state,
      
       username_register:'failed',
       password_register:action.setpassword_register,
       re_password_register:action.setre_password_register

      }
      case LOGOUT_SUCCESS: return {
        ...state,
        is_login:false,
     
      }
      case LOGOUT_FAILURE: return {
        ...state,
     
      }
      case STORE_SUCCESS: return {
        ...state,
        is_login:true,
        show_navbar:true,
     
      }
      case STORE_FAILURE: return {
        is_login:false,
        show_navbar:true,
        ...state,
     
      }
      case SET_LOGIN_FORM: return{
        show_login_form:!state.show_login_form,
        show_register_form:false,
     
      }
      case SET_REGISTER_FORM: return{
        show_register_form:!state.show_register_form,
        show_login_form:false,
     
      }
      default:{
        return {
        
          ...state
        
        }
      
      }
    }
  }
  
  export default AuthReducer