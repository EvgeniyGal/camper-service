import styles from "./DetailsItem.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import { featureMapper } from "../../helpers/feature-mapper";

export default function DetailsItem({ title, value }) {
  const feature = featureMapper[title];
  const text = `${feature.isNumber ? value : ""} ${
    feature.isText ? title : ""
  }${feature.text}`;

  return (
    <li className={styles.item}>
      <svg>
        <use href={`${svgSprite}#${title}`}></use>
      </svg>{" "}
      {text}
    </li>
  );
}
