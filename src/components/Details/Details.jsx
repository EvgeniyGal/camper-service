import svgSprite from "../../assets/images/sprite.svg";
import styles from "./Details.module.css";

export default function Details({ features }) {
  const featuresArr = Object.entries(features).filter(
    (feature) => feature[1] !== 0 && feature[1] !== ""
  );

  return (
    <ul className={styles.list}>
      {featuresArr.map(([title, value]) => (
        <li key={title} className={styles.item}>
          <svg>
            <use href={`${svgSprite}#${title}`}></use>
          </svg>{" "}
          {value}
        </li>
      ))}
    </ul>
  );
}
