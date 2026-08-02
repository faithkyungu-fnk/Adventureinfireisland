import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">

        {/*looping through the projects */}
        {projects.map((project) =>(
          <ProjectCard
          key={project.id}
          project={project}
          />
        ))}
      </div>
    </section>
  );
}
export default ProjectList;
    