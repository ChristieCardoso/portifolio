import Project from '../../data/projects'
import ProjectCard from './ProjectCard/ProjectCard';
import './Project.scss';

export const Projects = () => {
  return (
    <div className='projectContainer'>
      <h1 className='ProjectTitle'>Meus Projetos</h1>
      <h3>Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.</h3>

      <section className='projects'>
        {Project.map((props) => (
          <ProjectCard key={props.id} {...props} />
        ))}
      </section>
    </div>
  );
};

