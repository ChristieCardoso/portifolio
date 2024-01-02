import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import './Footer.scss';

export const Footer = () => {
  return (
    <section className='footerContainer'>
      <div className="wrapper">
        <div className="icon linkedin">
          <div className="tooltip">
            Linkedin
          </div>
          <span><i className="fab fa-linkedin"><FaLinkedin /></i></span>
        </div>
        <div className="icon instagram">
          <div className="tooltip">
            Instagram
          </div>
          <span><i className="fab fa-instagram"><FaInstagram /></i></span>
        </div>
        <div className="icon github">
          <div className="tooltip">
            Github
          </div>
          <span><i className="fab fa-github"><FaGithub /></i></span>
        </div>
      </div>
      <p>© 2023 Todos os direitos reservados</p>
    </section>
  );
};

