import { useEffect, useRef, useState } from "react";
// import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import searchMoviesFetch from "../../api/search-movie";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
  const formRef = useRef("");
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [queryText, setQueryText] = useState(() => {
    if (location.state) {
      return location.state;
    } else {
      return "";
    }
   });
  
  

  useEffect(() => {
    async function searchFetch (query) {
      
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
    // console.log(event.target.elements.search.value.trim());
    setQueryText(event.target.elements.search.value.trim());
    formRef.current = queryText;
    // console.log(queryText);
    //  event.target.reset();
    
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const data = await searchMoviesFetch(event.target.elements.search.value);
  //     setMoviesList(data.data.results);
  //     event.target.reset();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  console.log(queryText);

  return (
    <>
      {/* <nav>
        <Navigation />
      </nav> */}
      <form className={css.form} onSubmit={(event)=>handleSubmit(event)} ref={formRef}>
        <input type="text" name="search" />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <MovieList moviesList={moviesList} queryText={queryText} backPath="/movies"/>
    </>
  );
};

export default MoviesPage;
