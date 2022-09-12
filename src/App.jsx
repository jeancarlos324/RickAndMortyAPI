import { useState } from "react";
import "./App.css";
import CardCarrousel from "./components/cards/CardCarrousel";
import RickAndMorty from "./components/RickAndMorty";
function App() {
  return (
    <div className=" relative flex items-center justify-center w-screen h-screen bg-gradient-to-r from-primary-color to-tertiary-color">
      <img  className="top-0 animation-frame w-[200px] " src="https://assets.stickpng.com/images/58f37709a4fa116215a9240d.png" alt="" />
      <RickAndMorty/>
      
      <CardCarrousel />
    </div>
  );
}

export default App;
