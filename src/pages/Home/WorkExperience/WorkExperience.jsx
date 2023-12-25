import './WorkExperience.scss';

export const WorkExperience = () => {
  return (
    <div className='WorkExperienceContainer'>
      <h1 className='ProfessionalExperienceTitle'>Experiência Profissional</h1>
      <div className='WorkExperienceBody'>
        <div className='WorkExperienceCard'>
          <h3 className='WorkExperienceTitle'>Desenvolvedor WordPress</h3>
          <span className='WorkExperienceAge'>out 2023 ° No Momento ° (3 meses)</span>
          <p className='WorkExperienceText' >
            Desenvolvimento de funcionalidades personalizadas usando linguagens como PHP, HTML, CSS e JavaScript. Monitoramento e análise de métricas de desempenho do site, como tempo de carregamento, taxa de rejeição e conversões.
          </p>
          <div className='WorkExperienceCompe'>Competência</div>
          <span className='WorkExperienceTech'>WordPress | JavaScript | HTML5 | CSS3</span>
        </div>

        <div className='WorkExperienceCard'>
          <h3 className='WorkExperienceTitle'>Freelancer em Desenvolvimento Web</h3>
          <span className='WorkExperienceAge'>° No Momento °</span>
          <p className='WorkExperienceText'>
            Atuo como freelancer no desenvolvimento e manutenção de interfaces utilizando React, Next.js e Tailwind CSS. Tenho conhecimentos sólidos em JavaScript, HTML e CSS, além de experiência com o uso do Figma para criação de designs. Trabalho de forma independente, entregando projetos com qualidade e dentro dos prazos estabelecidos.
          </p>
          <div className='WorkExperienceCompe'>Competência</div>
          <span className='WorkExperienceTech'>React | Next.js | Tailwind CSS</span>
        </div>
      </div>
    </div>

  )
}
