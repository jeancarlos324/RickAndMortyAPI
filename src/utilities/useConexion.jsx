import axios from "axios";
import { useState, useEffect } from "react";
import useLocation from "../utilities/useLocation";
const useConexion = (randomNumber, URL, value) => {
  const [data, setData] = useState({});
  const { location } = useLocation(URL);
  useEffect(() => {
    const getNumberRandom = (value) => Math.floor(Math.random() * value) + 1;
    axios
      .get(`${URL}${getNumberRandom(randomNumber)}`)
      .then((res) => setData(res.data));
  }, []);

  const changeValues = () => {
    console.log(location.results);
    const changeValues = location.results?.map((item) => {
      if (value == item.name) {
        return item.id;
      } else if (value == item.id) {
        return item.id;
      }
    })
    .filter((item) => item !== undefined)
    .toString();
    axios.get(`${URL}${changeValues}`).then((res) => setData(res.data));
  };

  return { data, changeValues };
};

export default useConexion;
