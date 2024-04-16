import Aside from "../components/Aside/Aside";
import VehicleCatalog from "../components/VehicleCatalog/VehicleCatalog";
import styles from "./Catalog.module.css";

export default function Catalog() {
  return (
    <main className={`main-container ${styles["content-container"]} `}>
      <Aside />
      <VehicleCatalog content="catalog" />
    </main>
  );
}
