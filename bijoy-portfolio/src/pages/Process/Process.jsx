import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "OBSERVE",
    description:
      "Understand the problem before touching the code.",
    meta: "RESEARCH / CONTEXT",
  },
  {
    number: "02",
    title: "DEFINE",
    description:
      "Reduce complexity and identify the problem worth solving.",
    meta: "STRUCTURE / PRIORITY",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Think about the experience before implementing the system.",
    meta: "INTERACTION / ARCHITECTURE",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Code, test, break, iterate, and improve.",
    meta: "IMPLEMENTATION / ITERATION",
  },
  {
    number: "05",
    title: "SHIP",
    description:
      "Turn the experiment into something usable.",
    meta: "DEPLOY / LEARN",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="process-page"
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <header className="process-header">

        <div className="process-header-left">
          <span>
            BIJOY.DEV
          </span>

          <span>
            SOFTWARE ENGINEER / BUILDER
          </span>
        </div>

        <div className="process-header-right">
          <span>
            2026
          </span>

          <span>
            04 / 05
          </span>

          <span>
            BUILDING PROCESS
          </span>
        </div>

      </header>


      {/* =====================================
          HERO
      ===================================== */}

      <div className="process-hero">

        <div className="process-hero-label">
          <span className="process-blue-line" />

          <span>
            PROCESS / METHODOLOGY
          </span>
        </div>


        <h2 className="process-title">
          <span>HOW</span>
          <span>I BUILD.</span>
        </h2>


        <p className="process-intro">
          I turn problems into systems, ideas into
          interfaces, and experiments into things
          people can use.
        </p>

      </div>


      {/* =====================================
          PROCESS LINE
      ===================================== */}

      <div className="process-system">

        <div className="process-line" />

        <div className="process-steps">

          {processSteps.map((step) => (
            <article
              className={`process-step ${
                step.number === "04"
                  ? "process-step--active"
                  : ""
              }`}
              key={step.number}
            >

              <div className="process-step-top">

                <span className="process-step-number">
                  {step.number}
                </span>

                <span className="process-step-node" />

              </div>


              <div className="process-step-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

                <span className="process-step-meta">
                  {step.meta}
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* =====================================
          BUILD SEQUENCE
      ===================================== */}

      <div className="process-build-sequence">

        <span>CODE</span>

        <span className="process-sequence-arrow">
          →
        </span>

        <span>TEST</span>

        <span className="process-sequence-arrow">
          →
        </span>

        <span>ITERATE</span>

      </div>


      {/* =====================================
          TECHNICAL ANNOTATIONS
      ===================================== */}

      <div className="process-annotation process-annotation--left">
        INPUT
      </div>

      <div className="process-annotation process-annotation--center">
        THINK / PROTOTYPE / IMPLEMENT
      </div>

      <div className="process-annotation process-annotation--right">
        OUTPUT
      </div>


      {/* =====================================
          CURRENT STATE
      ===================================== */}

      <div className="process-current-state">

        <span className="process-state-dot" />

        <span>
          CURRENT STATE / BUILDING
        </span>

      </div>


      {/* =====================================
          BACKGROUND WORDS
      ===================================== */}

      <div className="process-background-words">

        <span>OBSERVE</span>
        <span>DEFINE</span>
        <span>DESIGN</span>
        <span>BUILD</span>
        <span>SHIP</span>

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="process-footer">

        <span>
          04 / BUILDING PROCESS
        </span>

        <a href="#about">

          <span>
            NEXT / ABOUT
          </span>

          <span>
            05 / 05
          </span>

        </a>

      </footer>

    </section>
  );
}

export default Process;