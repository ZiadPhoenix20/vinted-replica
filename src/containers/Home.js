import React, { useState, useEffect } from "react";
import axios from "axios";

import FirstSection from "../components/FirstSection";
import Offers from "../components/Offers";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      //   console.log(response.data);
      setData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <>
      <FirstSection />
      <Offers data={data} />
    </>
  );
};

export default Home;
