import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../../data/projects';
import ProjectCard from './ProjectCard/ProjectCard';

import './FeaturedProjects.scss';

export const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Buscando os projetos em destaque ou realizar outras operações assíncronas
    const fetchFeaturedProjects = () => {
      const filteredProjects = Project.filter((project) => project.id === '1' || project.id === '4');
      setFeaturedProjects(filteredProjects);
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <div className='FeaturedProjectContainer'>
      <h1 className='FeaturedProjectTitle'>
        Projetos em Destaque
      </h1>

      <section className='FeaturedProject'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
      <Link to="/project" className="HomeBtn">
        Veja Mais
      </Link>
    </div>
  );
};
