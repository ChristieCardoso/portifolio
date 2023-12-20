import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import './Footer.scss';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

export const Footer = () => {
  return (
    <div className='footerContainer'>
      <p>© 2023 Todos os direitos reservados</p>

      <section id="footerSocialNetworks">
        {socialNetworks.map((network) => (
          <a href="#" className="footerBtnSocial" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}

        <div class="wrapper">
          <div class="icon facebook">
            <div class="tooltip">
              Facebook
            </div>
            <span><i class="fab fa-facebook-f"></i></span>
          </div>
          <div class="icon twitter">
            <div class="tooltip">
              Twitter
            </div>
            <span><i class="fab fa-twitter"></i></span>
          </div>
          <div class="icon instagram">
            <div class="tooltip">
              Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
          </div>
          <div class="icon github">
            <div class="tooltip">
              Github
            </div>
            <span><i class="fab fa-github"><FaGithub /></i></span>
          </div>
          <div class="icon youtube">
            <div class="tooltip">
              YouTube
            </div>
            <span><i class="fab fa-youtube"></i></span>
          </div>
        </div>
      </section>
    </div>
  );
};

