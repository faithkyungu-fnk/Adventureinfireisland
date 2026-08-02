function ProjectForm() {
  return (
    <section className="project-form">
      <h2>Add New Project</h2>

      <input type="text" placeholder="Project Title" />

      <textarea placeholder="Project Description"></textarea>

      <input type="text" placeholder="Image URL" />

      <input type="text" placeholder="Technology Used" />

      <button>Add Project</button>
    </section>
  );
}

export default ProjectForm;