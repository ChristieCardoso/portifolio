import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard/ProjectCard';
import projectsData from '../../../data/projects';

import './FeaturedProjects.scss';

export const FeaturedProjects = () => {

  const [allProjects, setAllProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [filter, setFilter] = useState('landing-page');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setAllProjects(projectsData);
  }, []);

  useEffect(() => {
    const filteredProjects = allProjects.filter(project =>
      (filter === 'all' || project.category === filter) &&
      (searchQuery === '' ||
        (project.technology && project.technology.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
    setFeaturedProjects(filteredProjects);
  }, [filter, allProjects, searchQuery]);

  const handleFilterChange = selectedFilter => {
    setFilter(selectedFilter);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="featuredProjectContainer">
      <h1 className="featuredProjectTitle">Projetos</h1>
      <section className="searchContainer">
        <input
          type="text"
          placeholder="Search by technology"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search"
        />

        <div className="btnFilter">
          <button onClick={() => handleFilterChange('landing-page')}>Landing Page</button>
          <button onClick={() => handleFilterChange('estudo')}>Estudos</button>
          <button onClick={() => handleFilterChange('api')}>API</button>
          <button onClick={() => handleFilterChange('dapp')}>Dapp</button>
        </div>
      </section>

      <section className="featuredProject">
        {featuredProjects.map(project => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </section>

      <section className='featuredProjectBtn'>
        <Link to="/project" className="btn-expand">
          Ver Mais
        </Link>
      </section>
    </section>
  );
};
