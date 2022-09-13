import React, { useState } from "react";
import { motion } from "framer-motion";
import useConexion from "../utilities/useConexion";
import useLocation from "../utilities/useLocation";

import Chip from "./chip/Chip";
import Card from "./cards/Card";
const RickAndMorty = () => {
  let URL = "https://rickandmortyapi.com/api/location/";

  const [getValue, setGetValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [filterData, setfilterData] = useState([]);
  const { data, changeValues } = useConexion(19, URL, getValue);
  const { location } = useLocation(URL);

  const toggleFilter = (e) => {
    const searchLocation = e.target.value;
    setGetValue(searchLocation);
    const filterLocation = location.results?.filter((item) =>
      item.name.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setfilterData(filterLocation);
    searchLocation == "" ? setIsActive(false) : setIsActive(true);
  };
  return (
    <>
      <div className=" relative flex md:w-[55%]  flex-col items-center gap-5 ">
        <div>
          <img className="animation-frame" src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" />
        </div>
        <div className="md:w-2/3  flex gap-3 h-[50px]">
          <div className="grow relative px-2 border-2 rounded-md text-white-variant text-title-chip">
            <input
              type="text"
              className="w-full h-full bg-transparent"
              onChange={toggleFilter}
              value={getValue}
            />
            <div className="w-full h-full absolute -left-0 z-10">
              {isActive && (
                <div className="flex flex-col overflow-y-auto h-[400%] bg-primary-color">
                  {filterData.map((item) => (
                    <div
                      onClick={() => {
                        setGetValue(item.name);
                        setIsActive(false);
                      }}
                      className="p-2 text-white rounded-sm border border-white-variant cursor-pointer hover:bg-green-gradiant-4 delay-100"
                      key={item.id}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <motion.button
            whileHover={{
              transition: { duration: 0.2, delay: 0.1 },
              backgroundColor: "#11b1cf",
              color: "#ffffff",
            }}
            whileTap={{ scale: 1.1 }}
            type={"submit"}
            onClick={changeValues}
            className="grow px-3 border-2 border-secondary-color text-secondary-color rounded-md text-title-chip"
          >
            Buscar
          </motion.button>
        </div>
        <div className=" w-[90%] md:w-2/3 p-1 grid md:grid-cols-2 gap-3 text-white-variant">
          <Chip
            title="name: "
            content={data.name}
            iconName="fa-solid fa-earth-americas"
            className="border-2 border-secondary-color rounded-lg"
          />
          <Chip
            title="dimension: "
            content={data.dimension}
            iconName="fa-brands fa-nfc-directional"
            className="border-2 border-secondary-color rounded-lg"
          />
          <Chip
            title="residents: "
            content={data.residents?.length}
            iconName="fa-solid fa-user-group"
            className="border-2 border-secondary-color rounded-lg"
          />
          <Chip
            title="type:"
            content={data.type}
            iconName="fa-solid fa-seedling"
            className="border-2 border-secondary-color rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col h-full md:w-[45%] items-center justify-center">
        <h3 className="text-white-variant text-title-content uppercase">Residents</h3>
        <div className="flex h-4/5 w-4/5 p-3 justify-center rounded-3xl bg-[#00000052] backdrop-blur-lg">
          {data.residents?.length !== 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center overflow-y-auto overflow-x-clip"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
            >
              {data.residents?.map((item) => (
                <div key={item}>
                  <Card data={item} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="portal flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
            >
              <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png" />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default RickAndMorty;
