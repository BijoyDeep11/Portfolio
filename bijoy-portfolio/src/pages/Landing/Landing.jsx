import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import ShaderBackground from "./ShaderBackground";

import "./Landing.css";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const landingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTimeline
        .from(".landing-top-info", {
          y: -20,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".landing-eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".landing-title span",
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".landing-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".landing-portrait",
          {
            y: 45,
            opacity: 0,
            scale: 0.97,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".landing-left-meta, .landing-scroll, .landing-right-meta",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.5"
        );

      gsap.to(".landing-title", {
        y: -55,
        ease: "none",
        scrollTrigger: {
          trigger: landingRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".landing-portrait", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: landingRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".landing-description", {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: landingRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".landing-top-info", {
        y: -20,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: landingRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(
        ".landing-left-meta, .landing-right-meta, .landing-scroll",
        {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: landingRef.current,
            start: "top top",
            end: "65% top",
            scrub: 1,
          },
        }
      );
    }, landingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="landing-page"
      ref={landingRef}
    >
      <ShaderBackground />

      {/* TOP INFORMATION */}
      {/*
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
      */}

      {/* HERO */}
      <div className="landing-hero">
        <div className="landing-eyebrow">
          <span className="landing-blue-line" />

          <span>
            HELLO, I'M BIJOY
          </span>
        </div>

        <h1 className="landing-title">
          <span>I BUILD</span>

          <span className="landing-title-blue">
            DIGITAL
          </span>

          <span>
            SYSTEMS
          </span>
        </h1>

        <div className="landing-description">
          <div className="landing-role">
            <span>
              ASPIRING SOFTWARE ENGINEER
            </span>

            <span className="landing-role-divider">
              |
            </span>

            <span>
              FULL-STACK / AI
            </span>
          </div>

          <p className="landing-intro">
            A software engineer focused on building useful
            products, interactive experiences and
            data-driven systems.
          </p>

          <div className="landing-primary-actions">
            {/* RESUME */}
            <a
              href="https://docs.google.com/document/d/1LMbFt5bHIZHSY9Irtap16id_3pZsa22L/edit?usp=drive_link&ouid=116051463258942372766&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="landing-social-action landing-resume-action magnetic-primary"
              data-magnetic="primary"
              aria-label="View Resume"
            >
              <svg
                className="landing-social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M6 2.5h8.2L19 7.3V21.5H6V2.5Zm7.5 1.8v4h4M8.5 12h8M8.5 15h8M8.5 18h5"
                />
              </svg>

              <span className="landing-action-tooltip">
                VIEW RESUME
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/BijoyDeep11"
              target="_blank"
              rel="noreferrer"
              className="landing-social-action magnetic-primary"
              data-magnetic="primary"
              aria-label="GitHub"
            >
              <svg
                className="landing-social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.24C2 16.77 4.87 20.61 8.84 22C9.34 22.1 9.52 21.78 9.52 21.5V19.76C6.73 20.39 6.14 18.39 6.14 18.39C5.68 17.18 5.03 16.86 5.03 16.86C4.12 16.22 5.1 16.23 5.1 16.23C6.1 16.31 6.63 17.28 6.63 17.28C7.53 18.87 8.99 18.42 9.56 18.16C9.65 17.5 9.91 17.05 10.2 16.8C7.97 16.54 5.62 15.65 5.62 11.58C5.62 10.42 6.02 9.47 6.67 8.72C6.56 8.46 6.21 7.38 6.77 5.92C6.77 5.92 7.63 5.64 9.6 6.99C10.42 6.75 11.21 6.63 12 6.63C12.79 6.63 13.58 6.75 14.4 6.99C16.37 5.64 17.23 5.92 17.23 5.92C17.79 7.38 17.44 8.46 17.33 8.72C17.98 9.47 18.38 10.42 18.38 11.58C18.38 15.66 16.02 16.54 13.79 16.79C14.15 17.11 14.48 17.73 14.48 18.68V21.5C14.48 21.78 14.66 22.1 15.16 22C19.13 20.61 22 16.77 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>

              <span className="landing-action-tooltip">
                GITHUB
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/bijoydeepghosh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="landing-social-action magnetic-primary"
              data-magnetic="primary"
              aria-label="LinkedIn"
            >
              <svg
                className="landing-social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.5 8.5H3V21H6.5V8.5ZM4.75 3C3.64 3 3 3.76 3 4.73C3 5.68 3.62 6.46 4.71 6.46H4.75C5.89 6.46 6.5 5.68 6.5 4.73C6.5 3.76 5.89 3 4.75 3ZM21 13.84C21 10.05 18.98 8.29 16.3 8.29C14.12 8.29 13.14 9.49 12.6 10.34V8.5H9.1V21H12.6V14.04C12.6 13.67 12.63 13.3 12.76 13.03C13.04 12.29 13.68 11.53 14.76 11.53C16.18 11.53 16.9 12.61 16.9 14.2V21H21V13.84Z" />
              </svg>

              <span className="landing-action-tooltip">
                LINKEDIN
              </span>
            </a>

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="landing-project-action magnetic-primary"
              data-magnetic="primary"
            >
              <span className="landing-project-icon">
                VIEW PROJECTS
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* PORTRAIT */}
      <div className="landing-portrait">
        <div className="landing-portrait-circle">
          <img
            src="/images/bijoy-landing.png"
            alt="Bijoy"
            className="landing-portrait-image"
          />
        </div>

        <div className="landing-portrait-label">
          {/*
          <span className="landing-blue-line" />

          <span>
            ENGINEER / LEARNER / BUILDER
          </span>
          */}
        </div>
      </div>

      {/* SCROLL */}
      <a
        href="#dashboard"
        className="landing-scroll"
        data-magnetic
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <span className="landing-scroll-arrow">
          ↓
        </span>
      </a>

      {/* AVAILABILITY */}
      <div className="landing-right-meta">
        <span>
          OPEN TO
        </span>

        <span>
          SOFTWARE ENGINEERING INTERNSHIPS
        </span>

        <span>
          AND FULL-TIME OPPORTUNITIES
        </span>
      </div>
    </section>
  );
}

export default Landing;