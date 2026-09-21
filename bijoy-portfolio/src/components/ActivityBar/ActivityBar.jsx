import { useEffect, useState } from "react";

import "./ActivityBar.css";

const pages = [
  { number: "01", label: "HOME", target: "home" },
  { number: "02", label: "DASHBOARD", target: "dashboard" },
  { number: "03", label: "PROJECTS", target: "projects" },
  { number: "04", label: "PROCESS", target: "process" },
  { number: "05", label: "ABOUT", target: "about" },
];

function ActivityBar() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const sections = pages
      .map((page) => document.getElementById(page.target))
      .filter(Boolean);

    const visibilityMap = new Map();

    sections.forEach((section) => {
      visibilityMap.set(section.id, {
        isIntersecting: false,
        ratio: 0,
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
          });
        });

        const visibleSections = sections
          .filter((section) => {
            const state = visibilityMap.get(section.id);
            return state?.isIntersecting;
          })
          .sort((a, b) => {
            const ratioA = visibilityMap.get(a.id)?.ratio || 0;
            const ratioB = visibilityMap.get(b.id)?.ratio || 0;

            return ratioB - ratioA;
          });

        if (visibleSections.length > 0) {
          setActivePage(visibleSections[0].id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="activity-bar"
      aria-label="Portfolio navigation"
    >
      <a
        href="#home"
        className="activity-bar__brand"
        data-magnetic
        aria-label="Bijoy home"
      >
        <img
          src="/bijoy-logo.png"
          alt=""
          className="activity-bar__logo"
        />

        <span className="activity-bar__wordmark">
          BIJOY<span>.DEV</span>
        </span>
      </a>

      <div className="activity-bar__nav">
        {pages.map((page) => (
          <a
            key={page.number}
            href={`#${page.target}`}
            data-magnetic
            className={`activity-bar__item ${
              activePage === page.target ? "is-active" : ""
            }`}
          >
            {/* <span className="activity-bar__number">
              {page.number}
            </span> */}

            <span className="activity-bar__label">
              {page.label}
            </span>
          </a>
        ))}
      </div>

      {/* <a
        href="#about"
        className="activity-bar__contact"
        data-magnetic="primary"
      >
        CONTACT
        <span>↗</span>
      </a> */}
    </nav>
  );
}

export default ActivityBar;
