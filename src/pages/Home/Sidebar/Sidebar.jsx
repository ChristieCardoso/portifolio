import { AiOutlineMail, AiFillEnvironment, AiFillLinkedin } from "react-icons/ai";
import { BottonCurriculo } from "../../../components/Botton/BottonCurriculo";
import Avatar from "../../../img/chs.png";

import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="SidebarContainer">
      <img src={Avatar} alt="Imagem de Christie"
      />
      <p className="SidebarTitle">Front-End Developer </p>
      <section className="SidebarInfoContainer">
        <div className="SidebarInfoCard">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <p>Belo Horizonte / MG</p>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiFillLinkedin id="in-icon" />
          <div>
            <a href='https://www.linkedin.com/in/christie-cardoso'>in/christie-cardoso</a>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiOutlineMail id="email-icon" />
          <div>
            <p>christiecardoso@hotmail.com</p>
          </div>
        </div>
      </section>
      <BottonCurriculo />
    </aside>
  );
};
