import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const setActiveLink = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={setActiveLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActiveLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}