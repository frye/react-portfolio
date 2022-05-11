import Project from '../Project';
import './index.scss';
const projectsJson = require('../../assets/projects.json');
const Projects = () => {
  return (
    <div className="projects-container">
      {projectsJson.map(
        (project) => (<Project key={project.name} project={project} />)
      )}
    </div>
  );
};


  export default Projects;