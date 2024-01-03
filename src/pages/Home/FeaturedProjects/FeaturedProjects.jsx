import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Project from '../../../data/projects';
import ProjectCard from './ProjectCard/ProjectCard';

import './FeaturedProjects.scss';

export const FeaturedProjects = () => {
  const [allProjects, setAllProjects] = useState([]); // Estado para armazenar todos os projetos
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [filter, setFilter] = useState('all'); // Estado para armazenar o filtro selecionado
  const [searchQuery, setSearchQuery] = useState(''); // Estado para armazenar a consulta de pesquisa

  useEffect(() => {
    setAllProjects(Project);
    const filteredProjects = allProjects.filter(
      (project) =>
        (filter === 'all' || project.category === filter) &&
        (searchQuery === '' ||
          (project.technology && project.technology.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    );
    setFeaturedProjects(filteredProjects);
  }, [filter, allProjects, searchQuery]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='FeaturedProjectContainer'>
      <h1 className='FeaturedProjectTitle'>
        Projetos em Destaque
      </h1>
      <div className='searchContainer'>
        <input
          type="text"
          placeholder="Pesquisar por tecnologia"
          value={searchQuery}
          onChange={handleSearchChange}
          className='search'
        />

        <div className='btnFilter'>
          <a onClick={() => handleFilterChange('all')}>Destaques</a>
          <a onClick={() => handleFilterChange('landing-page')}>LandingPage</a>
          <a onClick={() => handleFilterChange('estudo')}>Estudos</a>
          <a onClick={() => handleFilterChange('api')}>Api</a>
        </div>
      </div>

      <motion.section className='FeaturedProject'>
        {featuredProjects.map((project) => (
          <motion.div key={project.id} whileHover={{ rotate: 3 }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.section>
      <Link to="/project" className="HomeBtn">
        Veja Mais
      </Link>
    </div>
  );
};
