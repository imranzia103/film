import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInrow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInrow);

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const setMovies = async () => {

    const url = 'https://tvshow.p.rapidapi.com/Person/Popular?page=1&language=en-US';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '7d053995bfmshc22d580fdd0fa8fp150f53jsn1fd9a291d55e',
        'x-rapidapi-host': 'tvshow.p.rapidapi.com'
      }
    };

    try {
      // const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error(error);
    }

  }

      setMovies()
  },[])

  return (
    <div
      className=" flex flex-center items-center"
      style={{ width: wrapperWidth }}>
      <div className="flex flex-wrap"></div>
    </div>
  );
};

export default Home;
