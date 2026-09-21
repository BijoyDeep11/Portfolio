import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "AI / RAG / FULL-STACK",
    name: "LAW LENS",
    description:
      "A document-grounded legal intelligence workspace that turns complex contracts into searchable, contextual conversations with page-aware citations.",
    technologies: ["REACT", "FLASK", "POSTGRESQL", "PGVECTOR", "RAG", "OPENAI"],
    status: "DEPLOYED",
    type: "FULL-STACK SYSTEM",
    role: "FULL-STACK / AI",
    liveUrl: "https://law-lens-frontend-pink.vercel.app",
    githubUrl: "https://github.com/BijoyDeep11/LawLens",
  },
  {
    number: "02",
    category: "AI / NLP / PYTHON",
    name: "RESUME SCREENER",
    description:
      "An explainable resume screening system combining keyword and semantic similarity to analyze resumes against job descriptions and generate actionable recommendations.",
    technologies: ["PYTHON", "SPACY", "NLTK", "TF-IDF", "SBERT", "STREAMLIT"],
    status: "DEPLOYED",
    type: "AI / NLP SYSTEM",
    role: "PYTHON DEVELOPER",
    liveUrl:
      "https://resume-screener-kbbbxzskmmicaaiockje4t.streamlit.app",
    githubUrl: "https://github.com/BijoyDeep11/resume-screener",
  },
  {
    number: "03",
    category: "FULL-STACK / WEB APP",
    name: "SCRIBE.",
    description:
      "A modern blogging platform for reading, writing, and managing articles with secure authentication, rich text editing, media management, and protected publishing workflows.",
    technologies: [
      "REACT",
      "APPWRITE",
      "REDUX TOOLKIT",
      "TAILWIND CSS",
      "TINYMCE",
      "VITE",
    ],
    status: "DEPLOYED",
    type: "FULL-STACK WEB APP",
    role: "FULL-STACK DEVELOPER",
    liveUrl: "https://blog-app-nine-eta.vercel.app/",
    githubUrl: "https://github.com/BijoyDeep11/Blog-App",
  },
];

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5" />
      <path d="M19 5l-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.84 9.49.5.09.68-.217.68-.483 0-.237-.01-1.024-.014-1.855-2.782.605-3.369-1.18-3.369-1.18-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.005.07 1.534 1.032 1.534 1.032.892 1.53 2.341 1.088 2.915.832.091-.647.35-1.088.636-1.339-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.845a9.58 9.58 0 0 1 2.504.337c1.91-1.294 2.75-1.025 2.75-1.025.545 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.31.679.92.679 1.854 0 1.338-.012 2.418-.012 2.748 0 .269.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="projects-links">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="projects-link projects-link--primary"
      >
        <span>LIVE DEMO</span>
        <ExternalIcon />
      </a>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="projects-link"
      >
        <GithubIcon />
        <span>GITHUB</span>
      </a>
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <>
      <div className="projects-tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="projects-meta">
        <div>
          <small>STATUS</small>
          <span><i />{project.status}</span>
        </div>

        <div>
          <small>TYPE</small>
          <span>{project.type}</span>
        </div>

        <div>
          <small>ROLE</small>
          <span>{project.role}</span>
        </div>
      </div>

      <ProjectLinks project={project} />
    </>
  );
}

