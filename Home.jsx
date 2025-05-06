import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInrow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInrow);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const url = 'https://tvshow.p.rapidapi.com/Person/Popular?page=1&language=en-US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7d053995bfmshc22d580fdd0fa8fp150f53jsn1fd9a291d55e',
		'x-rapidapi-host': 'tvshow.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setMovies(result);
  console.log(result)
  
} catch (error) {
	console.error(error);
}
};
      getMovies();
  }, []);

  return (
    <div
      className=" flex justify-center items-center" style={{ width: wrapperWidth }}>
      <div className="flex flex-wrap">
        {movies.map((movie, i) => (
          <div key={i}>
            <Cards movie={movie} cardWidth={cardWidth}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
