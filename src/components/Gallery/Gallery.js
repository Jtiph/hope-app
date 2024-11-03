import React, { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from '../../data/projects.json'; 

const Gallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); // Charger les données dans le state
  }, []);

  return (
    <div className="gallery-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Gallery;
