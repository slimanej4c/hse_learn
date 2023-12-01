"use client"
import React from 'react'
import { connect } from 'react-redux'
import { formation_text, formation_title, formation_image ,formation_prof} from './formation'
export const section3 = (props) => {
  return (
    <div className='section3-parent'>
        <div className='section3-container'>




        <div className='left'>
             <div  className='prof-image-fixe'  style={{ backgroundImage: `url(${formation_image.prof1})` }}>
                    
             </div>
                


        </div>
        <div className='right'>
            <div className="prof">

            <h1>{formation_prof[0]['FR'].title}</h1>
                <p>{formation_prof[0]['FR'].text}


                </p>

            </div>

            
        </div>

        </div>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section3)