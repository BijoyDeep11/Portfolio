import "./Landing.css";

function Landing() {
  return (
    <section className="landing-page">

      {/* ========================================
          TOP INFORMATION
      ======================================== */}

      <div className="landing-top-info">

        <div className="landing-top-item">
          <span>PERSONAL</span>
          <span>PORTFOLIO</span>
        </div>

        <div className="landing-top-item">
          <span>YEAR</span>
          <span>2026</span>
        </div>

        <div className="landing-top-message">
          <span className="landing-blue-line" />

          <div>
            <span>BUILDING DIGITAL SYSTEMS</span>
            <span>FOR A BETTER TOMORROW</span>
          </div>
        </div>

      </div>


      {/* ========================================
          MAIN HERO
      ======================================== */}

      <div className="landing-hero">

        <div className="landing-eyebrow">
          <span className="landing-blue-line" />
          <span>HELLO, I'M BIJOY</span>
        </div>


        <h1 className="landing-title">
          <span>I BUILD</span>

          <span className="landing-title-blue">
            DIGITAL
          </span>

          <span>
            SYSTEMS<span className="landing-dot">.</span>
          </span>
        </h1>


        <p className="landing-intro">
          A software engineer focused on building useful
          products, interactive experiences and
          data-driven systems.
        </p>


        <a
          href="/projects"
          className="landing-cta"
        >
          <span className="landing-cta-circle">
            ↗
          </span>

          <span>
            EXPLORE MY WORK
          </span>
        </a>

      </div>


      {/* ========================================
          PORTRAIT AREA
      ======================================== */}

      <div className="landing-portrait">

        <div className="landing-portrait-circle">

          {/*
            Later replace this placeholder with:

            <img
              src={bijoyPhoto}
              alt="Bijoy"
            />
          */}

          <div className="landing-photo-placeholder">
            <span>+</span>
            <small>ADD YOUR PHOTO</small>
            <small>JPG / PNG / WEBP</small>
          </div>

        </div>


        <div className="landing-portrait-label">
          <span className="landing-blue-line" />

          <span>
            ENGINEER / LEARNER / BUILDER
          </span>
        </div>

      </div>


      {/* ========================================
          LEFT METADATA
      ======================================== */}

      <div className="landing-left-meta">

        <span>BASED IN INDIA</span>

        <span>BUILDING SINCE 2023</span>

      </div>


      {/* ========================================
          RIGHT METADATA
      ======================================== */}

      <div className="landing-right-meta">

        <span>OPEN TO</span>

        <span>
          INTERNSHIPS / COLLABORATIONS
        </span>

      </div>


      {/* ========================================
          SCROLL
      ======================================== */}

      <div className="landing-scroll">

        <span>SCROLL TO EXPLORE</span>

        <span className="landing-scroll-arrow">
          ↓
        </span>

      </div>

    </section>
  );
}

export default Landing;