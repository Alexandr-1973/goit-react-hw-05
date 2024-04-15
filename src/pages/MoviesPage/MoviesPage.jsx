import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import searchMoviesFetch from "../../api/search-movie";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [queryText, setQueryText] = useState(searchParams.get("query"));

  useEffect(() => {
    if (!queryText) return;
    async function searchFetch(query) {
      try {
        const data = await searchMoviesFetch(query);
        setMoviesList(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    searchFetch(queryText);
  }, [queryText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.search.value.trim() });
    setQueryText(event.target.elements.search.value.trim());
  };

  return (
    <>
      <form className={css.form} onSubmit={(event) => handleSubmit(event)}>
        <input type="text" name="search" />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>

      <MovieList
        moviesList={moviesList}
        backPath={`/movies?query=${searchParams.get("query")}`}
      />
    </>
  );
};

export default MoviesPage;
