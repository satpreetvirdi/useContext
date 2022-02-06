import React, { useState , createContext} from 'react';

export const MovieContext = createContext();

export const MovieContext = () => {
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


  return <div></div>;
};

