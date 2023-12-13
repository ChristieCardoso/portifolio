import { CgGym } from "react-icons/cg";
import { IoFastFood, IoGameController } from "react-icons/io5";
import { GiSoccerBall } from "react-icons/gi";

import './AboutText.scss';

export const AboutText = () => {
  return (
    <div className='aboutTextContainer'>
      <p className="aboutText">
        Ola, Meu nome e {' '}
        <span >Christie Cardoso </span>
        sou de  <span > Belo Horizonte - MG</span>
        <br />
        Estudo Análise e Desenvolvimento de Sistemas, com previsão de conclusão em junho de 2024.
        <br />
        Habilidades em JavaScript, HTML5/CSS3, Sass, Git, Figma, Postman, conhecimentos básicos em ReactJS, TypeScript e nas bibliotecas de UI TailwindCSS e Material-UI.
        <br />
        Busco constantemente aprimorar minhas habilidades em Front-end, por meio de cursos na Rocketseat, Udemy, entre outros. Além disso, possuo habilidades em trabalho em equipe, adaptabilidade, comprometimento, criatividade e proatividade.
        <br />
      </p>

      <ul>
        <span className="aboutTileHobby">Hooby</span>
        <li>
          <IoFastFood className="aboutIcon" /> Gastronomia
        </li>
        <li>
          <IoGameController className="aboutIcon" /> Video Game
        </li>
        <li>
          <CgGym className="aboutIcon" /> Academia
        </li>
        <li>
          <GiSoccerBall className="aboutIcon" /> Futebol
        </li>

      </ul>
    </div>
  );
};

