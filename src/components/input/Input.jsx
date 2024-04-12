import styles from "./Input.module.css";
import svgSprite from "../../assets/images/sprite.svg";

export default function Input({ children, name, iconName, ...props }) {
  return (
    <div className={styles["input-container"]}>
      <label className={styles["input-label"]} htmlFor={name}>
        {" "}
        {children}
      </label>
      <p className={styles["input-field-container"]}>
        <svg>
          <use href={`${svgSprite}#${iconName}`}></use>
        </svg>
        <input
          className={`${styles["input-field"]} ${
            iconName ? styles["icon"] : ""
          }`}
          name={name}
          id={name}
          placeholder="Lorem ipsum"
          type="text"
          {...props}
        />
      </p>
    </div>
  );
}
