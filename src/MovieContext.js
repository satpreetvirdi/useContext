import React, { useState , createContext} from 'react';


export const MovieContext = createContext();

export const MovieProviderContext = (props) => {
    
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
       return (
           <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
           </MovieContext.Provider>
       );
};

