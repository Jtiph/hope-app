import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { BsFilePerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-tj.png';
import './Navbar.scss'; 

const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/"><img src={logo} alt="Mon Logo" /></Link>
      </div>

      {/* Liens de navigation */}
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
 {/* Section des icônes des réseaux sociaux à gauche */}
 <div className="social-icons">
        <Link to="/about" className="profile-icon" aria-label="Profil"> 
          <BsFilePerson aria-hidden="true" />
        </Link>
        <a href="https://github.com/Jtiph" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub aria-hidden="true" />
        </a>
        <a href="https://linkedin.com/in/jantiphanie/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
