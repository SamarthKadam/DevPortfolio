import React from "react";
import { fairyDustCursor } from "cursor-effects";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Modal from './components/Modal'
import { useState } from "react";
function App() {

  const [isModalOpen,setIsModalOpen]=useState(false);
  const [projectNo,setProjectNo]=useState(0);
  useEffect(() => {
    fairyDustCursor();
    return () => {};
  }, []);
  return (
    <div className="h-[100vh] overflow-y-auto select-none hide-scrollbar">
      {isModalOpen&&<Modal projectNo={projectNo} setModal={setIsModalOpen} ></Modal>}
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <div id="projects">
      <Projects setProjectNo={setProjectNo} setModal={setIsModalOpen}></Projects>
      </div>
      <Contact></Contact>
    </div>
  );
}
export default App;
