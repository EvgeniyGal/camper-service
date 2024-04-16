import Button from "../Button/Button";
import styles from "./VehicleCatalog.module.css";
import VehicleCatalogItem from "./VehicleCatalogItem";
import {
  favoritesAdvertsSelector,
  filteredAdvertsSelector,
} from "../../store/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function VehicleCatalog({ content }) {
  const [maxAdverts, setMaxAdverts] = useState(4);
  const adverts = useSelector(
    content === "catalog" ? filteredAdvertsSelector : favoritesAdvertsSelector
  );

  useEffect(() => {
    setMaxAdverts(4);
  }, [adverts]);

  function handleLoadMore() {
    setMaxAdverts(
      maxAdverts + 4 < adverts.length ? maxAdverts + 4 : adverts.length
    );
  }

  return (
    <div className={styles["catalog-container"]}>
      <ul className={styles["list-container"]}>
        {adverts.slice(0, maxAdverts).map((advert) => (
          <VehicleCatalogItem key={advert._id} advert={advert} />
        ))}
      </ul>
      {maxAdverts < adverts.length && (
        <Button onClick={handleLoadMore} btnStyle="transparent">
          Load more
        </Button>
      )}
    </div>
  );
}
