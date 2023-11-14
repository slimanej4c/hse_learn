
'use client';
import { connect } from 'react-redux'
import {fetchFormations} from '../../Redux';
import {fetchGroupe} from '../../Redux';
const contact = (props) => {
    const clickedd=()=>{
        console.log('hello its work')
    }
    return(
    <div className="">
        <button onClick={()=>null}>hi</button>
        
        </div>
    
    )
    
}
const mapStateToProps = (state) => ({
  formations:state.formationreducer.formations,
  groupes:state.formationreducer.groupes,
  })
  
  const mapDispatchToProps = dispatch =>{
    return{
     
    fetchFormations:()=>dispatch(fetchFormations()),
    fetchGroupe:()=>dispatch(fetchGroupe()),
    }
    
    }
    
    
    
  export default connect(mapStateToProps, mapDispatchToProps)(formation)