import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaWordpress } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";

import "react-vertical-timeline-component/style.min.css";
import './WorkExperience.scss';


export const WorkExperience = () => {
  return (
    <div className='WorkExperienceContainer'>
      <h1 className='ProfessionalExperienceTitle'>Experiências</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SiFreelancer />}
        >

          <h3 className="vertical-timeline-element-title">
            Freelancer em Desenvolvimento Web
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Atual
          </h4>
          <p>
            Atuo como freelancer no desenvolvimento e manutenção de interfaces utilizando React, Next.js e Tailwind CSS. Tenho conhecimentos sólidos em JavaScript, HTML e CSS, além de experiência com o uso do Figma para criação de designs. Trabalho de forma independente, entregando projetos com qualidade e dentro dos prazos estabelecidos.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaWordpress />}
        >

          <h3 className="vertical-timeline-element-title">
            Estagiário de Desenvolvimento Web | Domyni
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            set 2023 - fev 2024
          </h4>
          <p>
            Desenvolvimento de funcionalidades personalizadas usando linguagens como PHP, HTML, CSS, JavaScript e Wordpress.
            Configuração e gerenciamento de contas de hospedagem no servidor cPanel, gerenciamento de arquivos e gerenciamento de emails.
            Configuração de temas responsivos para garantir uma experiência de usuário otimizada em dispositivos móveis
            Monitoramento e análise de métricas de desempenho do site, como tempo de carregamento, taxa de rejeição e conversões.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Estagiário de TI | Rheoli
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            mai 2023 - ago 2023
          </h4>
          <p>Responsável pelo atendimento ao cliente, atuando em toda a rotina de TI como suporte ao usuário, abertura de chamados, backup, instalação, configuração, manutenção e formatação de computadores. </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>

  )
}
