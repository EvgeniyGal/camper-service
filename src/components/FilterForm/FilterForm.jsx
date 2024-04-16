import styles from "./FilterForm.module.css";
import svgSprite from "../../assets/images/sprite.svg";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/slices/filters";

export default function FilterForm() {
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const equipment = Array.from(formData.entries())
      .filter(([key]) => key === "equip")
      .map((equip) => equip[1]);

    const type = Array.from(formData.entries())
      .filter(([key]) => key === "type")
      .map((type) => type[1]);

    dispatch(filtersActions.setFeatures({ equipment, type }));
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={styles["filter-form"]}
      action="submit"
    >
      <p className={styles["filter-name"]}>Filter</p>
      <p className={styles["element-name"]}>Vehicle equipment</p>
      <p className={styles["decor"]}></p>
      <div className={styles["checkbox-container"]}>
        <label className={styles["checkbox-item-container"]}>
          <input
            type="checkbox"
            id="equip"
            name="equip"
            value="airConditioner"
          />
          <svg>
            <use href={`${svgSprite}#ac`}></use>
          </svg>
          <span>AC</span>
        </label>
        <label className={styles["checkbox-item-container"]}>
          <input type="checkbox" id="equip" name="equip" value="transmission" />
          <svg>
            <use href={`${svgSprite}#transmission`}></use>
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
      <div className={styles["checkbox-type-btn-container"]}>
        <label className={styles["checkbox-type-btn-item-container"]}>
          <input type="checkbox" id="type" name="type" value="van" />
          <svg>
            <use href={`${svgSprite}#van`}></use>
          </svg>
          <span>Van</span>
        </label>
        <label className={styles["checkbox-type-btn-item-container"]}>
          <input
            type="checkbox"
            id="type"
            name="type"
            value="fullyIntegrated"
          />
          <svg>
            <use href={`${svgSprite}#fully-integrated`}></use>
          </svg>
          <span>
            Fully <br /> Integrated
          </span>
        </label>
        <label className={styles["checkbox-type-btn-item-container"]}>
          <input type="checkbox" id="type" name="type" value="alcove" />
          <svg>
            <use href={`${svgSprite}#alcove`}></use>
          </svg>
          <span>Alcove</span>
        </label>
      </div>
      <p className={styles["btn-container"]}>
        <Button type="submit" btnStyle="search">
          Search
        </Button>
      </p>
    </form>
  );
}
