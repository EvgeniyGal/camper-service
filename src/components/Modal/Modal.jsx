import { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  function handleClickBackdrop(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleClickBackdrop}>
      {children}
    </div>
  );
}
