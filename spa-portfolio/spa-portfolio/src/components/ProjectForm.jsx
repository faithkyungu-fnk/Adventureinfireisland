import { useState } from "react";

//adding a new project
function ProjectForm({ addProject }) {

  //store the title input
  const [title, setTitle] = useState("");

  //store description input
  const [description, setDescription] = useState("");

  // handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    //prevent empty submission
    if (!title || !description) {
      return;
    }

    //create a new project object
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
      category: "New Project"
    };

    //send project to app.js
    addProject(newProject);

    //clear form
    setTitle("");
    setDescription("");
  }

  return (
    <section className="form-section">

      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit}>

        {/* project title */}
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        {/* Project description */}
        <textarea
          placeholder="Project Description"
          rows="5"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        {/* Submit button */}
        <button type="submit">
          Add Project
        </button>

      </form>

    </section>
  );
}

export default ProjectForm;