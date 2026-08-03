function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* project category banner */}
      <div className="project-banner">
        <h3>{project.category}</h3>
      </div>

      {/* project information */}
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;