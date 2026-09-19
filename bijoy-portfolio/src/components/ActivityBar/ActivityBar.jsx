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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActivePage(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="activity-bar" aria-label="Portfolio navigation">
      {pages.map((page) => (
        <a
          key={page.number}
          href={`#${page.target}`}
          className={`activity-bar__item ${
            activePage === page.target ? "is-active" : ""
          }`}
        >
          <span className="activity-bar__number">
            {page.number}
          </span>

          <span className="activity-bar__label">
            {page.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

export default ActivityBar;