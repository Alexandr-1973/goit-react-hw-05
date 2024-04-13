import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import trendingMoviesFetch from "./api/trending-movies";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  // const [moviesList, setMoviesList] = useState([]);

  // useEffect(() => {
  //   const serverQuery = async () => {
  //     try {
  //       const data = await trendingMoviesFetch();
  //       console.log(data.data.results);
  //       setMoviesList(data.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   serverQuery();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
