import axios from "axios";
import { useState, useEffect } from "react";

const useLocation = (URL) => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => setLocation(res.data))
  }, []);
  return {location};
};

export default useLocation;
