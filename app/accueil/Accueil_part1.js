"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import {missions_text ,missions_title ,missions_image} from './missions'
import {images_presentation , titles_presentation , aprops_presentation ,button_presentation } from "./presentation"

export const Accueil_part1 = (props) => {

    const [currentImage, setCurrentImage] = useState(0);

    const imageVariants = {
      initial: {
        opacity: 1,
     
      },
      animate: {
        opacity: 1,
      
        transition: {
          duration: 2,
        },
      },
      exit: {
        opacity: 1,
    
        transition: {
          duration: 2,
        },
      },
    };
    const titleVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.9,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };
    const letterVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
          // ou
          ease: (t) => t * t, // utiliser une fonction
        },
      },
    };
    
 
  const mession_itemVariants = {
    hidden: {},
    visible: { },
  };
  
    const aprops_presentationVariants = {
      visible: { opacity: 1,x:"0%", transition: { duration: 1  , type: "spring", } },
      hidden: { opacity: 0 ,x:"-100%"}
    };
  return (
    <section className='home-part1'>
            <div
              className='home-part1-1'
              style={{
                backgroundColor:  'blue',
                color: `${images_presentation[0].fcolor}`,
                transition: 'background-color 3s ease'
              }}
            >
              
              <div className="presentation-title">
       
                  <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles_presentation [0]['FR'][0].title.split("").map((letter) => (
                      <motion.span key={0} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.h1>
                  <motion.p variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles_presentation [0]['FR'][0].text.split("").map((letter) => (
                      <motion.span key={0} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.p>
                  <button onClick={()=> null} > {button_presentation[0]['FR']}
                  </button>
              
              </div>
              <div className="presentation-img">
                <AnimatePresence>
                  <motion.div
                    className="presentation-sous-img"
                    style={{ backgroundImage: `url(${images_presentation[0].image})` }}
                    variants={imageVariants}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    key={0}
                  />
                </AnimatePresence>
              </div>
            
            </div>
           
            <div
                    className="presentation-img-fixed"
                    style={{ backgroundImage: `url(${images_presentation[0].image_fixed})` }}
                   
                  />
            
          
          <div
            className="presentation-sous-svg"
            style={{ backgroundImage: `url(${images_presentation[0].svg})` }}
          
            key={0}
          />
 
              <div className='home-part2-1'>
                <div className='messions-title'>
                  <h1>{missions_title[0]['FR']}</h1>
                </div>
                <div
                  className='messions-type'
                  
                 
                >
                  <AnimatePresence key={missions_text[0]['FR']}>
                          <motion.div
                            className='mession'
                            key={missions_text[0]['FR']}
                            variants={mession_itemVariants}
                        
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                         
                          >
                          
                            <div className='mession-text'>
                           
                              <p>{missions_text[0]['FR']}
                              
                               
                              </p>
                             
                            </div>
                            
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={missions_text[1]['FR']}>
                          <motion.div
                            className='mession'
                            key={missions_text[1]['FR']}
                            variants={mession_itemVariants}
                          
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                         
                            <div className='mession-text'>
                          
                        
                              <p>{missions_text[1]['FR']}
                             
                              
                       
                              </p>
                             
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={missions_text[3]['FR']}>
                          <motion.div
                          className='mession'
                          key={missions_text[3]['FR']}
                          variants={mession_itemVariants}
                        
                          viewport={{ once: true }}
                          initial='hidden'
                          whileInView='visible'
                          >
                           
                            <div className='mession-text'>
                           
                            
                              <p>{missions_text[3]['FR']}
                             
                                  
                              </p>
                             
                            </div>
                          </motion.div>
                        </AnimatePresence>


                </div>
                
                <div className='prof-part'>
                  <div className='prof-part1'>
                      <div className='prof'>
                      <p>hello
                             
                                  
                             </p>

                      </div>
                      <div className='prof'>
                      </div>
                  </div>
                  <div className='prof-part1'>
                      <div className='prof'>
                      </div>
                      <div className='prof'>
                      </div>
                  </div>
              </div>
              </div>
         
            </section>
                 
              
       

  )
}
const mapStateToProps = (state) => ({
   
  })
  
  const mapDispatchToProps = dispatch =>{
  return{
    
 
  
  }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part1)