import React ,{useContext}from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies,setMovies] = useContext((MovieContext));

  return <>
      <h3>Satpreet </h3>
      <p>List of Movies : {movies.length}</p>
  </>;
};

export default Nav;
