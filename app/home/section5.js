"use client"
import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook ,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {  faBookOpen, // Icône pour les cours en cours
faUsers, // Icône pour le nombre total d'étudiants
faCertificate } from "@fortawesome/free-solid-svg-icons";
export const section5 = (props) => {
  return (
    <div className="section5-parent">
    <div className="stat-item">
      <FontAwesomeIcon width={50} icon={faBookOpen} />
      <p>Les cours en cours</p>
    </div>
    <div className="stat-item">
      <FontAwesomeIcon icon={faUsers} />
      <p>Nombre total d'étudiants</p>
    </div>
    <div className="stat-item">
      <FontAwesomeIcon icon={faCertificate} />
      <p>Nombre de certificats délivrés</p>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(section5)