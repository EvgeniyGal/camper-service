import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { appActionsActions } from "../../store/slices/app-actions";
import svgSprite from "../../assets/images/sprite.svg";
import { currentAdvertSelector } from "../../store/selectors";
import styles from "./ModalDetailedAdvert.module.css";
import { formatPrice } from "../../utils/formatters";
import { Scrollbars } from "rc-scrollbars";
import Button from "../Button/Button";
import { useState } from "react";
import Details from "../Details/Details";
import "@smastrom/react-rating/style.css";
import ReviewList from "../ReviewList/ReviewList";
import BookingForm from "../BookingForm/BookingForm";

export default function ModalDetailedAdvert() {
  const [infoContent, setInfoContent] = useState("features");
  const currentAdvert = useSelector(currentAdvertSelector);
  const dispatch = useDispatch();

  return (
    <Modal onClose={() => dispatch(appActionsActions.toggleModalDetails())}>
      <div className={styles["modal-container"]}>
        <Scrollbars
          renderTrackVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                borderRadius: "7px",
                width: "8px",
                paddingTop: "40px",
              }}
            />
          )}
        >
          <div className={styles["content-offset"]}>
            <div>
              <h2>{currentAdvert.name}</h2>
              <p className={styles["rating-container"]}>
                <span className={styles["rate"]}>
                  <svg>
                    <use href={`${svgSprite}#star`}></use>
                  </svg>
                  {currentAdvert.rating} ({currentAdvert.reviews.length}{" "}
                  reviews)
                </span>
                <span>
                  <svg className={styles["location-icon"]}>
                    <use href={`${svgSprite}#location`}></use>
                  </svg>
                  {currentAdvert.location}
                </span>
              </p>
              <p className={styles["price"]}>
                {formatPrice(currentAdvert.price)}
              </p>
            </div>
            <div className={styles["gallery"]}>
              <ul>
                {currentAdvert.gallery.map((imageUrl) => (
                  <li key={imageUrl}>
                    <img src={imageUrl} alt={currentAdvert.name} />
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles["description"]}>{currentAdvert.description}</p>
            <div className={styles["action-bar"]}>
              <Button
                isActive={infoContent === "features"}
                onClick={() => setInfoContent("features")}
                btnStyle="underscore"
              >
                Features
              </Button>
              <Button
                isActive={infoContent === "reviews"}
                onClick={() => setInfoContent("reviews")}
                btnStyle="underscore"
              >
                Reviews
              </Button>
            </div>
            <p className={styles.decor}></p>
            <div className={styles["bottom-container"]}>
              <div className={styles["feature-container"]}>
                {infoContent === "features" && (
                  <>
                    <Details features={currentAdvert.details} />

                    <h3>Vehicle details</h3>
                    <p className={styles["decor"]}></p>
                    <div className={styles["feature-container-list"]}>
                      <p>
                        <span>Form</span> <span>{currentAdvert.form}</span>
                      </p>
                      <p>
                        <span>Length</span> <span>{currentAdvert.length}</span>
                      </p>
                      <p>
                        <span>Width</span> <span>{currentAdvert.width}</span>
                      </p>
                      <p>
                        <span>Height</span> <span>{currentAdvert.height}</span>
                      </p>
                      <p>
                        <span>Tank</span> <span>{currentAdvert.tank}</span>
                      </p>
                      <p>
                        <span>Consumption</span>
                        <span>{currentAdvert.consumption}</span>
                      </p>
                    </div>
                  </>
                )}
                {infoContent === "reviews" && (
                  <ReviewList reviews={currentAdvert.reviews} />
                )}
              </div>
              <div className={styles["form-container"]}>
                <BookingForm />
              </div>
            </div>
            <button
              className={styles["close-btn"]}
              onClick={() => dispatch(appActionsActions.toggleModalDetails())}
            >
              <svg>
                <use href={`${svgSprite}#close-btn`}></use>
              </svg>
            </button>
          </div>
        </Scrollbars>
      </div>
    </Modal>
  );
}
