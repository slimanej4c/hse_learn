'use client';
import { connect } from 'react-redux'
import React, { useState,useEffect} from 'react'
import {fetchFormations} from '../../Redux';
import {fetchGroupe} from '../../Redux';

//1108abcd
const formation = (props) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const markers = [
    { latitude: 37.7577, longitude: -122.4376, title: 'San Francisco' },
    { latitude: 34.0522, longitude: -118.2437, title: 'Los Angeles' },
    // Ajoutez autant de marqueurs que nécessaire
  ];
   
    useEffect(() => {
      props.fetchFormations()
      props.fetchGroupe()
    }, []);
    useEffect(() => {
     
    }, [props.formations]);
    useEffect(() => {
     
    }, [props.groupes]);

   
    return(
    <div className="formation-all-container">
    
     
       
        <div className="formation-container">
            {props.formations.map((item)=>{
              return(
            <div className='formation-all'>
              <div className="formations">
                    <h3 key={item.id} className="">{item.nom}</h3>
              </div>
              <div className="groupes">
                    { props.groupes.map((groupe)=>
                                (
                                  <div className="">
                                  {item.id==groupe.formation &&  <h5 key={groupe.id} className="">{groupe.nom}</h5>} 
                                  {item.id==groupe.formation &&  <p>{groupe.date_debut} - {groupe.date_fin}</p>} 
                                  {item.id==groupe.formation &&  <p>nombre des places: {groupe.nombre_de_places} </p>} 
                                  {item.id==groupe.formation &&  <p>Durées: {groupe.duree} </p>}
                                </div>
                            
                                )
                            
                                  )
                                }

              </div>
                       
            </div>
            )
                        
                          }
              )}
          </div>
        
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