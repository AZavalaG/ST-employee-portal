import React, { useState } from 'react';
import styles from "./itemCardSOP.module.css";

const ItemCardSOP = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function handleOnClick(event) {
    event.stopPropagation();
  }
  const { title } = props;
  return (
    <div className={styles.layout} onClick={() => { props.onClick() }}>
      <>
        <div className={styles.outsideCheckBox}>
          <label className={styles.container}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              onClick={handleOnClick}
            />
            <span className={styles.checkmark} onClick={handleOnClick}></span>
          </label>
        </div>
        <div className={styles.titleItemCard}>{title}</div>
      </>
    </div >
  );
};
export default ItemCardSOP;
ItemCardSOP.defaultProps = {
  title: "",
};
