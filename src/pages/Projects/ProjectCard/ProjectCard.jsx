import { FaRegEye, FaGithub } from "react-icons/fa";

import './ProjectCard.scss';

const ProjectCard = ({ image, title, description, links, technology }) => {

  return (
    <section className='projectCardContainer'>
      <div className='projectCard'>
        <img
          alt="card-img"
          src={image.src}
          className="projectImg"
        />

        <div className='projectCardBody'>
          <h3 className='projectTitle'>{title}</h3>
          <p className='projectDescription'>{description}</p>
          <p className='projectTechnology'>{technology}</p>
          <span className="projectBtnContainer">
            {links.site ? <a className='project-Btn' href={links.site} target='_blank'><FaRegEye /></a> : null}
            {links.repo ? <a className='project-Btn' href={links.repo} target='_blank'><FaGithub /></a> : null}
          </span>

        </div>

      </div>
    </section>
  );
};

export default ProjectCard;