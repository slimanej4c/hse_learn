"use client"
import React from 'react'
import { connect } from 'react-redux'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation } from "./presentation"
export const section1 = (props) => {
  return (
    <div className='section1-parent'>
       <div className='section1-background-img'  style={{ backgroundImage: `url(${images_presentation[0].img_section1})` }}>
       </div>
      <div className='section1-presentation'>
          <div className='section-title' >
         
                  <h1>
                  Training HSE
                </h1>

         </div>
         <div className='section-text'>
              <p>

              Notre mission est d'améliorer la vie des enfants en difficulté en fournissant une aide alimentaire, un accès à l'eau potable, une éducation et des soins de santé de qualité.
              Notre mission est d'améliorer la vie des enfants en difficulté en fournissant une aide alimentaire, un accès à l'eau potable, une éducation et des soins de santé de qualité.
              </p>
     

         </div>

      </div>

     
     
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section1)