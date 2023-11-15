"use client"

import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { formation_text, formation_title, formation_image ,formation_prof} from './formation'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation } from "./presentation"

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
    visible: {},
  };

  const aprops_presentationVariants = {
    visible: { opacity: 1, x: "0%", transition: { duration: 1, type: "spring", } },
    hidden: { opacity: 0, x: "-100%" }
  };
  return (
    <section className='home-part1'>
      <div
        className='home-part1-1'
        style={{
          backgroundColor: 'blue',
          color: `${images_presentation[0].fcolor}`,
          transition: 'background-color 3s ease'
        }}
      >

        <div className="presentation-title">

          <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true }}>
            {titles_presentation[0]['FR'][0].title.split("").map((letter) => (
              <motion.span key={0} variants={letterVariants}>{letter}</motion.span>
            ))}
          </motion.h1>
          <motion.p variants={titleVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true }}>
            {titles_presentation[0]['FR'][0].text.split("").map((letter) => (
              <motion.span key={0} variants={letterVariants}>{letter}</motion.span>
            ))}
          </motion.p>
          <button onClick={() => null} > {button_presentation[0]['FR']}
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
              </motion.div>
            </AnimatePresence>

          </div>
          <button onClick={() => null} > {button_presentation[0]['FR']}
          </button>
        </div>

        <div className='prof-part'>
          <div className='prof-part1'>
            <div className='prof' style={{
              backgroundImage: `url(${images_presentation[0].prof_img1})`
            }}>


            </div>

            <div className="prof_svg">

            <h1>{formation_prof[0]['FR'].title}</h1>
                  <p>{formation_prof[0]['FR'].text}


                  </p>

            </div>
          </div>
          <div className='prof-part1'>

            <div className="prof_svg">

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

    </section>




  )
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {



  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part1)