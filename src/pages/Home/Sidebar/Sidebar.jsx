import { motion } from 'framer-motion';
import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { BottonCurriculo } from "../../../components/Botton/BottonCurriculo";
import Avatar from "../../../img/chs.png";

import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="SidebarContainer">
      <motion.img src={Avatar} alt="Chs" initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          mass: 4.5,
          stiffness: 260,
          damping: 20

        }} />
      <p className="SidebarTitle">Desenvolvedor Web</p>
      <section className="SidebarInfoContainer">
        <div className="SidebarInfoCard">
          <AiOutlineWhatsApp id="whatsapp-icon" />
          <div>
            <h3>Telefone</h3>
            <p>(31)9999-999</p>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>E-mail</h3>
            <p>christiecardoso@hotmail.com</p>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Localização</h3>
            <p>Belo Horizonte / MG</p>
          </div>
        </div>
      </section>
      <BottonCurriculo />
    </aside>
  );
};
