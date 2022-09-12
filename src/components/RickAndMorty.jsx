import React, { useState } from "react";
import { motion } from "framer-motion";
import useConexion from "../utilities/useConexion";
import useLocation from "../utilities/useLocation";
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
  console.log(data);
  return (
    <>
      <div className="w-3/5 flex flex-col items-center gap-5">
        <div>
          <img src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" />
        </div>
        <div className="w-2/3 flex gap-3 h-[50px]">
          <div className="grow relative px-2 border-2 rounded-md text-white-variant text-title-chip">
            <input
              type="text"
              className="w-full h-full bg-transparent"
              onChange={toggleFilter}
              value={getValue}
            />
            <div className="w-full h-full absolute -left-0">
              {isActive && (
                <div className="flex flex-col overflow-y-auto h-[400%]">
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
            className="w-1/5 border-2 border-secondary-color text-secondary-color rounded-md text-title-chip"
          >
            Buscar
          </motion.button>
        </div>
        <div className="text-white-variant">
            <div>{data.name}</div>
            <div>{data.dimension}</div>
            <div>{data.type}</div>
        </div>
      </div>
      <div className="flex w-2/5 items-center">
        <img src="https://mystickermania.com/cdn/stickers/rick-and-morty/sticker_2060-512x512.png" />
      </div>
    </>
  );
};

export default RickAndMorty;
