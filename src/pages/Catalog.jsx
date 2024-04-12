import Aside from "../components/aside/Aside";
import styles from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={`main-container ${styles["content-container"]} `}>
      <Aside />
      <ul>catalog</ul>
    </div>
  );
}
