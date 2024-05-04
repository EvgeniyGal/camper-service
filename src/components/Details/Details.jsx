import svgSprite from "../../assets/images/sprite.svg";
import styles from "./Details.module.css";
import { featureMapper } from "../../helpers/feature-mapper";

export default function Details({ features }) {
  const featuresArr = Object.entries(features).filter(
    (feature) => feature[1] !== 0 && feature[1] !== ""
  );

  const getText = (title, value) => {
    const feature = featureMapper[title];
    return `${feature.isNumber ? value : ""} ${feature.isText ? title : ""}${
      feature.text
    }`;
  };

  return (
    <ul className={styles.list}>
      {featuresArr.map(([title, value]) => (
        <li key={title} className={styles.item}>
          <svg>
            <use href={`${svgSprite}#${title}`}></use>
          </svg>{" "}
          {getText(title, value)}
        </li>
      ))}
    </ul>
  );
}
