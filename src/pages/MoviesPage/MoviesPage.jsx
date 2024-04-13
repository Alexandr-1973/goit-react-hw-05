import { useRef, useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css"
import searchMoviesFetch from "../../api/search-movie";

const MoviesPage = () => {


    const [moviesList, setMoviesList] = useState([]);
 

    async function handleSubmit(event) {
      
        event.preventDefault();
        console.log(event.target.elements.search.value);
        try {
        const data = await searchMoviesFetch(event.target.elements.search.value);
        console.log(data.data.results);
            setMoviesList(data.data.results);
            event.target.reset();
      } catch (error) {
        console.log(error);
      }
     
}

  return (
    <>
      <nav>
        <Navigation />
          </nav>
          <form className={css.form} onSubmit={handleSubmit}>
              <input type="text" name="search"/>
              <button type="submit" className={css.btn} >Search</button>
          </form>
          <MovieList moviesList={moviesList}/>
    </>
  );
};

export default MoviesPage;
