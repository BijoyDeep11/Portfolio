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
    images: [
      "/images/lawlens-01.png",
      "/images/lawlens-02.png",
    ],
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
    images: [
      "/images/scribe-01.png",
      "/images/scribe-02.png",
    ],
    liveUrl: "https://blog-app-nine-eta.vercel.app/",
    githubUrl: "https://github.com/BijoyDeep11/Blog-App",
    featured: false,
  },
];

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link project-link--primary"
      >
        <span className="project-link-arrow">↗</span>
        <span>LIVE DEMO</span>
      </a>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        <span className="project-link-arrow">↗</span>
        <span>GITHUB</span>
      </a>
    </div>
  );
}

function ProjectTags({ project }) {
  return (
    <div className="project-technologies">
      {project.technologies.map((technology) => (
        <span className="project-tech" key={technology}>
          {technology}
        </span>
      ))}
    </div>
  );
}

function ProjectMetadata({ project }) {
  return (
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
  );
}

function FeaturedVisual({ project }) {
  return (
    <div className="featured-visual">
      <div className="featured-visual-grid" />
      <div className="featured-visual-glow" />

      <div className="featured-image featured-image--main">
        <img
          src={project.images[0]}
          alt={`${project.name} landing interface`}
        />
      </div>

      <div className="featured-image featured-image--secondary">
        <img
          src={project.images[1]}
          alt={`${project.name} dashboard interface`}
        />
      </div>

      <div className="featured-image-index">
        01 / 03
      </div>

      <div className="featured-visual-label">
        <span />
        <span>PROJECT VIEW</span>
      </div>
    </div>
  );
}

function SecondaryVisual({ project }) {
  return (
    <div className="secondary-visual">
      <div className="secondary-visual-glow" />

      <div className="secondary-image secondary-image--main">
        <img
          src={project.images[0]}
          alt={`${project.name} interface`}
        />
      </div>

      <div className="secondary-image secondary-image--secondary">
        <img
          src={project.images[1]}
          alt={`${project.name} secondary interface`}
        />
      </div>
    </div>
  );
}

function Projects() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projects" className="projects-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="projects-header">

        <div className="projects-kicker">
          <span className="projects-kicker-line" />
          <span>PROJECTS / BUILDS / EXPERIMENTS</span>
        </div>

        <div className="projects-header-row">

          <h2 className="projects-title">
            <span>SELECTED</span>
            <span>WORK</span>
          </h2>

          <p className="projects-header-description">
            A collection of projects where I turn ideas into real,
            working systems. Each project represents a problem I
            cared about, a skill I wanted to learn, and a step
            towards the engineer I want to become.
          </p>

        </div>

        <span className="projects-page-index">
          [ 03 / 05 ]
        </span>

      </header>


      {/* ========================================
          FEATURED PROJECT
      ======================================== */}

      <article className="project-featured">

        <div className="project-featured-info">

          <div className="project-number">
            <span>{featuredProject.number}</span>
            <span className="project-number-line" />
            <span>FEATURED BUILD</span>
          </div>

          <span className="project-category">
            {featuredProject.category}
          </span>

          <h3 className="project-name">
            <span>LAW</span>{" "}
            <span className="project-name-accent">LENS</span>
          </h3>

          <p className="project-description">
            {featuredProject.description}
          </p>

          <ProjectTags project={featuredProject} />

          <ProjectMetadata project={featuredProject} />

          <ProjectLinks project={featuredProject} />

        </div>

        <FeaturedVisual project={featuredProject} />

      </article>


      {/* ========================================
          SECONDARY PROJECTS
      ======================================== */}

      <div className="projects-secondary">

        {secondaryProjects.map((project) => (
          <article
            className="project-secondary"
            key={project.number}
          >

            <div className="project-secondary-info">

              <div className="project-secondary-top">
                <div className="project-number">
                  <span>{project.number}</span>
                  <span className="project-number-line" />
                </div>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3 className="project-secondary-name">
                {project.number === "02" ? (
                  <>
                    RESUME <span>SCREENER</span>
                  </>
                ) : (
                  <>
                    SCRIBE<span>.</span>
                  </>
                )}
              </h3>

              <p className="project-secondary-description">
                {project.description}
              </p>

              <ProjectTags project={project} />

              <ProjectMetadata project={project} />

              <ProjectLinks project={project} />

            </div>

            <SecondaryVisual project={project} />

          </article>
        ))}

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="projects-footer">

        <span>03 / SELECTED WORK</span>

        <span className="projects-footer-line" />

        <a href="#process">
          <span>NEXT / PROCESS</span>
          <span>04 / 05</span>
          <span className="projects-footer-arrow">→</span>
        </a>

      </footer>

    </section>
  );
}

export default Projects;