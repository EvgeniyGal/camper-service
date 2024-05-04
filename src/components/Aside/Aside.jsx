import styles from "./Aside.module.css";
import Input from "../In/Input";
import FilterForm from "../FilterForm/FilterForm";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/slices/filters";
import { filtersLocationSelector } from "../../store/selectors";

export default function Aside() {
  const location = useSelector(filtersLocationSelector);
  const dispatch = useDispatch();

  const setLocation = (event) => {
    dispatch(filtersActions.setLocation(event.target.value));
  };

  return (
    <aside className={styles["left-container"]}>
      <Input value={location} onChange={setLocation} iconName="location">
        Location
      </Input>
      <FilterForm />
    </aside>
  );
}
