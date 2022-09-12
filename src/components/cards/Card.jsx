import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChipContent from "../chip/ChipContent";
import axios from "axios";

const Card = (data) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`${data.data}`).then((res) => setCharacter(res.data));
  }, []);
  console.log(character);
  return (
    <>
      <div className=" p-2 bg-primary-color text-white-variant border-green-gradiant-3 border-2">
        <div className="relative">
          <div className="absolute bg-black left-0 top-4 p-1">
            <h5>{character.status}</h5>
          </div>
          <div className="w-[200px] flex items-center h-[200px]">
            <img src={character.image} className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 ">
          <h2 className="text-title-content text-center ">{character.name}</h2>
          <ChipContent
            className="items-start"
            title={"raza: "}
            content={character.species}
          />
          <ChipContent
            className="items-start"
            title={"origin: "}
            content={character.origin?.name}
          />
          <ChipContent
            className="items-start"
            title={"genero: "}
            content={character.gender}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
