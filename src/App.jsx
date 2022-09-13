import { useState } from "react";
import "./App.css";
import CardCarrousel from "./components/cards/CardCarrousel";
import RickAndMorty from "./components/RickAndMorty";
function App() {
  return (
    <div className=" relative md:flex items-center justify-center w-screen md:h-screen bg-gradient-to-r from-primary-color to-tertiary-color">
      <RickAndMorty />
    </div>
  );
}

export default App;
