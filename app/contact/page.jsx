
'use client';
import { connect } from 'react-redux'

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
  
  })
  
  const mapDispatchToProps = dispatch =>{
    return{
      
    
    }
    
    }
    
  
  export default connect(mapStateToProps, mapDispatchToProps)(contact)
 