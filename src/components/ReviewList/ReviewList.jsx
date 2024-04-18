import styles from "./ReviewList.module.css";
import ReviewListItem from "../ReviewList/ReviewListItem";

export default function ReviewList({ reviews }) {
  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <ReviewListItem
          key={review.reviewer_name + Math.random().toString()}
          review={review}
        />
      ))}
    </ul>
  );
}
