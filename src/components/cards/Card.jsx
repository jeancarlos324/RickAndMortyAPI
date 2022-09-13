import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChipContent from "../chip/ChipContent";
import axios from "axios";

const Card = (data) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`${data.data}`).then((res) => setCharacter(res.data));
  }, []);
  return (
    <>
      <div className=" h-full p-2 bg-gradient-to-tr from-primary-color text-white-variant border-green-gradiant-3 border-2 rounded-3xl">
        <div className="relative">
          <div className="flex top-5 -left-2 grow justify-center font-bold items-center gap-2 absolute p-1 px-2 rounded-r-2xl bg-[#11B1CFcc] backdrop-blur-sm cursor-default hover:scale-105">
            {character.status == "Dead" ? (
              <>
                <h5 className="text-primary-color uppercase">{character.status}</h5>
                <i className="fa-solid fa-skull text-primary-color"></i>
              </>
            ) : character.status == "Alive" ? (
              <>
                <h5 className="text-green-gradiant-2 uppercase">{character.status}</h5>
                <i className="fa-solid fa-heart text-green-gradiant-2"></i>
              </>
            ) : (
              <>
                <h5>{character.status}</h5>
                <i className="fa-solid fa-circle-question"></i>
              </>
            )}
          </div>
          <div className="flex items-center p-2">
            <img src={character.image} className="w-full h-full " />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 ">
          <h2 className="text-title-content text-center truncate ">
            {character.name}
          </h2>
          <ChipContent
            className="items-start "
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
