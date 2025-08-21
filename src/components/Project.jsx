import "../styles/Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <h1>{props.projectName}</h1>
      <p>{props.description}</p>
        <p><b>Technologies:</b> {props.techonolgies}</p>
        <div className="links">
            {props.links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="projectLink">
                    {link.name} 
                    <span className="linkIcon">🔗</span>
                </a>
            ))}
        </div>
    </div>
  );
}