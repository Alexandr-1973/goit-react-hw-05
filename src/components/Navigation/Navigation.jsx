import { Routes, Route, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navagation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={({ isActive}) =>isActive ? css.active : css["nav-link"]
  }>
        Home
      </NavLink>
      <NavLink to="/movies" className={({ isActive}) =>isActive ? css.active : css["nav-link"]
  }>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navagation;
