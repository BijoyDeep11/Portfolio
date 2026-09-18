import { NavLink } from "react-router-dom";

import "./ActivityBar.css";

const pages = [
  {
    number: "01",
    label: "HOME",
    path: "/",
  },
  {
    number: "02",
    label: "DASHBOARD",
    path: "/dashboard",
  },
  {
    number: "03",
    label: "PROJECTS",
    path: "/projects",
  },
  {
    number: "04",
    label: "PROCESS",
    path: "/process",
  },
  {
    number: "05",
    label: "LAB",
    path: "/lab",
  },
  {
    number: "06",
    label: "ABOUT",
    path: "/about",
  },
];

function ActivityBar() {
  return (
    <nav className="activity-bar">
      {pages.map((page) => (
        <NavLink
          key={page.number}
          to={page.path}
          className={({ isActive }) =>
            `activity-bar__item ${
              isActive ? "is-active" : ""
            }`
          }
        >
          <span className="activity-bar__number">
            {page.number}
          </span>

          <span className="activity-bar__label">
            {page.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

export default ActivityBar;