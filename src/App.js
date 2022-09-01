// Liste des imports 
import NavBar from "./components/NavBar/NavBar";
import MovieCard from "./components/MovieCard/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
import { useEffect, useState } from "react";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";

function App() {
  // useState
  const [search, setSearch] = useState(""); // Permet de récupérer et modifier la valeur de l'input 'Recherche'
  const [movies, setMovies] = useState([]); // Contient les films récupéré de l'API
  const [fav, setFav] = useState([]); // Permet de récupérer et modifier la liste des films mis en favoris

  const getMovies = async (movieToSearch) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${movieToSearch}&language=fr-FR`;
    const res = await fetch(url); // Requete auprés de l'API qui renvoi une promesse
    console.log(res);
    const { results } = await res.json(); // Conversion de la reponse en JS
    setMovies(results); // Utilisation de la methode set de useState pour stocker les données récupéré dans la constante movies
  };

  useEffect(() => { // Mode asynchrone de React
    search && getMovies(search); // Si search contient une valeur, la fonction getMovies est appelé. empéche les erreurs de réquete 
  }, [search]);

  const MovieView = movies.map(( // Crée autant de composant que d'objet dans le tableau movies
    { id, title, poster_path, vote_average} // Déconstruction de chaque objet de la liste
    ) => ( 
    <MovieCard
      id={id} // Passe l'id de l'objet en props
      key={id} // key obligatoire quand on fait une boucle
      fav={fav} // Passe la constante fav en props
      setFav={setFav} // Passe le seter en props
      title={title} // Passe l'title de l'objet en props
      withTitle={true} // option d'affichage du titre 
      withButtonFav={true} // option d'affichage du bouton favoris
      vote={vote_average} // Passe la note du film de l'objet en props
      img={ // Ternaire qui affiche l'affiche du film ou une image noir si l'affiche n'est pas dispo
        poster_path === null
          ? "https://www.cineanimation.fr/sites/default/files/styles/400xauto/public/2021-01/Not%20found%201.JPG?itok=A3LDiEoS"
          : `https://image.tmdb.org/t/p/w500/${poster_path}`
      }
    />
  ))

  const favView = fav.map(({ id, img, title}) => (
    <MovieCard
      key={id}
      img={img}
      colNumber={10}
      marge={3}
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
