"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import {temoignage_text  ,} from "./temoignage"
import {Set_current_image_redux } from '../../Redux'
import { motion, useAnimation, useMediaQuery ,AnimatePresence} from "framer-motion";
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
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      controls.start({
        opacity: 0,
        x:"100%",
        transition: {
          duration: 1,
        },
      },);
    } else {
      controls.start({
       
      },);
    }
  }, [isMobile, controls]);
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


const image_figuretVariantsl = {
  initial: {
    opacity: 0,
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
      duration:1,
    },
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
       
        <div className='home-slider1' style={{}}>
        <h1>Avis</h1>
            <div className='inside'>
             
                            
                          <div className='slider1-items'>
                        
                            {temoignage_text[0].FR.map((items)=>{


                                return(
                                  <AnimatePresence >
                            
                                  <motion.div className='slider1-item' style={{backgroundColor:"white" }}
                                  variants={anime2 &&  image_figuretVariantsl}
                                  initial="initial"
                                  animate="animate"
                                  exit={isMobile && "exit"}
                                  
                                  key={items.id+index}
                                  onAnimationComplete={definition => {
                                    console.log('Completed animating', definition)
                                    setanime(true)
                                  }}>
                                    <div className='slider2-item'>

                                   
                                  <img src={temoignage_text[0]["FR"][0+numberList[items.id-1]].imgSrc} alt={temoignage_text[0]["FR"][0+numberList[items.id-1]].imgAlt} className="profile" />
                                    <div className='slider1_text'>
                                     <div className='slider2_text'>

                                  
                                      <h2>{temoignage_text[0]["FR"][0+numberList[items.id-1]].name}</h2>
                                      <h4>{temoignage_text[0]["FR"][0+numberList[items.id-1]].role}</h4>
                                      <p>{temoignage_text[0]["FR"][0+numberList[items.id-1]].quote}</p>
                                      </div>
                                      </div>
                                   <div className='slider_star'>
                                    <span role="img" aria-label="star">
                                      ⭐⭐⭐⭐⭐
                                    </span>
                                    </div>
                                    </div>
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