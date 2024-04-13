import styles from "./Button.module.css";
import svgSprite from "../../assets/images/sprite.svg";

const btnStyles = {
  search: styles["btn-search"],
  show: styles["btn-show"],
  transparent: styles["btn-transparent"],
  icon: styles["btn-icon"],
  "icon-set": styles["btn-icon-set"],
};

function getStyle(btnStyle, isFavorite) {
  if (btnStyle === "icon" && isFavorite) {
    return btnStyles["icon-set"];
  }
  if (btnStyle === "icon") {
    return btnStyles.icon;
  }

  return btnStyles[btnStyle];
}

export default function Button({ children, onClick, btnStyle, isFavorite }) {
  return (
    <button className={getStyle(btnStyle, isFavorite)} onClick={onClick}>
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
