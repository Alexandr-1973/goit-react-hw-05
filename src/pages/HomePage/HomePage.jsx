// import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import trendingMoviesFetch from "../../api/trending-movies";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";
import css from "./HomePage.module.css";

const HomePage = () => {
    
     const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const serverQuery = async () => {
      try {
        const data = await trendingMoviesFetch();
        console.log(data.data.results);
        setMoviesList(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    serverQuery();
  }, []);
    
    
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <h1 className={css.title}>Trending today</h1>
          <MovieList moviesList={moviesList} />
    </>
  );
};

export default HomePage;
