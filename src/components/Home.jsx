import React, { useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInrow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInrow);

  return (
    <div className=" flex flex-center items-center" style={{ width: wrapperWidth }}>
      <div className="flex flex-wrap">
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
