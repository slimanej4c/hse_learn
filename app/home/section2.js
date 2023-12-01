"use client"
import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { formation_text, formation_title, formation_image ,formation_prof} from './formation'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation, button_formation } from "../home/presentation"

export const section2 = (props) => {
    const mession_itemVariants = {
        hidden: {opacity: 0 ,x:-100 ,y:0, rotateY: 200 },
        visible: { rotateY: 0 ,opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
      };
  return (
    <div className='section2-parent'>
                        <div className='section2-container'>
                        <div className='formations-title'>
                    <h1>{formation_title[0]['FR']} </h1>
                    </div>

                    <div
                    className='formation-container'>
                    <div className='formations-type'>


                        <AnimatePresence key={formation_text[0]['FR'].id}>
                        <motion.div
                            className='formation'
                            key={formation_text[0]['FR'].id}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'

                        >
                        <div  className='formation-image'  style={{ backgroundImage: `url(${formation_image.fromation1})` }}>
                    
                    </div>
                            <div className='formation-text'>
                                <div className='title'>
                                        <h1>{formation_text[0]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_text[0]['FR'].text} 

                                        <a href="formation" onClick={()=>props.Show_register_form_redux()}>
                                        { button_formation[0]['FR']}
                                            </a>
                                        </p>

                               </div>
                           
                            </div>
                        

                        </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={formation_text[1]['FR'].text}>
                        <motion.div
                            className='formation'
                            key={formation_text[1]['FR']}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                        >
                        <div  className='formation-image'  style={{ backgroundImage: `url(${formation_image.formation2})` }}>
                    
                    </div>
                          <div className='formation-text'>
                                <div className='title'>
                                        <h1>{formation_text[1]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_text[1]['FR'].text} 

                                        <a href="formation" onClick={()=>props.Show_register_form_redux()}>
                                        { button_formation[0]['FR']}
                                            </a>
                                        </p>

                               </div>
                           
                            </div>
                        
                        </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={formation_text[2]['FR'].text}>
                        <motion.div
                            className='formation'
                            key={formation_text[2]['FR']}
                            variants={mession_itemVariants}
                            whileHover={{ rotateY: 20 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                        >
                                <div  className='formation-image'  style={{ backgroundImage: `url(${formation_image.formation3})` }}>
                    
                                </div>
                            <div className='formation-text'>
                                <div className='title'>
                                        <h1>{formation_text[1]['FR'].title}
                                    </h1>

                                </div>
                                <div className='text'>
                                    <p>{formation_text[1]['FR'].text} 

                                        <a href="formation" onClick={()=>props.Show_register_form_redux()}>
                                        { button_formation[0]['FR']}
                                            </a>
                                        </p>

                               </div>
                           
                            </div>
                        
                        </motion.div>
                        </AnimatePresence>

                    </div>
                    <div
                        className="presentation-sous-svg4"
                        style={{ backgroundImage: `url(${images_presentation[0].svg4})` }}

                        key={0}
                    /> 
                
                    </div>
                    
                
                    </div>
        
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section2)