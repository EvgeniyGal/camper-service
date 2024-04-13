import styles from "./AsideFilter.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function AsideFilter() {
  return (
    <aside className={styles["left-container"]}>
      <form className={styles["filter-form"]} action="submit">
        <Input iconName="location">Location</Input>
        <p className={styles["filter-name"]}>Filter</p>
        <p className={styles["element-name"]}>Vehicle equipment</p>
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
            <input type="checkbox" id="equip" name="equip" value="TV" />
            <svg>
              <use href={`${svgSprite}#TV`}></use>
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
        <p className={styles["element-name"]}>Vehicle type</p>
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
        <p className={styles["btn-container"]}>
          <Button btnStyle="search">Search</Button>
        </p>
      </form>
    </aside>
  );
}
