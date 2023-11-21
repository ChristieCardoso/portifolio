import ProjectCard from './ProjectCard/ProjectCard';

import Project from '../../data/projects'

import './Project.scss';

export const Projects = () => {
  return (
    <div className='container'>
      <h1 className='title'>
        My Recent Works
      </h1>
      <p>

      </p>

      <section className='projects'>
        {Project.map((props) => (
          <ProjectCard key={props.id} {...props} />
        ))}

      </section>

    </div>
  );
};

