import { Rating, Star } from "@smastrom/react-rating";
import styles from "./ReviewListItem.module.css";

const ratingStyle = {
  itemShapes: Star,
  activeFillColor: "var(--rating)",
  inactiveFillColor: "var(--block-feature)",
};

export default function ReviewListItem({ review }) {
  return (
    <li className={styles["list-item"]}>
      <div className={styles["title-container"]}>
        <p className={styles["round-decor"]}>{review.reviewer_name[0]}</p>
        <div>
          <h3>{review.reviewer_name}</h3>
          <Rating
            itemStyles={ratingStyle}
            style={{ maxWidth: 96 }}
            value={review.reviewer_rating}
            readOnly
          />
        </div>
      </div>
      <p className={styles["description"]}>{review.comment}</p>
    </li>
  );
}
