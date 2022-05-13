import "./index.scss";

const Project = (props) => {
  return (
    <div className="card">
      <div className="card-header">
      <h1 className="card-title">{props.project.name}</h1>
      <img
        className="card-image"
        src={props.project.image}
        alt={props.project.name}
      />
      </div>
      <p className="card-text">{props.project.description}</p>
      <div className="card-links">
        <a
          href={props.project.github_link}
          rel="noreferrer"
          target="_blank"
          className="card-link"
        >
          Check the code on GitHub
        </a>
        <a
          href={props.project.deployed_link}
          rel="noreferrer"
          target="_blank"
          className="card-link"
        >
          Visit the project
        </a>
      </div>
    </div>
  );
};

export default Project;
