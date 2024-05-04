import styles from "./Input.module.css";
import svgSprite from "../../assets/images/sprite.svg";

export default function Input({ children, name, iconName, warning, ...props }) {
  return (
    <div className={styles["input-container"]}>
      {children && (
        <label className={styles["input-label"]} htmlFor={name}>
          {children}
        </label>
      )}
      <p className={styles["input-field-container"]}>
        {iconName && (
          <svg>
            <use href={`${svgSprite}#${iconName}`}></use>
          </svg>
        )}
        <input
          className={`${styles["input-field"]} ${
            iconName ? styles["icon"] : ""
          }`}
          name={name}
          type="text"
          {...props}
        />
        {warning && <span className={styles["warning"]}>{warning}</span>}
      </p>
    </div>
  );
}
