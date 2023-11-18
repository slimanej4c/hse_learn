"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { formation_text, formation_title, formation_image ,formation_prof} from './formation'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation, button_formation } from "./presentation"

export const Accueil_part2 = () => {



 
  const mession_itemVariants = {
    hidden: {opacity: 0 ,x:-100 ,y:0},
    visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
  };
  

  return (
    <div className='home-part2-1'>
    <div className='formations-title'>
      <h1>{formation_title[0]['FR']}</h1>
    </div>

    <div
      className='formation-container'>
      <div className='formations-type'>


        <AnimatePresence key={formation_text[0]['FR'].id}>
          <motion.div
            className='formation'
            key={formation_text[0]['FR'].id}
            variants={mession_itemVariants}

            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'

          >

            <div className='formation-text'>
            <h1>{formation_text[0]['FR'].title}


              </h1>
              <p>{formation_text[0]['FR'].text}


              </p>

            </div>
            <button onClick={() => null} > {button_formation[0]['FR']}
      </button>

          </motion.div>
        </AnimatePresence>

        <AnimatePresence key={formation_text[1]['FR'].text}>
          <motion.div
            className='formation'
            key={formation_text[1]['FR']}
            variants={mession_itemVariants}

            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
          >

            <div className='formation-text'>
            <h1>{formation_text[1]['FR'].title}</h1>


              <p>{formation_text[1]['FR'].text}



              </p>

            </div>
            <button onClick={() => null} > {button_formation[0]['FR']}
      </button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence key={formation_text[2]['FR'].text}>
          <motion.div
            className='formation'
            key={formation_text[2]['FR']}
            variants={mession_itemVariants}

            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
          >

            <div className='formation-text'>

            <h1>{formation_text[2]['FR'].title}</h1>
              <p>{formation_text[2]['FR'].text}


              </p>

            </div>
            <button onClick={() => null} > {button_formation[0]['FR']}
      </button>
          </motion.div>
        </AnimatePresence>

      </div>
   
    </div>

    <div className='prof-part'>
      <div className='prof-part1'>
        <div className='prof' style={{
          backgroundImage: `url(${images_presentation[0].prof_img1})`
        }}>


        </div>

        <div className="prof">

        <h1>{formation_prof[0]['FR'].title}</h1>
              <p>{formation_prof[0]['FR'].text}


              </p>

        </div>
      </div>
      <div className='prof-part1 part2'>

        <div className="prof">

        <h1>{formation_prof[1]['FR'].title}</h1>
              <p>{formation_prof[1]['FR'].text}


              </p>

        </div>
        <div className='prof'
          style={{ backgroundImage: `url(${images_presentation[0].prof_img2})` }} key={0}>

        </div>
      </div>
    </div>
  </div>



  )
}

const mapStateToProps = (state) => ({

  })
  
  const mapDispatchToProps = dispatch =>{
  return{
   
 
  
  }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part2)