import Aside from "../components/Aside/Aside";
import VehicleCatalog from "../components/VehicleCatalog/VehicleCatalog";
import styles from "./Favorites.module.css";

export default function Favorites() {
  return (
    <main className={`main-container ${styles["content-container"]} `}>
      <Aside />
      <VehicleCatalog content="favorites" />
    </main>
  );
}
