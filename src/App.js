import React from "react";
import { followingDotCursor } from "cursor-effects";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
function App() {
  useEffect(() => {
    followingDotCursor();
    return () => {};
  }, []);

  return (
    <div className="h-[100vh] overflow-y-auto select-none hide-scrollbar">
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </div>
  );
}
export default App;
