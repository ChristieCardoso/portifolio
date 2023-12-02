import aboutPromoImg from '../../img/chs.png';
import { AboutText } from './AboutText/AboutText';
import { TechSkills } from './TechSckills/TechSckills';
import { GithubCalendar } from './GitHubCalendar/GitHubCalendar';

import './About.scss';

export const About = () => {
  return (
    <section className='aboutContainer'>
      <div className='about'>
        <div className='aboutTextContainer'>
          <h1 className='aboutTitle'>Deixe-me <b>apresentar</b></h1>
          <AboutText />
        </div>

        <div className='aboutImg'>
          <img src={aboutPromoImg} alt="about-img" />
        </div>
      </div>
      <div className='aboutTechSckillsContainer'>
        <h2 className='skills'>Estudando</h2>
        <TechSkills />
      </div>
      <div className='aboutGithubContainer'>
        <h2 className='githubActivity'>Contribuições</h2>
        <GithubCalendar />
      </div>
    </section>
  )
}
