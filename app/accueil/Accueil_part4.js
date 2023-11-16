"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence , useMotionValue, useDragControls} from "framer-motion"
import {temoignage_text  ,section_title} from "./temoignage"
import {Set_current_image_redux } from '../../Redux'

export const Accueil_part4 = (props) => {

  const [currentFigure, setcurrentFigure] = useState(0);

  const [y_init, sety_init] = useState(0);
  const [stop_auto_figure, setstop_auto_figure] = useState(true);
  const [index, setindex] = useState(0);
  const [anime, setanime] = useState(false);
  const [anime2, setanime2] = useState(false);
  const [y_exit_figure, sety_exit_figure] = useState(true);
  const [y_init_figure, sety_init_figure] = useState('100%');

  const [numberList, setNumberList] = useState([0, 1, 2, 3, 4]);

  const moveListForward = () => {
    setanime(false)
    setindex(index+1)
    const newList = [...numberList];
    const firstItem = newList.shift();
    newList.push(firstItem);
    setNumberList(newList);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setanime2(true)
    
    setindex(index+1)
    const newList = [...numberList];
    const firstItem = newList.shift();
    newList.push(firstItem);
    setNumberList(newList);
     
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);
  const temoignage_text=[{'FR':[{id:0,color:'white',image:'/static/images/leger.png'},{id:1,color:'green',image:'/static/images/isoler.jpg'},
  {id:2,color:'red',image:'/static/images/protection.png'},{id:3,color:'yellow',image:'/static/images/eco.png'},
  {id:4,color:'green',image:'/static/images/isoler_sons.png'}]}]

  useEffect(() => {
  console.log(y_exit_figure)
  { y_exit_figure ? setcurrentFigure((currentFigure - 1 + temoignage_text[0]['FR'].length) % temoignage_text[0]['FR'].length):
    setcurrentFigure((currentFigure + 1) % temoignage_text[0]['FR'].length);}
  }, [y_init]);

  useEffect(() => {
  
    }, []);

  const change_figure = (myParam) => {
    setstop_auto_figure(false)
    sety_init(y_init+1)

     if (myParam==="prev"){
       sety_init_figure('-100%')
      sety_exit_figure(true)
   
    
     
    
     }
     else{
      sety_init_figure('100%')
      sety_exit_figure(false)
    
      
  };
  
}

const image_figuretVariantsr = {
  initial: {
    opacity: 0,
    x:"-100%",
  },
  animate: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x:"100%",
    transition: {
      duration: 1,
    },
  },
  
};
const image_figuretVariantsl = {
  initial: {
    opacity: 1,
    x:"100%",
  },
  animate: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    x:"-100%",
    transition: {
      duration:0.5,
    },
  },
};
const image_big = {
  initial: {
    opacity: 1,
    width:150,
    height:200,
    bottom:"20%",
    left:'50%',
  },
  animate: {
    opacity: 1,
    width:"100%",
    height:800,
    bottom:"0%",
    left:'0%',
    
    transition: {
      duration: 0.9,
    },
  },

  exit: {
    opacity: 0,
    x:"-100%",
    transition: {
      duration:0.5,
    },
  },
};
const image_big_init= {
  initial: {
    opacity: 1,
    width:150,
    height:200,
    bottom:"20%",
    left:'50%',
  },
  animate: {
  
  },

  exit: {
  
  },
};
  
  
    // useEffect(() => {
    //     const interval = setInterval(() => {
       
    //     if (stop_auto_figure){
    //       setcurrentFigure((currentFigure + 1) % temoignage_text[0]["FR"].length);
    //       sety_init('-100%')
    //     sety_init_figure('100%')
    //     }
         
    //     }, 6000);
    //     return () => clearInterval(interval);
    //   }, []);
  
  
      
  
   
      
  return (
    <section className='home-part4'>
       
        <div className='home-slider1' style={{bottom:'20%',left:'50%'}}>
        
            <div className='inside'>
                            
                          <div className='slider1-items'>
                        
                            {temoignage_text[0].FR.map((items)=>{


                                return(
                                  <AnimatePresence >
                            
                                  <motion.div className='slider1-item' style={{backgroundColor:temoignage_text[0]['FR'][0+numberList[items.id]].color ,backgroundImage:`url(${temoignage_text[0]['FR'][0+numberList[items.id]].image})`}}
                                  variants={anime2 &&  image_figuretVariantsl}
                                  initial="initial"
                                  animate="animate"
                            
                                  key={items.id+index}
                                  onAnimationComplete={definition => {
                                    console.log('Completed animating', definition)
                                    setanime(true)
                                  }}>
                                 
                                          <h1>{temoignage_text[0]['FR'][0+numberList[items.id]].id}</h1>
                                  </motion.div>
                                  </AnimatePresence>
                                

                                )
                            })}
                          
                         
                            
                          
                              
                      </div>
                
           </div>
         </div>
        
        
     
  
  </section>
  )
}

const mapStateToProps = (state) => ({
   
    current_image:state.authreducer.current_image,
  })
  
  const mapDispatchToProps = dispatch =>{
  return{
   
   
    Set_current_image_redux:(val)=>dispatch(Set_current_image_redux(val)),
  
  }
  
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part4)