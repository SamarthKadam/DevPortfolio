import React from "react";
import { fairyDustCursor } from "cursor-effects";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    fairyDustCursor();
    return () => {};
  }, []);

  return (
    <div className="h-[100vh] overflow-y-auto select-none hide-scrollbar">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <div id="projects">
      <Projects></Projects>
      </div>
      <Contact></Contact>
    </div>
  );
}
export default App;
