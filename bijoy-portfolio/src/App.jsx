import { Routes, Route } from "react-router-dom";

import PageShell from "./components/Layout/PageShell";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Process from "./pages/Process/Process";
import Lab from "./pages/Lab/Lab";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <PageShell
            pageNumber="01"
            pageName="PORTFOLIO"
          >
            <Landing />
          </PageShell>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PageShell
            pageNumber="02"
            pageName="DASHBOARD"
          >
            <Dashboard />
          </PageShell>
        }
      />

      <Route
        path="/projects"
        element={
          <PageShell
            pageNumber="03"
            pageName="PROJECTS"
          >
            <Projects />
          </PageShell>
        }
      />

      <Route
        path="/process"
        element={
          <PageShell
            pageNumber="04"
            pageName="PROCESS"
          >
            <Process />
          </PageShell>
        }
      />

      <Route
        path="/lab"
        element={
          <PageShell
            pageNumber="05"
            pageName="LAB"
          >
            <Lab />
          </PageShell>
        }
      />

      <Route
        path="/about"
        element={
          <PageShell
            pageNumber="06"
            pageName="ABOUT / CONTACT"
          >
            <About />
          </PageShell>
        }
      />

    </Routes>
  );
}

export default App;