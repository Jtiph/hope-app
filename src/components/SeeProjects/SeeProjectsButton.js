import React from 'react';
import { Link } from 'react-router-dom'; 
import './SeeProjectsButton.scss';

const SeeProjectsButton = () => {
  return (
 <div>
   
        <Link to="/projects" className="see-project-button">
          Voir les projets
        </Link>
 </div>

  );
};

export default SeeProjectsButton;
