import { FaRegEye, FaGithub } from 'react-icons/fa';

import './ProjectCard.scss';

const ProjectCard = ({ image, title, description, links }) => (
  <section className='FeaturedProjectCardContainer'>
    <div className='FeaturedProjectCard'>
      <img
        alt="card-img"
        src={image.src}
        width="100%"
      />
      <div className='FeaturedProjectCardBody'>
        <h3 className='FeaturedProjectCardTitle'>{title}</h3>
        <p className='FeaturedProjectDescription'>{description}</p>
        <span className="FeaturedProjectBtnContainer">
          {links.site && <a className='projectBtn' href={links.site} target='_blank'><FaRegEye /></a>} {/* Usa a condição ternária para renderizar o link apenas se links.site existir */}
          {links.repo && <a className='projectBtn' href={links.repo} target='_blank'><FaGithub /></a>}
        </span>
      </div>
    </div>
  </section>
);

export default ProjectCard;
