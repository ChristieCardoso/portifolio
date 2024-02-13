import { CgGym } from "react-icons/cg";
import { IoFastFood, IoGameController } from "react-icons/io5";
import { GiSoccerBall } from "react-icons/gi";
import { GithubCalendar } from './GitHubCalendar/GitHubCalendar';
import './About.scss';

export const About = () => {
  return (
    <section className='aboutContainer'>
      <div className='aboutTextContainer'>
        <p>
          Olá, meu nome é {' '}
          <span>Christie Cardoso</span> {' '}
          sou de <span>Belo Horizonte - MG</span>
          <br />
          Estudo Análise e Desenvolvimento de Sistemas, com previsão de conclusão em junho de 2024.
          <br />
          Possuo habilidades em JavaScript, HTML5/CSS3, Sass, Git, Figma, Postman, conhecimentos básicos em ReactJS, TypeScript e nas bibliotecas de UI TailwindCSS e Material-UI.
          <br />
          Busco constantemente aprimorar minhas habilidades em Front-end, por meio de cursos na Rocketseat, Udemy, entre outros. Além disso, tenho habilidades em trabalho em equipe, adaptabilidade, comprometimento, criatividade e proatividade.
          <br />
        </p>

        <ul>
          <span className="aboutTileHobby">Hobby</span>
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

      <div className="aboutStats">
        <p><a href="https://github.com/ChristieCardoso"><img width="400px" src="https://github-readme-stats.vercel.app/api/top-langs?username=ChristieCardoso&layout=compact&langs_count=20&hide_border=true&theme=chartreuse-dark" alt="Top Languages" /></a></p>
        <p><a href="https://github.com/ChristieCardoso"><img width="400px" src="https://github-readme-streak-stats.herokuapp.com/?user=ChristieCardoso&hide_border=true&theme=chartreuse-dark" alt="GitHub Streak Stats" /></a></p>
      </div>

      <div className='aboutGithubContainer'>
        <GithubCalendar />
      </div>
    </section>
  )
}