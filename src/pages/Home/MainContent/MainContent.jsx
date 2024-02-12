import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { front, tools, back_db_cloud, language } from "../../../data/skills";

import "./MainContent.scss";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const MainContent = () => {
  const sections = [
    { title: "Language", items: language },
    { title: "Front-End", items: front },
    { title: "Back-End, Database and Cloud", items: back_db_cloud },
    { title: "Tools", items: tools },
  ];
  return (
    <main className="MainContainer">
      {sections.map(({ title, items }) => (
        <motion.div variants={container} initial="hidden" animate="visible" key={title}>
          <h2 className="MainContentTitle">{title}</h2>
          <div className="MainContainerCard">
            {items.map(({ id, icon }) => (
              <motion.div className="MainCard" variants={item} id={id} key={id}>
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
      <div className="HomeContainerBtn">
        <Link to="/about" className="btn-expand">
          Veja Mais
        </Link>
      </div>
    </main>
  );
};
