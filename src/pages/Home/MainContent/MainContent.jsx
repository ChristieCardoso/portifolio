import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "./MainContent.scss";

const technologies = [
  { id: "html", name: "HTML5", age: "3 Anos", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", age: "3 Anos", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", age: "3 Anos", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", age: "1 Ano", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", age: "1 Ano", icon: <DiMysql /> },
  { id: "react", name: "React", age: "1 Ano", icon: <DiReact /> },
];


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
  return (
    <main className="MainContainer">
      <motion.div className="MainTechnologies" variants={container}
        initial="hidden"
        animate="visible">
        <h2 className="MainContentTitle">Conhecimentos</h2>
        <div className="MainContainerCard" >
          {technologies.map((tech) => (
            <motion.div className="MainCard" variants={item} id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="MainCardInfo">
                <h3 className="MainCardInfoTitle">{tech.name}</h3>
                <p className="MainCardInfoAge">{tech.age}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="HomeContainerBtn">
        <Link to="/about" className="HomeBtn">
          Veja Mais
        </Link>
      </div>
    </main>
  );
};
