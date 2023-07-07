import React from "react";
import { useState } from "react";
import ModalWindow from "../modal";
import styles from "./styles.module.css";
import ItemCard from "../ItemCard";

const TimeCardDetails = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ItemCard onClick={() => setShow(true)} status={props.status} title={props.title} />
      <ModalWindow
        onClose={() => setShow(false)}
        show={show}
        title="Time Card Details"
        modalType="confirm"
      >
        <div id="after_submit"></div>
        <form
          id="contact_form"
          action="#"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className={styles.information}>
            <h2 className={styles.content}>
              {props.name} {props.lastName}
            </h2>{" "}
            <h2 className={styles.content}>{props.practice}</h2> 
            <h2 className={styles.content}>{props.timeCardDate}</h2>
          </div>
        </form>
      </ModalWindow>
    </>
  );
};

export default TimeCardDetails;
