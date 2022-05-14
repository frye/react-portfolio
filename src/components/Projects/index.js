import Project from "../Project";
import "./index.scss";
const projectsJson = require("../../assets/projects.json");
const Projects = () => {
  return (
    <>
    <h1>Blah</h1>
    <div className="project-page">
      <h1>Some of my projects</h1>
      <div className="projects-container">
        {projectsJson.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
