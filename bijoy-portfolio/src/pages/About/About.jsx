import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

/* ========================================
   ICONS
======================================== */

function Icon({ type }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const paths = {
    graduation: (
      <>
        <path
          d="M3 9.5L12 5L21 9.5L12 14L3 9.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M7 12V16.5C9.8 18.7 14.2 18.7 17 16.5V12"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M21 10V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),

    location: (
      <>
        <path
          d="M20 10.5C20 16 12 22 12 22C12 22 4 16 4 10.5C4 6.36 7.58 3 12 3C16.42 3 20 6.36 20 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </>
    ),

    heart: (
      <path
        d="M20.84 4.61C19.81 3.58 18.43 3 17 3C15.57 3 14.19 3.58 13.16 4.61L12 5.77L10.84 4.61C8.69 2.46 5.2 2.46 3.05 4.61C0.9 6.76 0.9 10.25 3.05 12.4L12 21.35L20.95 12.4C23.1 10.25 23.1 6.76 20.84 4.61Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),

    mail: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M4 7L12 13L20 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    ),

    phone: (
      <path
        d="M6.6 3H9L10.5 7L8.7 8.8C9.7 11 11 12.3 13.2 13.3L15 11.5L19 13V15.4C19 16.3 18.3 17 17.4 17C9.7 17 7 14.3 7 6.6C7 5.7 5.7 5 6.6 5V3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),

    resume: (
      <>
        <path
          d="M6 3.5H14.5L18 7V20.5H6V3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M14 3.5V7.5H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M9 11H15M9 14H15M9 17H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),

    arrow: (
      <>
        <path
          d="M7 17L17 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M9 7H17V15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[type]}</svg>;
}

/* ========================================
   SOCIAL ICONS
======================================== */

function GithubIcon() {
  return (
    <svg
      className="about-social-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24C2 16.77 4.87 20.61 8.84 22C9.34 22.1 9.52 21.78 9.52 21.5V19.76C6.73 20.39 6.14 18.39 6.14 18.39C5.68 17.18 5.03 16.86 5.03 16.86C4.12 16.22 5.1 16.23 5.1 16.23C6.1 16.31 6.63 17.28 6.63 17.28C7.53 18.87 8.99 18.42 9.56 18.16C9.65 17.5 9.91 17.05 10.2 16.8C7.97 16.54 5.62 15.65 5.62 11.58C5.62 10.42 6.02 9.47 6.67 8.72C6.56 8.46 6.21 7.38 6.77 5.92C6.77 5.92 7.63 5.64 9.6 6.99C10.42 6.75 11.21 6.63 12 6.63C12.79 6.63 13.58 6.75 14.4 6.99C16.37 5.64 17.23 5.92 17.23 5.92C17.79 7.38 17.44 8.46 17.33 8.72C17.98 9.47 18.38 10.42 18.38 11.58C18.38 15.66 16.02 16.54 13.79 16.79C14.15 17.11 14.48 17.73 14.48 18.68V21.5C14.48 21.78 14.66 22.1 15.16 22C19.13 20.61 22 16.77 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      className="about-social-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3V21H6.5V8.5ZM4.75 3C3.64 3 3 3.76 3 4.73C3 5.68 3.62 6.46 4.71 6.46H4.75C5.89 6.46 6.5 5.68 6.5 4.73C6.5 3.76 5.89 3 4.75 3ZM21 13.84C21 10.05 18.98 8.29 16.3 8.29C14.12 8.29 13.14 9.49 12.6 10.34V8.5H9.1V21H12.6V14.04C12.6 13.67 12.63 13.3 12.76 13.03C13.04 12.29 13.68 11.53 14.76 11.53C16.18 11.53 16.9 12.61 16.9 14.2V21H21V13.84Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="about-social-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22L15.23 9.74L23.2 22H16.96L12.07 14.61L5.6 22H2.5L9.74 13.73L2.1 2H8.5L12.92 8.75L18.9 2ZM17.8 19.84H19.52L7.58 4.05H5.73L17.8 19.84Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="about-social-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* ========================================
   SOCIAL LINKS
======================================== */

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BijoyDeep11",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bijoydeepghosh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <LinkedinIcon />,
  },
  {
    label: "Twitter",
    href: "https://x.com/DeepBijoy11?t=PJj72cZPJmhnlEF9BrnGcw&s=09",
    icon: <TwitterIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hardystic_33?stkn=NWFsaWIwenliZGtz",
    icon: <InstagramIcon />,
  },
  {
    label: "Email",
    href: "mailto:bijoydeep007@gmail.com",
    icon: <Icon type="mail" />,
  },
];

/* ========================================
   ABOUT PAGE
======================================== */

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const page = aboutRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      /* ========================================
         ELEMENTS
      ======================================== */

      const header = page.querySelector(".about-header");

      const backgroundWord = page.querySelector(
        ".about-background-word"
      );

      const portraitSection = page.querySelector(
        ".about-portrait-section"
      );

      const portrait = page.querySelector(
        ".about-portrait"
      );

      const signature = page.querySelector(
        ".about-signature"
      );

      const profile = page.querySelector(
        ".about-profile"
      );

      const profileHeading = page.querySelector(
        ".about-profile-heading"
      );

      const profileName = page.querySelector(
        ".about-profile h1"
      );

      const profileRole = page.querySelector(
        ".about-profile-role"
      );

      const description = page.querySelector(
        ".about-description"
      );

      const details = page.querySelectorAll(
        ".about-detail"
      );

      const contact = page.querySelector(
        ".about-contact"
      );

      /*
        All contact content is handled together.
        This prevents LET'S CONNECT, resume,
        socials and FIND ME ELSEWHERE from
        getting stuck at opacity: 0.
      */
      const contactContent = page.querySelectorAll(
        ".about-contact h2, " +
        ".about-contact-intro, " +
        ".about-contact-cards, " +
        ".about-social-divider, " +
        ".about-socials, " +
        ".about-find-more"
      );

      const footer = page.querySelector(
        ".about-footer"
      );

      /* ========================================
         INITIAL STATES
      ======================================== */

      gsap.set(header, {
        opacity: 0,
        y: -15,
      });

      gsap.set(portraitSection, {
        opacity: 0,
        x: -35,
      });

      gsap.set(portrait, {
        scale: 1.08,
      });

      gsap.set(signature, {
        opacity: 0,
        y: 12,
      });

      gsap.set(profile, {
        opacity: 0,
        x: 35,
      });

      gsap.set(
        [
          profileHeading,
          profileName,
          profileRole,
          description,
        ],
        {
          opacity: 0,
          y: 22,
        }
      );

      gsap.set(details, {
        opacity: 0,
        y: 18,
      });

      gsap.set(contact, {
        opacity: 0,
        x: 35,
      });

      gsap.set(contactContent, {
        opacity: 0,
        y: 18,
      });

      gsap.set(footer, {
        opacity: 0,
        y: 12,
      });

      /* ========================================
         MAIN SCROLL TIMELINE
      ======================================== */

      const tl = gsap.timeline({
  scrollTrigger: {
    trigger: page,
    start: "top 90%",
    end: "top 10%",
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

      /* ========================================
         HEADER
      ======================================== */

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      /* ========================================
         PORTRAIT
      ======================================== */

      tl.to(
        portraitSection,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.35"
      );

      tl.to(
        portrait,
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        signature,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.45"
      );

      /* ========================================
         PROFILE
      ======================================== */

      tl.to(
        profile,
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.55"
      );

      tl.to(
        profileHeading,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        profileName,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.25"
      );

      tl.to(
        profileRole,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
        },
        "-=0.35"
      );

      tl.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        details,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.25"
      );

      /* ========================================
         CONTACT
      ======================================== */

      tl.to(
        contact,
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.9"
      );

      /*
        Bring the entire contact block in together.
        This fixes the blank CONTACT column issue.
      */

      tl.to(
        contactContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.45"
      );

      /* ========================================
         FOOTER
      ======================================== */

      tl.to(
        footer,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.1"
      );

      /* ========================================
         BACKGROUND BIO PARALLAX
      ======================================== */

      gsap.to(backgroundWord, {
        yPercent: -10,
        rotate: 90,
        ease: "none",

        scrollTrigger: {
          trigger: page,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      /* ========================================
         REFRESH
      ======================================== */

      ScrollTrigger.refresh();
    }, page);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="about-page"
    >
      <div className="about-grid" />

      <div className="about-blue-glow about-blue-glow--top" />

      <div className="about-blue-glow about-blue-glow--bottom" />

      <div className="about-background-word">
        BIO
      </div>

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="about-header">
        <div className="about-header-left">
          <span className="about-brand">
            BIJOY.DEV
          </span>

          <span>
            SOFTWARE ENGINEER / BUILDER
          </span>
        </div>

        <div className="about-header-center">
          2026
        </div>

        <div className="about-header-right">
          <span>05 / 05</span>

          <span>
            ABOUT / CONTACT
          </span>
        </div>
      </header>

      {/* ========================================
          MAIN
      ======================================== */}

      <main className="about-main">

        {/* ======================================
            LEFT / PORTRAIT
        ====================================== */}

        <section className="about-portrait-section">

          <div className="about-section-label">
            <span>//</span>

            <span>
              ABOUT ME
            </span>
          </div>

          <div className="about-portrait-frame">

            <div className="about-portrait-glitch about-portrait-glitch--one" />

            <div className="about-portrait-glitch about-portrait-glitch--two" />

            <div className="about-portrait-glitch about-portrait-glitch--three" />

            <img
              src="/images/bijoy-about.png"
              alt="Bijoy"
              className="about-portrait"
            />

            <div className="about-portrait-overlay" />

            <div className="about-signature">
              Bijoy
            </div>

          </div>

        </section>

        {/* ======================================
            CENTER / PROFILE
        ====================================== */}

        <section className="about-profile">

          <div className="about-profile-heading">

            <span className="about-heading-line" />

            <span>
              HELLO, I'M
            </span>

          </div>

          <h1>
            BIJOY
          </h1>

          <p className="about-profile-role">
            A SOFTWARE ENGINEER
            <br />
            WHO BUILDS AND EXPLORES.
          </p>

          <p className="about-description">
            I enjoy turning ideas into real products,
            learning new things, and solving meaningful
            problems with technology.
          </p>

          <div className="about-details">

            {/* EDUCATION */}

            <div className="about-detail">

              <div className="about-detail-icon">
                <Icon type="graduation" />
              </div>

              <div>
                <strong>
                  B.Tech CSE
                </strong>

                <span>
                  Asansol Engineering College
                </span>
              </div>

            </div>

            {/* LOCATION */}

            <div className="about-detail">

              <div className="about-detail-icon">
                <Icon type="location" />
              </div>

              <div>
                <strong>
                  Asansol, West Bengal, India
                </strong>

                <span>
                  Open to opportunities
                </span>
              </div>

            </div>

            {/* HOBBIES */}

            <div className="about-detail">

              <div className="about-detail-icon">
                <Icon type="heart" />
              </div>

              <div>
                <strong>
                  Cricket, Fitness, Tech
                </strong>

                <span>
                  What keeps me going
                </span>
              </div>

            </div>

          </div>

          {/* PROFILE FOOTER */}

          <div className="about-profile-footer">

            <span className="about-footer-line" />

            <span>
              BUILDING A BETTER
              <br />
              VERSION OF MYSELF.
            </span>

          </div>

        </section>

        {/* ======================================
            RIGHT / CONTACT
        ====================================== */}

        <section className="about-contact">

          <div className="about-contact-label">

            <span>//</span>

            <span>
              CONTACT
            </span>

          </div>

          <h2>
            LET'S
            <br />
            CONNECT.
          </h2>

          <p className="about-contact-intro">
            Have a project in mind or just want
            to say hi? I'd love to hear from you.
          </p>

          {/* RESUME */}

          <div className="about-contact-cards">

            <a
              href="https://docs.google.com/document/d/1LMbFt5bHIZHSY9Irtap16id_3pZsa22L/edit?usp=drive_link&ouid=116051463258942372766&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="about-contact-card"
              aria-label="View resume"
            >

              <div className="about-contact-icon">
                <Icon type="resume" />
              </div>

              <div className="about-contact-info">

                <span>
                  RESUME
                </span>

                <strong>
                  VIEW MY RESUME
                </strong>

              </div>

              <span className="about-contact-arrow">
                <Icon type="arrow" />
              </span>

            </a>

          </div>

          {/* SOCIAL DIVIDER */}

          <div className="about-social-divider" />

          {/* SOCIALS */}

          <div className="about-socials">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="about-social"
              >
                {social.icon}
              </a>
            ))}

          </div>

          {/* FIND MORE */}

          <div className="about-find-more">

            <span>
              FIND ME ELSEWHERE
            </span>

            <span className="about-find-line" />

          </div>

        </section>

      </main>

      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="about-footer">

        <div className="about-footer-page">

          <span>
            05 / ABOUT
          </span>

          <span />

        </div>

      </footer>

    </section>
  );
}

export default About;