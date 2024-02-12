import { FaGithub, FaLinkedin } from "react-icons/fa";

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div className="wrapper">
        <div className="icon linkedin">
          <div className="tooltip">
            Linkedin
          </div>
          <span><a href={"https://www.linkedin.com/in/christie-cardoso"} className="fab fa-linkedin"><FaLinkedin /></a></span>
        </div>
        <div className="icon github">
          <div className="tooltip">
            Github
          </div>
          <span><a href={"https://github.com/ChristieCardoso"} target="_blank" className="fab fa-github"><FaGithub /></a></span>
        </div>
      </div>
      <p>© 2023 Todos os direitos reservados</p>
    </footer>
  );
};

