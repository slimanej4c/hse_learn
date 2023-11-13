import  {combineReducers } from 'redux'


//import RegisterReducer from './Register/register_redux'

import AuthReducer from './auth'
import FormationReducer from './formation'

console.log('rootReducer')


const rootReducer = combineReducers({


   authreducer:AuthReducer,
   formationreducer:FormationReducer,
   
})

export default rootReducer