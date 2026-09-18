import { Routes, Route } from "react-router-dom";

import PageShell from "./components/Layout/PageShell";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Process from "./pages/Process/Process";
import Lab from "./pages/Lab/Lab";
import About from "./pages/About/About";

function Portfolio() {
  return (
    <PageShell>
      <Landing />
      <Dashboard />
      <Projects />
      <Process />
      <Lab />
      <About />
    </PageShell>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;