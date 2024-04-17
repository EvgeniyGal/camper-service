import styles from "./Button.module.css";
import svgSprite from "../../assets/images/sprite.svg";

function getStyle(btnStyle, isActive) {
  if (btnStyle === "icon" && isActive) {
    return styles["icon-active"];
  }
  if (btnStyle === "icon") {
    return styles["icon"];
  }
  if (btnStyle === "underscore" && isActive) {
    return `${styles.underscore} ${styles["underscore-active"]}`;
  }
  if (btnStyle === "underscore") {
    return styles.underscore;
  }

  return styles[btnStyle];
}

export default function Button({ children, onClick, btnStyle, isActive }) {
  return (
    <button className={getStyle(btnStyle, isActive)} onClick={onClick}>
      {btnStyle === "icon" ? (
        <svg>
          <use href={`${svgSprite}#${children}`}></use>
        </svg>
      ) : (
        children
      )}
    </button>
  );
}
