'use client';
import { connect } from 'react-redux'
import React, { Component ,useState,useEffect} from 'react'
import {fetchFormations} from '../../Redux';
import {fetchGroupe} from '../../Redux';
//1108abcd
const formation = (props) => {
   
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