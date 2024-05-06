import styles from "./Input.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Input({ children, name, iconName, warning, ...props }) {
  const [date, setDate] = useState("");

  let inputElement = (
    <input
      className={`${styles["input-field"]} ${iconName ? styles["icon"] : ""}`}
      name={name}
      type="text"
      {...props}
    />
  );

  if (name === "bookingDate") {
    inputElement = (
      <DatePicker
        className={styles["input-field"]}
        name={name}
        selected={date}
        onChange={(date) => setDate(date)}
        {...props}
        placeholderText="Booking date"
      />
    );
  }

  return (
    <div className={styles["input-container"]}>
      {children && (
        <label className={styles["input-label"]} htmlFor={name}>
          {children}
        </label>
      )}
      <div className={styles["input-field-container"]}>
        {iconName && (
          <svg>
            <use href={`${svgSprite}#${iconName}`}></use>
          </svg>
        )}
        {inputElement}
        {warning && <span className={styles["warning"]}>{warning}</span>}
      </div>
    </div>
  );
}
