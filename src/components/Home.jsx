import React, { useEffect, useState, useRef } from "react";
import Cards from "./Cards";
import Navigation from "./Navigation";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInrow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInrow);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const[group, setGroup] = useState('Popular');
  const [mousePos, setMousePos] = useState({ 
    left : 0,
     right : 0,
      top : 0,
       bottom : 0
      
    
    });


const cardsRef = useRef(null); 

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;



  useEffect(() => {
    const getMovies = async () => {
      const url = `${baseUrl}/${group}?page=${page}&language=en-US`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
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
  }, [page, group]);

  return (
    <>
    
    <Navigation page={page} setPage={setPage} setGroup={setGroup}/>
    <div
      className=" flex justify-center items-center" 
      style={{ width: wrapperWidth }}
      ref={cardsRef}
      onMouseMove={(e) => {
        setMousePos({
          left: e.clientX - cardsRef.current.offsetLeft,
          right: e.clientX - cardsRef.current.offsetLeft + wrapperWidth,
          top: e.clientY - cardsRef.current.offsetTop,
          bottom: e.clientY - cardsRef.current.offsetTop + 200,
        });
      }}
      >
      <div className="flex flex-wrap">
        {movies.map((movie, i) => (
          <div key={i}>
            <Cards movie={movie} cardWidth={cardWidth}  />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
