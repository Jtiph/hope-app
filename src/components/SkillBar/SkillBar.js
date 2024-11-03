import React from 'react';
import { FaLeaf } from 'react-icons/fa'; // Icône de feuille
import './SkillBar.scss';

// Ajoute un prop pour l'icône
const SkillBar = ({ icon, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        {/* Utilise l'icône au lieu du nom */}
        <div className="icon">{icon}</div>
      </div>
      <div className="bar-container">
        <div className="progress-bar" style={{ width: `${level}%` }}>
          <FaLeaf className="leaf-icon" />
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
