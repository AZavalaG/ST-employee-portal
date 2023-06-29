import React from 'react'
import PropTypes from 'prop-types';
import styles from "./ModalWindow.module.css";
import closeHandle from '../../Images/close-cta.png';

function ModalWindow(props) {
  if(!props.show) {
    return null;
  }

  const closeHandlefn = () => {
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          { props.title ? <h1>{props.title}</h1> : ''}
          <span className={styles.iconClose}>
            <button onClick={props.onClose}><img src={closeHandle} width="20" height="16" alt='' onClick={closeHandlefn} /></button>
          </span>          
        </div>
        <div className={ true && props.children ? styles.modalContent : ''}>{props.children}</div>
        {/* Temporary code */}
        <div className={styles.modalFooter}>
          {
            props.modalType === 'confirm' ? <><input type='button' value='Accept' /> <input type='button' value='Cancel' onClick={props.onClose} /></>
            : <input type='button' value='Close' onClick={props.onClose} />
          }
        </div>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  title: PropTypes.string,
  modalType: PropTypes.string,
}

ModalWindow.defaultProps = {
  modalType: 'informative',
}

export default ModalWindow;