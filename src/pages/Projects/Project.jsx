import Project from '../../data/projects'
import ProjectCard from './ProjectCard/ProjectCard';

import './Project.scss';

export const Projects = () => {
  return (
    <div className='projectContainer'>
      <h1 className='projectCardTitle'>Meus Projetos</h1>
      <h3 className='projectCardSubTitle'>Aqui você poderá ver alguns dos trabalhos que eu desenvolvi.</h3>

      <section className='projectsBody'>
        {Project.map((props) => (
          <ProjectCard key={props.id} {...props} />
        ))}
      </section>
    </div>
  );
};

