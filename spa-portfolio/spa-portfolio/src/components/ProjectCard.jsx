function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span>{project.technology}</span>
      </div>
    </div>
  );
}

export default ProjectCard;