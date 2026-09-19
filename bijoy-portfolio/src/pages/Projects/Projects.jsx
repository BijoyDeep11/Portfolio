import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "[CATEGORY / TYPE]",
    name: "[PROJECT NAME]",
    description: "[SHORT PROJECT DESCRIPTION]",
    status: "[STATUS]",
    type: "[PROJECT TYPE]",
    role: "[ROLE / CONTRIBUTION]",
    technologies: [
      "[TECH 01]",
      "[TECH 02]",
      "[TECH 03]",
      "[TECH 04]",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "[CATEGORY / TYPE]",
    name: "[PROJECT NAME]",
    description: "[SHORT PROJECT DESCRIPTION]",
    status: "[STATUS]",
    type: "[PROJECT TYPE]",
    role: "[ROLE / CONTRIBUTION]",
    technologies: [
      "[TECH 01]",
      "[TECH 02]",
      "[TECH 03]",
      "[TECH 04]",
    ],
    featured: false,
  },
  {
    number: "03",
    category: "[CATEGORY / TYPE]",
    name: "[PROJECT NAME]",
    description: "[SHORT PROJECT DESCRIPTION]",
    status: "[STATUS]",
    type: "[PROJECT TYPE]",
    role: "[ROLE / CONTRIBUTION]",
    technologies: [
      "[TECH 01]",
      "[TECH 02]",
      "[TECH 03]",
      "[TECH 04]",
    ],
    featured: false,
  },
];

function ProjectPlaceholder({
  project,
  className = "",
}) {
  return (
    <div
      className={`project-visual-placeholder ${className}`}
    >
      <div className="project-placeholder-center">
        <span className="project-placeholder-plus">
          +
        </span>

        <span className="project-placeholder-label">
          PROJECT IMAGE
        </span>

        <span className="project-placeholder-format">
          JPG / PNG / WEBP
        </span>
      </div>

      <span className="project-placeholder-index">
        {project.number}
      </span>
    </div>
  );
}

function ProjectInfo({ project }) {
  return (
    <div className="project-info">

      <div className="project-info-top">

        <span className="project-category">
          {project.category}
        </span>

      </div>


      <h3 className="project-name">
        {project.name}
      </h3>


      <p className="project-description">
        {project.description}
      </p>


      <div className="project-technologies">

        {project.technologies.map(
          (technology) => (
            <span
              key={technology}
              className="project-tech"
            >
              {technology}
            </span>
          )
        )}

      </div>


      <div className="project-metadata">

        <div>
          <span>STATUS</span>
          <strong>{project.status}</strong>
        </div>

        <div>
          <span>TYPE</span>
          <strong>{project.type}</strong>
        </div>

        <div>
          <span>ROLE</span>
          <strong>{project.role}</strong>
        </div>

      </div>


      <button
        type="button"
        className="project-explore"
      >
        <span className="project-explore-arrow">
          ↗
        </span>

        <span>
          EXPLORE PROJECT
        </span>
      </button>

    </div>
  );
}

function Projects() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="projects-page"
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <header className="projects-header">

        <div className="projects-kicker">

          <span className="projects-kicker-line" />

          <span>
            PROJECTS / BUILDS / EXPERIMENTS
          </span>

        </div>


        <h2 className="projects-title">
          <span>SELECTED</span>
          <span>WORK</span>
        </h2>

      </header>


      {/* =====================================
          FEATURED PROJECT
      ===================================== */}

      <article className="project-featured">

        <div className="project-featured-info">

          <div className="project-number">
            <span>
              {featuredProject.number}
            </span>

            <span className="project-number-line" />
          </div>


          <ProjectInfo
            project={featuredProject}
          />

        </div>


        <ProjectPlaceholder
          project={featuredProject}
          className="project-featured-visual"
        />

      </article>


      {/* =====================================
          SECONDARY PROJECTS
      ===================================== */}

      <div className="projects-secondary">

        {secondaryProjects.map(
          (project) => (
            <article
              className="project-secondary"
              key={project.number}
            >

              <div className="project-secondary-header">

                <div className="project-number">

                  <span>
                    {project.number}
                  </span>

                  <span className="project-number-line" />

                </div>

                <span className="project-secondary-category">
                  {project.category}
                </span>

              </div>


              <ProjectPlaceholder
                project={project}
                className="project-secondary-visual"
              />


              <ProjectInfo
                project={project}
              />

            </article>
          )
        )}

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="projects-footer">

        <span>
          03 / SELECTED WORK
        </span>


        <a href="#process">
          NEXT / PROCESS

          <span>
            04 / 06
          </span>
        </a>

      </footer>

    </section>
  );
}

export default Projects;