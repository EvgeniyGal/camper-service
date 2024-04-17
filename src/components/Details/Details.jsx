import DetailsItem from "./DetailsItem";
import styles from "./Details.module.css";

export default function Details({ features }) {
  const featuresArr = Object.entries(features).filter(
    (feature) => feature[1] !== 0 && feature[1] !== ""
  );

  return (
    <ul className={styles.list}>
      {featuresArr.map(([title, value]) => (
        <DetailsItem key={title} title={title} value={value} />
      ))}
    </ul>
  );
}
