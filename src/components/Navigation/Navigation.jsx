import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navigation.module.css";
import svgSprite from "../../assets/images/sprite.svg";

export default function Navigation() {
  return (
    <>
      <header className={`main-container ${styles["header"]}`}>
        <svg className={styles["logo"]}>
          <use href={`${svgSprite}#van`}></use>
        </svg>
        <nav>
          <ul className={styles["nav-container"]}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
