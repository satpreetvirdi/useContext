import React, { useState } from "react";
import Movie from "./Movie";
import Nav from "./Nav";



const MovieList = () => {
  const listofmovie = [
    {
      name: "Game of Thrones",
      price: "$10",
      id: 38353,
    },
    {
        name: "Harry Potter",
        price: "$64",
        id: 357453,
      },
      {
        name: "Inception",
        price: "$60",
        id: 3957445,
      },
  ];
  
  const [movies, setMovies] = useState(listofmovie);
  return <>
    {
        movies.map(movie => (
        <Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id}/>
       
        ))
    }


    </>
  ;
};

export default MovieList;
