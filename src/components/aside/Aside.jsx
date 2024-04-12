import Input from "../input/Input";
import styles from "./Aside.module.css";
import svgSprite from "../../assets/images/sprite.svg";

export default function Aside() {
  return (
    <aside className={styles["left-container"]}>
      <form className={styles["filter-form"]} action="submit">
        <Input iconName="location">Location</Input>
        <p>Filter</p>
        <p>Vehicle equipment</p>
        <p className={styles["decor"]}></p>
        <div className={styles["checkbox-container"]}>
          <label className={styles["checkbox-item-container"]}>
            <input type="checkbox" id="equip" name="equip" value="ac" />
            <svg>
              <use href={`${svgSprite}#ac`}></use>
            </svg>
            <span>AC</span>
          </label>
          <label className={styles["checkbox-item-container"]}>
            <input type="checkbox" id="equip" name="equip" value="automatic" />
            <svg>
              <use href={`${svgSprite}#automatic`}></use>
            </svg>
            <span>Automatic</span>
          </label>
          <label className={styles["checkbox-item-container"]}>
            <input type="checkbox" id="equip" name="equip" value="kitchen" />
            <svg>
              <use href={`${svgSprite}#kitchen`}></use>
            </svg>
            <span>Kitchen</span>
          </label>
          <label className={styles["checkbox-item-container"]}>
            <input type="checkbox" id="equip" name="equip" value="tv" />
            <svg>
              <use href={`${svgSprite}#tv`}></use>
            </svg>
            <span>TV</span>
          </label>
          <label className={styles["checkbox-item-container"]}>
            <input type="checkbox" id="equip" name="equip" value="shower" />
            <svg>
              <use href={`${svgSprite}#shower`}></use>
            </svg>
            <span>Shower</span>
          </label>
        </div>
        <p>Vehicle type</p>
        <p className={styles["decor"]}></p>
        <div className={styles["radio-btn-container"]}>
          <label className={styles["radio-btn-item-container"]}>
            <input type="radio" id="type" name="type" value="van" />
            <svg>
              <use href={`${svgSprite}#van`}></use>
            </svg>
            <span>Van</span>
          </label>
          <label className={styles["radio-btn-item-container"]}>
            <input
              type="radio"
              id="type"
              name="type"
              value="fully-integrated"
            />
            <svg>
              <use href={`${svgSprite}#fully-integrated`}></use>
            </svg>
            <span>
              Fully <br /> Integrated
            </span>
          </label>
          <label className={styles["radio-btn-item-container"]}>
            <input type="radio" id="type" name="type" value="alcove" />
            <svg>
              <use href={`${svgSprite}#alcove`}></use>
            </svg>
            <span>Alcove</span>
          </label>
        </div>
      </form>
    </aside>
  );
}
