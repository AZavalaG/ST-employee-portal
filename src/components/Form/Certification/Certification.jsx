import React, { useState } from "react";
import "./style/Certification.css";

export const initialForm = {
  Name: "",
  Institution: "",
  Link: "",
  Expedition: "",
  Expiration: "",
  IsExpire: false,
};

export default function Certification(props) {
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
    <div className="container-form">
      <label className="title-form">Add Certification</label>
      <label className="subtitle-form">
        Fill the following form to include a new certification
      </label>
      <input
        placeholder="Certification Name"
        type="text"
        className="input-certification"
        name={"Name"}
        onChange={handleChange}
        value={createCertification.Name}
      />
      <input
        placeholder="Institution"
        type="text"
        className="input-certification space-top"
        name={"Institution"}
        onChange={handleChange}
        value={createCertification.Institution}
      />
      <input
        placeholder="Certification Link"
        type="text"
        className="input-certification space-top"
        name={"Link"}
        onChange={handleChange}
        value={createCertification.Link}
      />
      <div className="calender-pickers">
        <label className="date-label-form">Expedition Date:</label>
        <input
          type="date"
          className="input-calender"
          name={"Expedition"}
          onChange={handleChange}
          value={createCertification.Expedition}
        ></input>
        <label className="date-label-form label-space">Expiration Date:</label>
        <input
          type="date"
          className="input-calender"
          name={"Expiration"}
          onChange={handleChange}
          value={createCertification.Expiration}
        ></input>
      </div>
      <div className="check-pickers">
        <input
          type="checkbox"
          className="check-box"
          name={"IsExpire"}
          onChange={handleChange}
          checked={createCertification.IsExpire}
        />
        <label className="check-label">Does not expire</label>
      </div>
      <button className="button-submit" onClick={onSubmit}>
        Save Change
      </button>
    </div>
  );
}
