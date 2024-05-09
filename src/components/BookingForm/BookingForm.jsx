import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./BookingForm.module.css";
import {
  bookingDateCheck,
  emailCheck,
  nameCheck,
} from "../../helpers/form-data-checks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appActionsActions } from "../../store/slices/app-actions";

const INITIAL_STATE = {
  nameCheck: "",
  emailCheck: "",
  bookingDateCheck: "",
};

export default function BookingForm() {
  const [formDataCheck, setFormDataCheck] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const formDataCheck = {
      nameCheck: nameCheck(data.name),
      emailCheck: emailCheck(data.email),
      bookingDateCheck: bookingDateCheck(data.bookingDate),
    };
    if (
      formDataCheck.nameCheck ||
      formDataCheck.emailCheck ||
      formDataCheck.bookingDateCheck
    ) {
      setFormDataCheck(formDataCheck);
      return;
    }

    setFormDataCheck(INITIAL_STATE);

    console.log(data);
    dispatch(appActionsActions.toggleModalDetails());
    navigate("/");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={styles["form-container"]}
    >
      <div>
        <h2 className={styles["title"]}>Book your campervan now</h2>
        <p className={styles["info"]}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={styles["inputs-container"]}>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          warning={formDataCheck.nameCheck}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          warning={formDataCheck.emailCheck}
        />
        <Input
          name="bookingDate"
          type="text"
          placeholder="Booking date"
          warning={formDataCheck.bookingDateCheck}
        />
        <textarea
          className={styles["comment"]}
          name="comment"
          placeholder="Comment"
        ></textarea>
      </div>
      <Button type="submit" btnStyle="search">
        Send
      </Button>
    </form>
  );
}
