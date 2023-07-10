import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import closeHandle from "../../Assets/close-cta.png";

const ModalWindow = (props) => {
  if (!props.show) {
    return null;
  }

  const closeHandlefn = () => {};

  return (
    <div className={styles.overlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          {props.title ? <h1>{props.title}</h1> : ""}
          <span className={styles.iconClose}>
            <button onClick={props.onClose}>
              <img
                src={closeHandle}
                width="20"
                height="16"
                alt=""
                onClick={closeHandlefn}
              />
            </button>
          </span>
        </div>
        <div className={true && props.children ? styles.modalContent : ""}>
          {props.children}
        </div>
        <div className={styles.modalFooter}>
          {props.modalType === "confirm" ? (
            <>
              <input
                type="button"
                value={props.acceptButtonValue}
                onClick={props.onAccept}
                className={styles.modalApproved}
              />
              <input
                type="button"
                value={props.cancelButtonValue}
                onClick={props.onCancel}
                className={styles.modalRejected}
              />
            </>
          ) : (
            !props.hideCloseButton && (
              <input type="button" value="Close" onClick={props.onClose} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  title: PropTypes.string,
  modalType: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  hideCloseButton: PropTypes.bool,
  acceptButtonValue: PropTypes.string,
  cancelButtonValue: PropTypes.string,
};

ModalWindow.defaultProps = {
  modalType: "informative",
  hideCloseButton: false,
  acceptButtonValue: "Accept",
  cancelButtonValue: "Cancel",
  onCancel: () => {},
};

export default ModalWindow;
