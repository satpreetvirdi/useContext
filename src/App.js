import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovies from "./AddMovies";
import { MovieProviderContext } from "./MovieContext";

function App() {
  return (
    <MovieProviderContext>
    <div className="App">
      <Nav />
      <AddMovies/>
      <MovieList />
    </div>
    </MovieProviderContext>
  );
}

export default App;
