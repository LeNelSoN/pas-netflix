import NavBar from "./components/NavBar/NavBar";
import MovieCard from "./components/MovieCard/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from "./components/Movies";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState([])

  const getMovies = async (movieToSearch) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${movieToSearch}&language=fr-FR`
    const res = await fetch(url);
    console.log(res)
    const {results} = await res.json()
    setMovie(results);
  }

  useEffect(() => {
    search && getMovies(search)
  }, [search])
  
  return (
    <>
      <NavBar setSearch={setSearch}/>
      <Movies>
      {movie.map(({id,title,poster_path})=>
        <MovieCard key={id} title={title} img={poster_path === null ? 'https://picsum.photos/200/300/?blur=2' : `https://image.tmdb.org/t/p/w500/${poster_path}`}/>
      )}
      </Movies>
    </>

  );
}

export default App;
