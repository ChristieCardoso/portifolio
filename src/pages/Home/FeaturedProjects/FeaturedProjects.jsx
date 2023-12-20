import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../../data/projects';
import ProjectCard from './ProjectCard/ProjectCard';

import './FeaturedProjects.scss';

export const FeaturedProjects = () => {
  const [allProjects, setAllProjects] = useState([]); // Estado para armazenar todos os projetos
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [filter, setFilter] = useState('all'); // Estado para armazenar o filtro selecionado

  useEffect(() => {
    // Carregar todos os projetos ao inicializar o componente
    setAllProjects(Project);
    // Atualize os projetos em destaque sempre que o filtro for alterado
    const filteredProjects = allProjects.filter((project) => filter === 'all' || project.category === filter);
    setFeaturedProjects(filteredProjects);
  }, [filter, allProjects]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className='FeaturedProjectContainer'>
      <h1 className='FeaturedProjectTitle'>
        Projetos em Destaque
      </h1>

      <div>
        <button onClick={() => handleFilterChange('all')}>Destaques</button>
        <button onClick={() => handleFilterChange('landing-page')}>LandingPage</button>
        <button onClick={() => handleFilterChange('estudo')}>Estudos</button>
        <button onClick={() => handleFilterChange('api')}>Api</button>
      </div>

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

