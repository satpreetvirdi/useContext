import React from 'react';

const Movie = (props) => {
  return <div>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
  </div>;
};

export default Movie;
