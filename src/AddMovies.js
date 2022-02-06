import React ,{useState,useContext}from 'react';
import { MovieContext } from './MovieContext';



const AddMovies = () => {
    const [name, setName] = useState('');
    const [price , setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);
    const updateName = (e) =>{
        setName(e.target.value);
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value);
    }

    const AddMovie = (e)=>{
        e.preventDefault();
        setMovies(prevMovies =>[...prevMovies, {name: name, price:price}]);
    }
  

  return (
      <form onSubmit={AddMovie}>
          <input type='text' name ='name of movie' value={name} onChange={updateName} />
          <input type='text' name='Price' value={price} onChange={updatePrice}/>
          <button >Submit</button>
          </form>
  );
};

export default AddMovies;
