import axios from "../api/axios";
import { useEffect } from "react";
import requests from "../api/requests";

const Banner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);
  };

  return <div>banner</div>;
};
export default Banner;
