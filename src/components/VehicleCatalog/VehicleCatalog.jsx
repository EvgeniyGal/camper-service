import { useEffect } from "react";
import { getAdverts } from "../../utils/camper-service-api";
import Button from "../Button/Button";
import styles from "./VehicleCatalog.module.css";
import VehicleCatalogItem from "./VehicleCatalogItem";
import { useState } from "react";

export default function VehicleCatalog() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then((data) => {
      setAdverts(data);
    });
  }, []);

  return (
    <div className={styles["catalog-container"]}>
      <ul className={styles["list-container"]}>
        {adverts.map((advert) => (
          <VehicleCatalogItem key={advert._id} adverts={advert} />
        ))}
      </ul>
      <Button btnStyle="transparent">Load more</Button>
    </div>
  );
}
