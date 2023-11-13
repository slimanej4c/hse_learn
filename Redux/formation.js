

import {

    FETCH_FORMATIONS_SUCCESS,
    FETCH_FORMATIONS_ERROR,
    FETCH_GROUPE_ERROR ,
    FETCH_GROUPE 
  } from './type'

  import axios from 'axios';
  //import Cookies from 'js-cookie';
  import localStorage from 'redux-persist/lib/storage';
  import AsyncStorage from 'redux-persist/lib/storage';
  
export const fetchFormations = () => async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/blog/formations'); // Assurez-vous d'ajuster l'URL en fonction de votre configuration
      dispatch({ type: FETCH_FORMATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_FORMATIONS_ERROR, payload: error });
    }
  };
  export const fetchGroupe = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/blog/groupes'); // Assurez-vous d'ajuster l'URL en fonction de votre configuration
      dispatch({ type: FETCH_GROUPE, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_GROUPE_ERROR, payload: error });
    }
  };
  const initialState = {
   
    formations: [],
    groupes:[],
   
    //is_LOGIN:localStorage.getItem('is_LOGIN') || false,
    //is_LOGIN:JSON.parse(localStorage.getItem('is_LOGIN')) || false,
   
  
  }
  const FormationReducer = (state = initialState, action) => {
 
    switch (action.type) {
      case FETCH_FORMATIONS_SUCCESS: return {
        ...state,
        formations:action.payload
     
      }
      case  FETCH_FORMATIONS_ERROR: return {
        ...state,
       
     
      }
      case FETCH_GROUPE: return {
        ...state,
        groupes:action.payload
     
      }
      case  FETCH_GROUPE_ERROR: return {
        ...state,
        groupes:'list des formation erreur'+action.payload
     
      }
      default:{
        return {
        
          ...state
        
        }
      
      }
    }
  }
  
  export default FormationReducer