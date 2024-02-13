import { FaRegEye, FaGithub } from 'react-icons/fa';

import './ProjectCard.scss';

const ProjectCard = ({ image, title, description, links, technology }) => (
  <section className='card'>
    <img
      alt="card-img"
      src={image.src}
      className="cardImg"
    />
    <div className='cardBody'>
      <h3 className='cardTitle'>{title}</h3>
      <p className='cardDescription'>{description}</p>
      <p className='cardTechnology'>{technology}</p>
      <span className='cardContainerBtn'>
        {links.site && <a className='projectBtn' href={links.site} target='_blank'><FaRegEye /></a>} {/* Usa a condição ternária para renderizar o link apenas se links.site existir */}
        {links.repo && <a className='projectBtn' href={links.repo} target='_blank'><FaGithub /></a>}
      </span>
    </div>
  </section>
);

export default ProjectCard;
