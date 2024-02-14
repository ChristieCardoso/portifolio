import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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

  const [text] = useTypewriter({
    words: ["Web Development", "Responsive Design", "CSS Frameworks", "UI/UX Design", "API Integration", "SWE Principles"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2500,
  });
  return (
    <main className="MainContainer">
      <div className="NameContainer">
        <h1 className="MainText">
          Hi, I'm <span className="MainSpan">Christie Cardoso</span>
        </h1>

        <h2 className="MainTypewriter">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="rgba(40, 45, 119)"
          />
        </h2>
      </div>
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
          Ver Mais
        </Link>
      </div>
    </main>
  );
};
