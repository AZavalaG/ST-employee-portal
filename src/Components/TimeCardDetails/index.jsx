import React from "react";
import { useState } from "react";
import ModalWindow from "../Modal";
import styles from "./styles.module.css";
import ItemCard from "../ItemCard";
import TimeEntry from "../../Screens/TimeEntry";

const TimeCardDetails = (props) => {
  const { type } = props;
  const [show, setShow] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  return (
    <>
      <ItemCard
        onClick={() => setShow(true)}
        status={props.status}
        title={props.title}
        subtitle={props.subtitle}
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
        modalType={type==="Dev"?"informative":"confirm"}
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
          <TimeEntry type={type === "Dev" ? "request" : "view"} />
        </form>
      </ModalWindow>
      {type === "Dev" ? null : (
        <>
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
      )}
    </>
  );
};

export default TimeCardDetails;

TimeCardDetails.defaultProps = {
  type: "Dev",
};
