import DetailsItem from "./DetailsItem";
import styles from "./Details.module.css";

export default function Details({ features }) {
  return (
    <ul className={styles.list}>
      {features.map(([title, value]) => (
        <DetailsItem key={title} title={title} value={value} />
      ))}
    </ul>
  );
}
