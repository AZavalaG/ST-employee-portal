import React, { useState } from "react";
import styles from './certificationForm.module.css';

export const initialForm = {
  Name: "",
  Institution: "",
  Link: "",
  Expedition: "",
  Expiration: "",
  IsExpire: false,
};

const CertificationForm = (props) => {
  const [createCertification, setCreateCertification] = useState(initialForm);

  const handleChange = (e) => {
    setCreateCertification({
      ...createCertification,
      [e.target.name]:
        e.target.name === "IsExpire" ? e.target.checked : e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(createCertification);
  };
  return (
    <div className={styles.containerForm}>
      <label className={styles.titleForm}>Add Certification</label>
      <label className={styles.subtitleForm}>
        Fill the following form to include a new certification
      </label>
      <input
        placeholder="Certification Name"
        type="text"
        className={styles.inputCertification}
        name={"Name"}
        onChange={handleChange}
        value={createCertification.Name}
      />
      <input
        placeholder="Institution"
        type="text"
        className={`${styles.inputCertification} ${styles.spaceTop}`}
        name={"Institution"}
        onChange={handleChange}
        value={createCertification.Institution}
      />
      <input
        placeholder="Certification Link"
        type="text"
        className={`${styles.inputCertification} ${styles.spaceTop}`}
        name={"Link"}
        onChange={handleChange}
        value={createCertification.Link}
      />
      <div className={styles.calendarPickers}>
        <label className={styles.dateLabelForm}>Expedition Date:</label>
        <input
          type="date"
          className={styles.inputCalendar}
          name={"Expedition"}
          onChange={handleChange}
          value={createCertification.Expedition}
        ></input>
        <label className={`${styles.dateLabelForm} ${styles.labelSpace}`}>Expiration Date:</label>
        <input
          type="date"
          className={styles.inputCalendar}
          name={"Expiration"}
          onChange={handleChange}
          value={createCertification.Expiration}
        ></input>
      </div>
      <div className={styles.checkPickers}>
        <input
          type="checkbox"
          className={styles.checkBox}
          name={"IsExpire"}
          onChange={handleChange}
          checked={createCertification.IsExpire}
        />
        <label className={styles.checkLabel}>Does not expire</label>
      </div>
      <button className={styles.buttonSubmit} onClick={onSubmit}>
        Save Change
      </button>
    </div>
  );
}

export default CertificationForm;
