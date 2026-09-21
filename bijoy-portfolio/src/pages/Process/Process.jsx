import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Process.css";

gsap.registerPlugin(ScrollTrigger);

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
  const processRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const page = processRef.current;

      const header = page.querySelector(".process-header");
      const heroLabel = page.querySelector(".process-hero-label");
      const title = page.querySelector(".process-title");
      const intro = page.querySelector(".process-intro");
      const line = page.querySelector(".process-line");
      const steps = page.querySelectorAll(".process-step");
      const sequence = page.querySelector(".process-build-sequence");
      const annotations = page.querySelectorAll(".process-annotation");
      const currentState = page.querySelector(".process-current-state");
      const footer = page.querySelector(".process-footer");
      const backgroundWords = page.querySelector(
        ".process-background-words"
      );

      /* ========================================
         INITIAL STATES
      ======================================== */

      gsap.set(
        [
          header,
          heroLabel,
          title,
          intro,
          steps,
          sequence,
          annotations,
          currentState,
          footer,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(header, {
        y: -18,
      });

      gsap.set(heroLabel, {
        x: -25,
      });

      gsap.set(title, {
        y: 55,
      });

      gsap.set(intro, {
        x: 25,
      });

      gsap.set(steps, {
        y: 45,
      });

      gsap.set(sequence, {
        y: 15,
      });

      gsap.set(annotations, {
        y: 10,
      });

      gsap.set(currentState, {
        x: -15,
      });

      gsap.set(footer, {
        y: 12,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* ========================================
         MAIN SCROLL TIMELINE
      ======================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      })
        .to(
          heroLabel,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          intro,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          line,
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power2.inOut",
          },
          "-=0.25"
        )
        .to(
          steps,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.65"
        )
        .to(
          sequence,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          annotations,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          currentState,
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          footer,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.15"
        );

      /* ========================================
         BACKGROUND WORDS
      ======================================== */

      gsap.to(backgroundWords, {
        yPercent: -8,
        scrollTrigger: {
          trigger: page,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* ========================================
         ACTIVE BUILD NODE
      ======================================== */

      const activeNode = page.querySelector(
        ".process-step--active .process-step-node"
      );

      gsap.to(activeNode, {
        scale: 1.35,
        boxShadow:
          "0 0 22px rgba(18, 107, 255, 0.9)",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, processRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      className="process-page"
      ref={processRef}
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <header className="process-header">
        <div className="process-header-left">
          <span>BIJOY.DEV</span>

          <span>
            SOFTWARE ENGINEER / BUILDER
          </span>
        </div>

        <div className="process-header-right">
          <span>2026</span>
          <span>04 / 05</span>
          <span>BUILDING PROCESS</span>
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
                <h3>{step.title}</h3>

                <p>{step.description}</p>

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
          <span>NEXT / ABOUT</span>
          <span>05 / 05</span>
        </a>
      </footer>
    </section>
  );
}

export default Process;