import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'; // Import des icônes
import SkillBar from '../SkillBar/SkillBar';
import './Skills.scss';

const skillsData = [
  { icon: <FaHtml5 />, level: 90 },
  { icon: <FaCss3Alt />, level: 85 },
  { icon: <FaJsSquare />, level: 80 },
  { icon: <FaReact />, level: 75 },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillBar key={index} icon={skill.icon} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
