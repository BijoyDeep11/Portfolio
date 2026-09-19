import "./ActivityBar.css";

const pages = [
  { number: "01", label: "HOME", target: "home" },
  { number: "02", label: "DASHBOARD", target: "dashboard" },
  { number: "03", label: "PROJECTS", target: "projects" },
  { number: "04", label: "PROCESS", target: "process" },
  { number: "05", label: "ABOUT", target: "about" },
];

function ActivityBar() {
  return (
    <nav className="activity-bar" aria-label="Portfolio navigation">
      {pages.map((page) => (
        <a
          key={page.number}
          href={`#${page.target}`}
          className={`activity-bar__item ${
            page.number === "01" ? "is-active" : ""
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