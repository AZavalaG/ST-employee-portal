import React from 'react';
import styles from './modal.module.css'
import { useNavigate } from 'react-router-dom';

const ModalComponent = (props) => {
    const navigate = useNavigate();

    const handleClose = () => {
        if (props.redirectUrl) {
            props.setIsOpen(false);
            navigate(props.redirectUrl)
        } else {
            props.setIsOpen(false);
        }
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span className={styles.closeModal} onClick={handleClose}>X</span>
                <h1>{props.title}</h1>
                <div className={styles.modalContainerChildren}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
 
export default ModalComponent;