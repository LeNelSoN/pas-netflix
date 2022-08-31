import NavBar from "./components/NavBar/NavBar";
import MovieCard from "./components/MovieCard/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
import { useEffect, useState } from "react";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [fav, setFav] = useState([]);

  const getMovies = async (movieToSearch) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${movieToSearch}&language=fr-FR`;
    const res = await fetch(url);
    console.log(res);
    const { results } = await res.json();
    setMovie(results);
  };

  useEffect(() => {
    search && getMovies(search);
  }, [search]);

 console.log(fav)
  const MovieView = movie.map(({ id, title, poster_path, vote_average}) => (
    <MovieCard
      id={id}
      key={id}
      fav={fav}
      setFav={setFav}
      title={title}
      withTitle={true}
      withButtonFav={true}
      vote={vote_average}
      img={
        poster_path === null
          ? "https://picsum.photos/200/300/?blur=2"
          : `https://image.tmdb.org/t/p/w500/${poster_path}`
      }
    />
  ))

  const favView = fav.map(({ id, img, title}) => (
    <MovieCard
      key={id}
      img={img}
      colNumber={5}
      marge={1}
      title={title}
    />
  ))

  return (
    <>
      <FavoriteContainer>
        {favView}
      </FavoriteContainer>
      <NavBar setSearch={setSearch} />
      <Movies>
        {MovieView}
      </Movies>
    </>
  );
}

export default App;
