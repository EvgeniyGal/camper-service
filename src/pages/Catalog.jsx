import AsideFilter from "../components/AsideFilter/AsideFilter";
import VehicleCatalog from "../components/VehicleCatalog/VehicleCatalog";
import styles from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={`main-container ${styles["content-container"]} `}>
      <AsideFilter />
      <VehicleCatalog />
    </div>
  );
}
