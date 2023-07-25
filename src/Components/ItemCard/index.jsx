import React, {useState} from "react";
import styles from "./ItemCard.module.css";
import ItemDetails from "../ItemDetails";
import ModalComponent from '../ModalComponent';

const ItemCard = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const variant = {
    Pending: styles.pendig,
    Approved: styles.approved,
    Rejected: styles.rejected,
  };

  const { itemType, title, subtitle, status } = props;

  if (itemType === 'request') {
    return (
      <>
        {isOpen && <ModalComponent title="Request´s Details" setIsOpen={setIsOpen}><ItemDetails itemType={itemType} /></ModalComponent>}
        <div onClick={() => setIsOpen(true)} className={styles.itemCard}>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <span className={variant[status]}>{props.status}</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        {isOpen && <ModalComponent title="Timecard´s Details" setIsOpen={setIsOpen}><ItemDetails itemType={itemType} /></ModalComponent>}
        <div onClick={() => setIsOpen(true)} className={styles.itemCard}>
          <h4>{title}</h4>
          <span className={variant[status]}>{props.status}</span>
        </div>
      </>
    )
  }
}

export default ItemCard;