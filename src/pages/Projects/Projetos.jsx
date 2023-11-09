import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>


      <Link to="/project" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

