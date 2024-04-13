import Button from "../Button/Button";
import styles from "./VehicleCatalogItem.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import Details from "../Details/Details";

export default function VehicleCatalogItem({ adverts }) {
  const features = Object.entries({
    adults: adverts.adults,
    children: adverts.children,
    ...adverts.details,
  }).filter((feature) => feature[1] !== 0 && feature[1] !== "");
  return (
    <li className={styles["list-item"]}>
      <img src={adverts.gallery[0]} alt={adverts.name} />
      <div className={styles["info-container"]}>
        <p className={styles["title-container"]}>
          <span>{adverts.name}</span>
          <span>
            {formatPrice(adverts.price)}
            <Button isFavorite={false} btnStyle="icon">
              heart
            </Button>
          </span>
        </p>
        <p className={styles["rating-container"]}>
          <span className={styles["rate"]}>
            <svg>
              <use href={`${svgSprite}#star`}></use>
            </svg>
            {adverts.rating} ({adverts.reviews.length} reviews)
          </span>
          <span>
            <svg className={styles["location-icon"]}>
              <use href={`${svgSprite}#location`}></use>
            </svg>
            {adverts.location}
          </span>
        </p>
        <p className={styles["description"]}>{adverts.description}</p>
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
