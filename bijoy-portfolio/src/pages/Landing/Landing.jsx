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
            <span>ASPIRING SOFTWARE ENGINEER</span>
            <span className="landing-role-divider">|</span>
            <span>FULL-STACK / AI </span>
          </div>

          <p className="landing-intro">
            A software engineer focused on building useful
            products, interactive experiences and
            data-driven systems.
          </p>

          <div className="landing-primary-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="landing-action landing-action--primary magnetic-primary"
              data-magnetic="primary"
            >
              <span className="landing-action-icon">↗</span>
              <span>VIEW RESUME</span>
            </a>

            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noreferrer"
              className="landing-social-action magnetic-primary"
              data-magnetic="primary"
              aria-label="GitHub"
            >
              <svg
                className="landing-social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.63c-2.65.58-3.21-1.28-3.21-1.28-.44-1.12-1.08-1.41-1.08-1.41-.88-.6.07-.59.07-.59.97.07 1.48.99 1.48.99.87 1.48 2.28 1.05 2.84.8.09-.62.34-1.05.62-1.29-2.12-.24-4.35-1.06-4.35-4.7 0-1.04.37-1.9.99-2.57-.1-.24-.43-1.22.09-2.54 0 0 .81-.26 2.64 1a9.1 9.1 0 0 1 4.8 0c1.83-1.26 2.64-1 2.64-1 .52 1.32.19 2.3.09 2.54.62.67.99 1.53.99 2.57 0 3.65-2.23 4.46-4.36 4.7.35.3.66.88.66 1.77v2.64c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"
                />
              </svg>
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
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
            </a>
          </div>
          <a
            href="#projects"
            className="landing-work-link magnetic-primary"
            data-magnetic="primary"
          >
            <span className="landing-work-circle">
              →
            </span>

            <span>
              VIEW MY WORK
            </span>

            {/* <span className="landing-work-arrow">
              ↘
            </span> */}
          </a>
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