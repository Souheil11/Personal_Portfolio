/* eslint-disable react/prop-types */
import "../styles/Project.css";

export default function Project(props) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2 className="project-title">{props.projectName}</h2>
        <p className="project-description">{props.description}</p>

        <div className="project-tech">
          {props.techonolgies.split(',').map((tech, i) => (
            <span key={i} className="tech-tag">{tech.trim()}</span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {props.links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            {link.name}
            <span className="link-icon">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}