import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import './Footer.scss';

export const Footer = () => {
  return (
    <section className='footerContainer'>
      <div class="wrapper">
        <div class="icon linkedin">
          <div class="tooltip">
            Linkedin
          </div>
          <span><i class="fab fa-linkedin"><FaLinkedin /></i></span>
        </div>
        <div class="icon instagram">
          <div class="tooltip">
            Instagram
          </div>
          <span><i class="fab fa-instagram"><FaInstagram /></i></span>
        </div>
        <div class="icon github">
          <div class="tooltip">
            Github
          </div>
          <span><i class="fab fa-github"><FaGithub /></i></span>
        </div>
      </div>
      <p>© 2023 Todos os direitos reservados</p>
    </section>
  );
};

