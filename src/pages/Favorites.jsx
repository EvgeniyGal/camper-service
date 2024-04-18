import { useDispatch } from "react-redux";
import Aside from "../components/Aside/Aside";
import VehicleCatalog from "../components/VehicleCatalog/VehicleCatalog";
import styles from "./Favorites.module.css";
import { useEffect } from "react";
import { filtersActions } from "../store/slices/filters";

export default function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersActions.setDefault());
  }, [dispatch]);
  return (
    <main className={`main-container ${styles["content-container"]} `}>
      <Aside />
      <VehicleCatalog content="favorites" />
    </main>
  );
}