function LawLensPreview() {
  return (
    <div className="product-window product-window--lawlens">
      <div className="product-window-bar">
        <div className="lawlens-brand">
          <span>⚖</span>
          <strong>LawLens</strong>
        </div>

        <div className="lawlens-user">
          <span>◉</span>

          <div>
            <b>SAM BAHADUR</b>
            <small>Personal workspace</small>
          </div>

          <em>⌄</em>
        </div>
      </div>

      <div className="lawlens-layout">
        <aside className="lawlens-sidebar">
          <div className="lawlens-nav is-active">▦ <span>Dashboard</span></div>
          <div className="lawlens-nav">▤ <span>Documents</span></div>
          <div className="lawlens-nav">□ <span>Chat</span></div>
          <div className="lawlens-nav">⌕ <span>Analytics</span></div>
        </aside>

        <div className="lawlens-content">
          <div className="lawlens-kicker">
            <span /> LEGAL INTELLIGENCE WORKSPACE
          </div>

          <div className="lawlens-heading">
            <div>
              <h4>Welcome back, <b>SAM BAHADUR</b></h4>
              <p>Your documents, conversations and AI analysis in one place.</p>
            </div>

            <button>＋ Upload document</button>
          </div>

          <div className="lawlens-stats">
            <div><small>DOCUMENTS</small><b>1</b><span>Your workspace</span></div>
            <div><small>PAGES INDEXED</small><b>7</b><span>Across repository</span></div>
            <div><small>CATEGORIES</small><b>1</b><span>Across repository</span></div>
            <div><small>CHUNKS INDEXED</small><b>30</b><span>Across repository</span></div>
          </div>

          <div className="lawlens-lower">
            <div className="lawlens-repository">
              <small>REPOSITORY</small>
              <h5>Document workspace <span>View all ↗</span></h5>
              <p>Your indexed legal knowledge base</p>

              <div className="lawlens-document">
                <strong>▤</strong>

                <div>
                  <b>LawLens_Test_Legal_Document</b>
                  <span>Legal Notice · 7 pages · 30 Aug 2026</span>
                </div>

                <i>● INDEXED</i>
              </div>
            </div>

            <div className="lawlens-chat">
              <small>AI WORKSPACE</small>
              <h5>Recent conversations</h5>

              <div>◯ <b>How quickly must a Critical Incident be acknowledged...</b> ↗</div>
              <div>◯ <b>Chat: LawLens_Test_Legal_Document</b> ↗</div>
              <div>◯ <b>General Document Chat</b> ↗</div>

              <section>
                <strong>✣</strong>

                <div>
                  <b>Ask LawLens</b>
                  <span>Ask a question about your documents</span>
                </div>

                <em>↗</em>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumePreview() {
  return (
    <div className="product-window product-window--resume">
      <div className="browser-bar">
        <i /><i /><i />
        <span>resume-screener</span>
        <b>⋮</b>
      </div>

      <div className="resume-preview-layout">
        <div className="resume-upload-panel">
          <h4>📄 AI-Powered Resume Screener</h4>
          <p>Upload resumes and a job description to see how well they match.</p>

          <label>Upload Resume(s) (PDF or DOCX)</label>

          <div className="resume-drop">
            <strong>♧</strong>

            <span>
              Drag and drop files here
              <small>Limit 200MB per file · PDF, DOCX</small>
            </span>

            <button>Browse files</button>
          </div>

          <label>Upload Job Description (TXT)</label>

          <div className="resume-drop">
            <strong>♧</strong>

            <span>
              Drag and drop file here
              <small>Limit 200MB per file · TXT</small>
            </span>

            <button>Browse files</button>
          </div>

          <button className="resume-analyze">Analyze Match</button>
        </div>

        <div className="resume-detail-panel">
          <h5>🔎 Detailed View</h5>

          <div className="resume-score">
            <small>Final Match Score</small>
            <b>24.72%</b>
          </div>

          <div className="resume-score">
            <small>TF-IDF Similarity</small>
            <b>9.67%</b>
          </div>

          <div className="resume-score">
            <small>Semantic Similarity</small>
            <b>59.95%</b>
          </div>

          <div className="resume-section">
            <h6>📍 Skill Hits in Context</h6>
            <p><b>Skills found here:</b> Mongodb, C, Node</p>
            <span>...developer building end-to-end apps. skills react, node.js, mongodb projects task manager app mern stack application...</span>
          </div>

          <div className="resume-section">
            <h6>📄 Extracted Profile</h6>
            <p><b>Name:</b> Rohit Patel</p>
            <p><b>Skills:</b> mongodb, c, react, node</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScribePreview() {
  return (
    <div className="product-window product-window--scribe">
      <div className="scribe-browser-bar">
        <span>♧ <b>Scribe.</b></span>

        <nav>
          <span>Home</span>
          <span>All Posts</span>
          <span>Add Post</span>
          <span>Logout</span>
        </nav>
      </div>

      <div className="scribe-hero">
        <div className="scribe-pen">✎</div>

        <h4>
          Publish your passions,
          <em>your way.</em>
        </h4>

        <p>
          Create a unique and beautiful blog. It’s easy and free.
          <b> Login</b> to start reading the latest stories.
        </p>
      </div>

      <div className="scribe-latest">
        <small>LATEST WRITINGS</small>

        <div className="scribe-post-grid">
          <article className="scribe-post scribe-post--large">
            <div className="scribe-post-image scribe-post-image--diagram">
              <span>WaspBlog Application Workflow</span>
              <i /><i /><i /><i />
            </div>

            <h5>Building My First<br />Full-Stack Blog</h5>
            <span>Sep 20, 2026</span>
          </article>

          <article className="scribe-post">
            <div className="scribe-post-image scribe-post-image--code">
              <span>VECTOR DB</span>
            </div>

            <h5>Understanding<br />Vector Databases</h5>
            <span>Sep 12, 2026</span>
          </article>

          <article className="scribe-post">
            <div className="scribe-post-image scribe-post-image--mountain">
              <span>TECH / BUILD</span>
            </div>

            <h5>My Journey<br />in Tech</h5>
            <span>Aug 28, 2026</span>
          </article>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ number }) {
  if (number === "01") return <LawLensPreview />;
  if (number === "02") return <ResumePreview />;
  return <ScribePreview />;
}

function ProjectSection({ project, reverse = false }) {
  return (
    <article className={`project-row ${reverse ? "project-row--reverse" : ""}`}>
      <div className="project-copy">
        <div className="project-index">
          <span>{project.number}</span>
          <i />
        </div>

        <span className="project-category">{project.category}</span>

        <h3 className="project-title">
          {project.name.split(" ").map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={index === project.name.split(" ").length - 1 ? "project-title-accent" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h3>

        <p className="project-description">{project.description}</p>

        <ProjectDetails project={project} />
      </div>

      <div className="project-visual">
        <div className="project-visual-glow" />
        <ProjectPreview number={project.number} />
      </div>
    </article>
  );
}

function Projects() {
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 78%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      headerTimeline
        .from(".projects-header-kicker", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".projects-header-main h1",
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.25"
        )
        .from(
          ".projects-header-main p",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.45"
        )
        .from(
          ".projects-count",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        );

      gsap.utils.toArray(".project-row").forEach((row) => {
        const copy = row.querySelector(".project-copy");
        const visual = row.querySelector(".project-visual");
        const windowElement = row.querySelector(".product-window");
        const glow = row.querySelector(".project-visual-glow");

        const rowTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 78%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        rowTimeline
          .from(copy, {
            y: 40,
            opacity: 0,
            duration: 0.7,
          })
          .from(
            visual,
            {
              y: 35,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.55"
          )
          .from(
            windowElement,
            {
              scale: 0.97,
              duration: 0.9,
            },
            "-=0.7"
          );

        gsap.to(windowElement, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(glow, {
          y: -55,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      gsap.from(".projects-footer", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-footer",
          start: "top 90%",
          once: true,
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="projects-page"
      ref={projectsRef}
    >
      <div className="projects-grid" />

      <div className="projects-atmosphere" />

      <header className="projects-header">
        <div className="projects-header-kicker">
          <span />
          <span>SELECTED WORK</span>
        </div>

        <div className="projects-header-main">
          <div>
            <h1>
              THREE SYSTEMS
              <br />
              I’VE BUILT <span>AND SHIPPED.</span>
            </h1>

            <p>
              Different problems. Different technologies.
              <br />
              Same approach: turn ideas into real, usable products.
            </p>
          </div>

          <div className="projects-count">
            <strong>03</strong>
            <span>PROJECTS</span>
          </div>
        </div>
      </header>

      <div className="projects-list">
        <ProjectSection project={projects[0]} />

        <ProjectSection project={projects[1]} reverse />

        <ProjectSection project={projects[2]} />
      </div>

      <footer className="projects-footer">
        <span>03 / SELECTED WORK</span>

        <i />

        <a href="#process">
          <span>NEXT / PROCESS</span>
          <b>04 / 05</b>
          <em>→</em>
        </a>
      </footer>
    </section>
  );
}

export default Projects;