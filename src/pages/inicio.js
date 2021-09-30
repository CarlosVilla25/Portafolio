import React from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../components/Navbar/Navbar';
import './styles.scss'

const Inicio = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className="index-circle-top" />
      <div className="index-circle-bottom" />
      <div className="container-title">
        <h1>Charlie<br />Villa</h1>
        <p>Desarrollador<br />Frontend</p>
      </div>
      <div className="container-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container-social">
        <div className="container-social-github">
          <a href="https://github.com/CarlosVilla25"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="container-social-instagram">
          <a href="https://www.instagram.com/charlietide/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="container-social-linkedin">
          <a href="https://www.linkedin.com/in/carlos-alberto-villa-jiménez"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  )
}

export default Inicio;
