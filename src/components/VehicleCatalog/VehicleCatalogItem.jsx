import Button from "../Button/Button";
import styles from "./VehicleCatalogItem.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import Details from "../Details/Details";
import { favoritesSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/slices/favorites";

export default function VehicleCatalogItem({ advert }) {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const features = Object.entries({
    adults: advert.adults,
    children: advert.children,
    ...advert.details,
  }).filter((feature) => feature[1] !== 0 && feature[1] !== "");

  return (
    <li className={styles["list-item"]}>
      <img src={advert.gallery[0]} alt={advert.name} />
      <div className={styles["info-container"]}>
        <p className={styles["title-container"]}>
          <span>{advert.name}</span>
          <span>
            {formatPrice(advert.price)}
            <Button
              onClick={() => dispatch(favoritesActions.toggle(advert._id))}
              isFavorite={favorites.includes(advert._id)}
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
        <Details features={features} />
        <Button btnStyle="show">Show more</Button>
      </div>
    </li>
  );
}

function formatPrice(price) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "narrowSymbol",
  }).format(price);
}
