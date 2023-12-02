"use client"
import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { formation_text, formation_title, formation_image ,formation_prof} from './formation'
export const section3 = (props) => {
  const mession_itemVariants = {
    hidden: {opacity: 0 ,x:-100 ,y:0, rotateY: 200 },
    visible: { rotateY: 0 ,opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
  };
  return (
    <div className='section3-parent'>
        <div className='section3-container'>




        <div className='left'>
             <div  className='prof-image-fixe'  style={{ backgroundImage: `url(${formation_image.prof1})` }}>
                    
             </div>
                


        </div>
        <div className='right'>
            <div className="prof">

         
                <div className='etude-type'>


                        <AnimatePresence key={formation_text[0]['FR'].id}>
                        <motion.div
                            className='etude'
                            key={formation_text[0]['FR'].id}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'

                        >
                      
                           
                            <div className='etude-text'>
                                <div className='title'>
                                        <h1>{formation_prof[0]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_prof[0]['FR'].text}
                                        </p>

                               </div>
                           
                            </div>
                        

                        </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={formation_text[1]['FR'].text}>
                        <motion.div
                            className='etude'
                            key={formation_text[1]['FR']}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                        >
                          
                           
                       
                          <div className='etude-text'>
                                <div className='title'>
                                        <h1>{formation_text[1]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_text[1]['FR'].text} 

                                      
                                        </p>

                               </div>
                           
                            </div>
                        
                        </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={formation_text[2]['FR'].text}>
                        <motion.div
                            className='etude'
                            key={formation_text[2]['FR']}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                        >
                              
                           
                            <div className='etude-text'>
                                <div className='title'>
                                        <h1>{formation_text[1]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_text[1]['FR'].text} 

                                        </p>

                               </div>
                           
                            </div>
                        
                        </motion.div>
                        </AnimatePresence>

                    </div>

            </div>

            
        </div>

        </div>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section3)