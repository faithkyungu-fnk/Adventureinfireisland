//import react
import { useState } from "react";
import initialProjects from "./data/project.js";

// Import styles
import "./App.css";

// Import components
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

// Main application
function App() {
  // Store all projects
  const [projects, setProjects] = useState(initialProjects);

  // Store the search input
  const [search, setSearch] = useState("");

  // Add a new project
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  // Suggestions for the search box
  const suggestions = projects.filter((project) =>
    project.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Add New Project */}
      <section className="form-section">
        <h2>Add New Project</h2>
        <ProjectForm addProject={addProject} />
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Search Projects</h2>

        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* Auto Suggestions */}
        {search && (
          <div className="suggestions">
            {suggestions.length > 0 ? (
              suggestions.map((project) => (
                <p
                  key={project.id}
                  onClick={() => setSearch(project.title)}
                >
                  {project.title}
                </p>
              ))
            ) : (
              <p>No project found</p>
            )}
          </div>
        )}
      </section>

      {/* Display Projects */}
      <section className="projects-section">
        <h2>My Projects</h2>
        <ProjectList projects={filteredProjects} />
      </section>
    </div>
  );
}

export default App;