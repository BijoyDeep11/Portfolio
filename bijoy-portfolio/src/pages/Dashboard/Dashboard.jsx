import "./Dashboard.css";

const stats = [
  {
    number: "01",
    value: "06",
    label: "PROJECTS BUILT",
  },
  {
    number: "02",
    value: "50+",
    label: "DSA QUESTIONS",
  },
  {
    number: "03",
    value: "12+",
    label: "TECHNOLOGIES",
  },
  {
    number: "04",
    value: "OCT 2024",
    label: "BUILDING SINCE",
  },
];

const stack = [
  {
    title: "FRONTEND",
    technologies: [
      "REACT",
      "JAVASCRIPT",
      "HTML / CSS",
      "TAILWIND CSS",
    ],
  },
  {
    title: "BACKEND",
    technologies: [
      "NODE.JS",
      "EXPRESS",
      "FASTAPI",
      "FLASK",
    ],
  },
  {
    title: "DATA / TOOLS",
    technologies: [
      "POSTGRESQL",
      "SQLITE",
      "APPWRITE",
      "GIT / GITHUB",
    ],
  },
];

const focusAreas = [
  {
    number: "01",
    title: "FRONTEND SYSTEMS",
    description:
      "Interactive interfaces and modern React applications.",
  },
  {
    number: "02",
    title: "BACKEND DEVELOPMENT",
    description:
      "APIs, authentication and practical server systems.",
  },
  {
    number: "03",
    title: "DATA VISUALIZATION",
    description:
      "Turning data into meaningful and useful experiences.",
  },
  {
    number: "04",
    title: "AI / INTELLIGENT SYSTEMS",
    description:
      "Exploring AI tools and building practical solutions.",
  },
];

function Dashboard() {
  return (
    <section
      id="dashboard"
      className="dashboard-page"
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <header className="dashboard-header">

        <div className="dashboard-kicker">
          <span className="dashboard-kicker-line" />

          <span>
            ENGINEERING / OVERVIEW
          </span>
        </div>

        <h2 className="dashboard-title">
          <span>ENGINEERING</span>

          <span>
            DASHBOARD
          </span>
        </h2>

      </header>


      {/* =====================================
          STATS
      ===================================== */}

      <div className="dashboard-stats">

        {stats.map((stat) => (
          <article
            className="dashboard-stat"
            key={stat.number}
          >
            <div className="dashboard-stat-top">
              <span>
                {stat.number}
              </span>

              <span className="dashboard-stat-indicator" />
            </div>

            <div className="dashboard-stat-value">
              {stat.value}
            </div>

            <div className="dashboard-stat-label">
              {stat.label}
            </div>
          </article>
        ))}

      </div>


      {/* =====================================
          INFORMATION PANELS
      ===================================== */}

      <div className="dashboard-panels">

        {/* CURRENT STACK */}

        <article className="dashboard-panel dashboard-stack">

          <div className="dashboard-panel-header">

            <div>
              <h3>
                CURRENT STACK
              </h3>

              <span>
                TECHNOLOGIES / 2026
              </span>
            </div>

          </div>


          <div className="dashboard-stack-grid">

            {stack.map((group, index) => (
              <div
                className="dashboard-stack-column"
                key={group.title}
              >

                <div className="dashboard-stack-heading">

                  <span className="dashboard-blue-dot" />

                  <span>
                    {group.title}
                  </span>

                  <span className="dashboard-stack-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <ul className="dashboard-stack-list">

                  {group.technologies.map(
                    (technology) => (
                      <li key={technology}>
                        {technology}
                      </li>
                    )
                  )}

                </ul>

              </div>
            ))}

          </div>

        </article>


        {/* CURRENT FOCUS */}

        <article className="dashboard-panel dashboard-focus">

          <div className="dashboard-panel-header">

            <div>
              <h3>
                CURRENT FOCUS
              </h3>

              <span>
                WHAT I'M BUILDING / LEARNING
              </span>
            </div>

          </div>


          <div className="dashboard-focus-list">

            {focusAreas.map((focus) => (
              <div
                className="dashboard-focus-item"
                key={focus.number}
              >

                <span className="dashboard-focus-number">
                  {focus.number}
                </span>

                <div className="dashboard-focus-content">

                  <h4>
                    {focus.title}
                  </h4>

                  <p>
                    {focus.description}
                  </p>

                </div>

              </div>
            ))}

          </div>


          <div className="dashboard-status">

            <span className="dashboard-blue-dot" />

            <span>
              SYSTEM ACTIVE
            </span>

          </div>

        </article>

      </div>


      {/* =====================================
          BOTTOM
      ===================================== */}

      <div className="dashboard-bottom">

        <span>
          02 / ENGINEERING DASHBOARD
        </span>

        <a href="#projects">
          SELECTED WORK
          <span>03 / 06</span>
        </a>

      </div>

    </section>
  );
}

export default Dashboard;