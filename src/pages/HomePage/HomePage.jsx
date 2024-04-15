import { useState, useEffect } from "react";
import trendingMoviesFetch from "../../api/trending-movies";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const serverQuery = async () => {
      try {
        const data = await trendingMoviesFetch();
        setMoviesList(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    serverQuery();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MovieList moviesList={moviesList} backPath="/" />
    </>
  );
};

export default HomePage;
