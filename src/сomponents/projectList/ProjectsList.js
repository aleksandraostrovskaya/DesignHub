import React from 'react';
import ProjectCard from '../projectCard/ProjectCard'
import './projectList.css';

const ProjectList = ({ projects, onProjectClick}) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} onProjectClick={onProjectClick}/>
      ))}
    </div>
  );
};

export default ProjectList;
