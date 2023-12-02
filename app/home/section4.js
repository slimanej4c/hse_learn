
"use client"
import React from 'react'
import { connect } from 'react-redux'
import Slider_avis from "./Slider_avis"
export const section4 = (props) => {
  return (
    <div className='section4-parent'>
       <Slider_avis/>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section4)