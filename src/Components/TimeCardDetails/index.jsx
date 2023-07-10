import React from "react";
import { useState } from "react";
import ModalWindow from "../modal";
import styles from "./styles.module.css";
import ItemCard from "../ItemCard";
import TimeEntry from "../TimeEntry";

const TimeCardDetails = (props) => {
  const [show, setShow] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  return (
    <>
      <ItemCard
        onClick={() => setShow(true)}
        status={props.status}
        title={props.title}
      />
      <ModalWindow
        onClose={() => setShow(false)}
        onAccept={() => {
          setShow(false);
          setShowApprovalModal(true);
        }}
        onCancel={() => {
          setShow(false);
          setShowRejectionModal(true);
        }}
        show={show}
        title="Time Card Details"
        modalType="confirm"
        acceptButtonValue="Approve"
        cancelButtonValue="Reject"
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
          <TimeEntry type="view" />
        </form>
      </ModalWindow>
      <ModalWindow
        onClose={() => setShowApprovalModal(false)}
        show={showApprovalModal}
        title="TimeCard Approved!"
        hideCloseButton={true}
      ></ModalWindow>
      <ModalWindow
        onClose={() => setShowRejectionModal(false)}
        show={showRejectionModal}
        title="TimeCard Rejected!"
        hideCloseButton={true}
      ></ModalWindow>
    </>
  );
};

export default TimeCardDetails;
