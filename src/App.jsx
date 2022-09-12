import { useState } from "react";
import "./App.css";
import RickAndMorty from "./components/RickAndMorty";
function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-primary-color to-tertiary-color">
      <RickAndMorty/>
    </div>
  );
}

export default App;
