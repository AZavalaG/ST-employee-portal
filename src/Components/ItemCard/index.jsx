import React from "react";
import styles from "./ItemCard.module.css";

const ItemCard = (props) => {
  const variant = {
    Pendig: styles.pendig,
    Approved: styles.approved,
    Rejected: styles.rejected,
  };
  const { title, subtitle, status } = props;
  return (
    <div className={styles.layout} onClick={()=>{props.onClick()}}>
      {subtitle === "" ? (
        <>
          <div className={styles.titleItemCard}>{title}</div>
          <div className={variant[status]}>{status}</div>
        </>
      ) : (
        <>
          <div className={styles.titleWithSubtitleItemCard}>{title}</div>
          <div className={styles.titleWithSubtitleItemCard}>{subtitle}</div>
          <div className={variant[status]}>{status}</div>
        </>
      )}
    </div>
  );
};
export default ItemCard;
ItemCard.defaultProps = {
  title: "",
  subtitle: "",
  status: "Pendig",
};
