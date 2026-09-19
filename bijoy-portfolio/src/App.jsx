import ActivityBar from "./components/ActivityBar/ActivityBar";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Process from "./pages/Process/Process";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <ActivityBar />

      <main>
        <Landing />
        <Dashboard />
        <Projects />
        <Process />
        <About />
      </main>
    </>
  );
}

export default App;