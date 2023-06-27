import React, { useState } from "react";
import styles from "./styles.module.css";

const Skills = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.skillValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.skills}>
      <div className={styles.skillName}>{props.skillName}</div> 
      <div className={styles.skillsContent}> 
        <button className={styles.dropdownButton} onClick={toggleDropdown}>
          {selectedValue} <span className={styles.arrowDown}>▼</span>
        </button> 
        {isOpen && (
          <div className={styles.dropdownContent}>
            {[...Array(11).keys()].map((value) => (
              <div
                key={value}
                className={styles.dropdownOption}
                onClick={() => handleSelect(value)}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div> 
    </div>
  );
};

export default Skills;
