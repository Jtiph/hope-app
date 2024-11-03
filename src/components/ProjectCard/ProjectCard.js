import React from 'react';
import './ProjectCard.scss'; 

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={link}>Voir plus</a>
  </div>
);

export default ProjectCard;
