import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";

  

const Cards = ({cardWidth, movie}) => {
  const { title, image, genres, originalLanguage, releaseDate, overview } = movie;
  const[showDescription, setShowDescription] = useState(false);
 
  
  return (
    <div
    style={{ width: cardWidth }}
      className="h-[650px] relative flex justify-center items-center shrink-0 p-2 bg-gray-600 group">
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showDescription ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setShowDescription(!showDescription)} 
      className=" w-[97%] h-[97%] m-auto text-white absolute rounded-lg
       bg-black/50 flex flex-col justify-center gap-y-2  p-10 cursor-pointer backdrop-blur-2xl">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <span className="text-lg"> Geners: </span>
         {genres ?.map((genre, i ) => (
            <span key={i} className=" font semi-bold text-red-500">
              {genre} 
              
            </span>
          ))}
          </div>
          
                 
        <span className="flex gap-x-2">
          original Language :<span className=" mr-2 uppercase">{originalLanguage}</span>
        </span>
        <span className="flex gap-x-2">
          Realease Date :
          <span className="mr-2 text-yellow-400">{releaseDate}</span>
        </span>
        <p className="flex flex-col gap-y-1">
          <span className="text-red-500"> Summary</span>
          <span className="first-letter:pl-2"> {overview}</span>
        </p>
      </motion.div>
      <img
        src={image}
        alt="movie image"
        className="object-cover rounded-xl opacity-50 group-hover:opacity-100
                     transition-opacity duration-500"/>
    </div>
  );
};

export default Cards;
