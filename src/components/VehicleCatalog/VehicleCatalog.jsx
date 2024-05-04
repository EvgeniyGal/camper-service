import Button from "../Button/Button";
import styles from "./VehicleCatalog.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import { appActionsActions } from "../../store/slices/app-actions";
import Details from "../Details/Details";
import {
  favoritesSelector,
  filteredAdvertsSelector,
} from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatPrice } from "../../helpers/formatters";
import { favoritesActions } from "../../store/slices/favorites";

export default function VehicleCatalog({ content }) {
  const [maxAdverts, setMaxAdverts] = useState(4);
  const adverts = useSelector(
    content === "catalog" ? filteredAdvertsSelector : favoritesSelector
  );
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  function handleOpenModal(_id) {
    dispatch(appActionsActions.toggleModalDetails());
    console.log("object");
    dispatch(appActionsActions.setCurrentAdvert(_id));
  }

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
          <li key={advert._id} className={styles["list-item"]}>
            <img src={advert.gallery[0]} alt={advert.name} />
            <div className={styles["info-container"]}>
              <p className={styles["title-container"]}>
                <span>{advert.name}</span>
                <span>
                  {formatPrice(advert.price)}
                  <Button
                    onClick={() => dispatch(favoritesActions.toggle(advert))}
                    isActive={favorites.find((fav) => fav._id === advert._id)}
                    btnStyle="icon"
                  >
                    heart
                  </Button>
                </span>
              </p>
              <p className={styles["rating-container"]}>
                <span className={styles["rate"]}>
                  <svg>
                    <use href={`${svgSprite}#star`}></use>
                  </svg>
                  {advert.rating} ({advert.reviews.length} reviews)
                </span>
                <span>
                  <svg className={styles["location-icon"]}>
                    <use href={`${svgSprite}#location`}></use>
                  </svg>
                  {advert.location}
                </span>
              </p>
              <p className={styles["description"]}>{advert.description}</p>
              <Details
                features={{
                  adults: advert.adults,
                  children: advert.children,
                  ...advert.details,
                }}
              />
              <Button
                onClick={() => handleOpenModal(advert._id)}
                btnStyle="show"
              >
                Show more
              </Button>
            </div>
          </li>
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
