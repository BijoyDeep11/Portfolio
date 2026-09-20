import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "AI / RAG / FULL-STACK",
    name: "LAW LENS",
    description:
      "A document-grounded legal intelligence workspace that turns complex contracts into searchable, contextual conversations with page-aware citations.",
    status: "DEPLOYED",
    type: "FULL-STACK SYSTEM",
    role: "FULL-STACK / AI",
    technologies: [
      "React",
      "Flask",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "OpenAI",
    ],
    images: ["/images/lawlens-01.png", "/images/lawlens-02.png"],
    liveUrl: "https://law-lens-frontend-pink.vercel.app",
    githubUrl: "https://github.com/BijoyDeep11/LawLens",
    featured: true,
  },

  {
    number: "02",
    category: "AI / NLP / PYTHON",
    name: "RESUME SCREENER",
    description:
      "An explainable resume screening system combining keyword and semantic similarity to analyze resumes against job descriptions and generate actionable recommendations.",
    status: "DEPLOYED",
    type: "AI / NLP SYSTEM",
    role: "PYTHON DEVELOPER",
    technologies: [
      "Python",
      "spaCy",
      "NLTK",
      "TF-IDF",
      "SBERT",
      "Streamlit",
    ],
    images: [
      "/images/resume-screener-01.png",
      "/images/resume-screener-02.png",
    ],
    liveUrl:
      "https://resume-screener-kbbbxzskmmicaaiockje4t.streamlit.app",
    githubUrl: "https://github.com/BijoyDeep11/resume-screener",
    featured: false,
  },

  {
    number: "03",
    category: "FULL-STACK / WEB APP",
    name: "SCRIBE.",
    description:
      "A modern blogging platform for reading, writing, and managing articles with secure authentication, rich text editing, media management, and protected publishing workflows.",
    status: "DEPLOYED",
    type: "FULL-STACK WEB APP",
    role: "FULL-STACK DEVELOPER",
    technologies: [
      "React",
      "Appwrite",
      "Redux Toolkit",
      "Tailwind CSS",
      "TinyMCE",
      "Vite",
    ],
    images: ["/images/scribe-01.png", "/images/scribe-02.png"],
    liveUrl: "https://blog-app-nine-eta.vercel.app/",
    githubUrl: "https://github.com/BijoyDeep11/Blog-App",
    featured: false,
  },
];

function ProjectVisual({ project, className = "" }) {
  return (
    <div className={`project-visual ${className}`}>
      <div className="project-visual-grid" />

      <div className="project-visual-glow" />

      <div className="project-image-frame">
        <img
          src={project.images[0]}
          alt={`${project.name} project interface`}
          className="project-image project-image-primary"
        />

        {project.images[1] && (
          <img
            src={project.images[1]}
            alt={`${project.name} project interface secondary view`}
            className="project-image project-image-secondary"
          />
        )}
      </div>

      <div className="project-visual-index">
        {project.number} / 03
      </div>

      <div className="project-visual-label">
        <span className="project-visual-label-dot" />
        <span>PROJECT VIEW</span>
      </div>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <span className="project-link-arrow">↗</span>
          <span>LIVE DEMO</span>
        </a>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <span className="project-link-arrow">↗</span>
          <span>GITHUB</span>
        </a>
      )}
    </div>
  );
}

function ProjectInfo({ project }) {
  return (
    <div className="project-info">
      <div className="project-info-top">
        <span className="project-category">{project.category}</span>
      </div>

      <h3 className="project-name">{project.name}</h3>

      <p className="project-description">{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology} className="project-tech">
            {technology}
          </span>
        ))}
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

      <ProjectLinks project={project} />
    </div>
  );
}

function Projects() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projects" className="projects-page">
      <header className="projects-header">
        <div className="projects-kicker">
          <span className="projects-kicker-line" />
          <span>PROJECTS / BUILDS / EXPERIMENTS</span>
        </div>

        <h2 className="projects-title">
          <span>SELECTED</span>
          <span>WORK</span>
        </h2>
      </header>

      <article className="project-featured">
        <div className="project-featured-info">
          <div className="project-number">
            <span>{featuredProject.number}</span>
            <span className="project-number-line" />
            <span>FEATURED BUILD</span>
          </div>

          <ProjectInfo project={featuredProject} />
        </div>

        <ProjectVisual
          project={featuredProject}
          className="project-featured-visual"
        />
      </article>

      <div className="projects-secondary">
        {secondaryProjects.map((project) => (
          <article className="project-secondary" key={project.number}>
            <div className="project-secondary-header">
              <div className="project-number">
                <span>{project.number}</span>
                <span className="project-number-line" />
              </div>

              <span className="project-secondary-category">
                {project.category}
              </span>
            </div>

            <ProjectVisual
              project={project}
              className="project-secondary-visual"
            />

            <ProjectInfo project={project} />
          </article>
        ))}
      </div>

      <footer className="projects-footer">
        <span>03 / SELECTED WORK</span>

        <a href="#process">
          <span>NEXT / PROCESS</span>
          <span>04 / 05</span>
        </a>
      </footer>
    </section>
  );
}

export default Projects;