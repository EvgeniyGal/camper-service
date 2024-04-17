import { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  function handleClickBackdrop(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      id="backdrop"
      className={styles.backdrop}
      onClick={handleClickBackdrop}
    >
      {children}
    </div>
  );
}
