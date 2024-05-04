import styles from "./ReviewList.module.css";
import { Rating, Star } from "@smastrom/react-rating";

const ratingStyle = {
  itemShapes: Star,
  activeFillColor: "var(--rating)",
  inactiveFillColor: "var(--block-feature)",
};

export default function ReviewList({ reviews }) {
  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <li
          key={review.reviewer_name + Math.random().toString()}
          className={styles["list-item"]}
        >
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
      ))}
    </ul>
  );
}
