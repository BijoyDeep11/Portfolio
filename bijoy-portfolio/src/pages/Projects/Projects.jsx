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
        <span className="project-link-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5H19V10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 5L11 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span>LIVE DEMO</span>
      </a>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        <span className="project-link-icon project-link-icon--github" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.84 21.49C9.34 21.58 9.52 21.272 9.52 21.005C9.52 20.765 9.51 20.14 9.505 19.31C6.726 19.91 6.14 17.97 6.14 17.97C5.685 16.815 5.03 16.507 5.03 16.507C4.122 15.887 5.1 15.9 5.1 15.9C6.105 15.97 6.635 16.932 6.635 16.932C7.53 18.465 8.98 18.03 9.54 17.77C9.63 17.125 9.89 16.685 10.175 16.435C7.955 16.18 5.62 15.325 5.62 11.42C5.62 10.305 6.015 9.395 6.66 8.68C6.555 8.425 6.195 7.39 6.755 5.99C6.755 5.99 7.59 5.72 9.49 7.005C10.285 6.785 11.14 6.675 12 6.67C12.86 6.675 13.715 6.785 14.51 7.005C16.41 5.72 17.245 5.99 17.245 5.99C17.805 7.39 17.445 8.425 17.34 8.68C17.985 9.395 18.38 10.305 18.38 11.42C18.38 15.335 16.04 16.175 13.815 16.425C14.175 16.735 14.495 17.345 14.495 18.28C14.495 19.615 14.485 20.69 14.485 21.005C14.485 21.275 14.665 21.585 15.17 21.49C19.14 20.165 22 16.415 22 12C22 6.477 17.523 2 12 2Z"
            />
          </svg>
        </span>

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