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
          opacity: 0,
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

      {/* **TOP INFORMATION** */}
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

      {/* **HERO** */}
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
          <p className="landing-intro">
            A software engineer focused on building useful
            products, interactive experiences and
            data-driven systems.
          </p>
          <a
            href="#projects"
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
      </div>

      {/* **PORTRAIT** */}
      <div className="landing-portrait">
        <div className="landing-portrait-circle">
          <img
            src="/images/bijoy-landing.png"
            alt="Bijoy"
            className="landing-portrait-image"
          />
        </div>

        <div className="landing-portrait-label">
          <span className="landing-blue-line" />
          <span>
            ENGINEER / LEARNER / BUILDER
          </span>
        </div>
      </div>

      {/* **BOTTOM LEFT** */}
      <div className="landing-left-meta">
        <span>
          BASED IN INDIA
        </span>
        <span>
          BUILDING SINCE 2023
        </span>
      </div>

      {/* **SCROLL** */}
      <a
        href="#dashboard"
        className="landing-scroll"
      >
        <span>
          SCROLL TO EXPLORE
        </span>
        <span className="landing-scroll-arrow">
          ↓
        </span>
      </a>

      {/* **BOTTOM RIGHT** */}
      <div className="landing-right-meta">
        <span>
          OPEN TO
        </span>
        <span>
          INTERNSHIPS / COLLABORATIONS
        </span>
      </div>
    </section>
  );
}

export default Landing;