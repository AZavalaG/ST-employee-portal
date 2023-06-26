import React, { useState } from "react";
import styles from "./styles.module.css";

const UserInformation02 = () => {
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPhases, setSelectedPhases] = useState([]);
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectCodeChange = (event) => {
    setProjectCode(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePhaseSelectionChange = (event) => {
    const phaseValue = event.target.value;
    if (event.target.checked) {
      setSelectedPhases((prevSelectedPhases) => [
        ...prevSelectedPhases,
        phaseValue,
      ]);
    } else {
      setSelectedPhases((prevSelectedPhases) =>
        prevSelectedPhases.filter((phase) => phase !== phaseValue)
      );
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddPerson = () => {
    setPeople((prevPeople) => [...prevPeople, email]);
    setEmail("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send to Backend
    console.log({
      projectName,
      projectCode,
      description,
      selectedPhases,
      people,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Information</h2>
      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={handleProjectNameChange}
          className={styles.inputProjectName}
        />
        <input
          type="text"
          placeholder="Project Code"
          value={projectCode}
          onChange={handleProjectCodeChange}
          className={styles.inputProjectCode}
        />
      </div>
      <div>
        <textarea
          placeholder="Description..."
          value={description}
          onChange={handleDescriptionChange}
          className={styles.inputDescription}
        />
      </div>

      <div className={styles.phasesPeople}>
        <div className={styles.phases}>
          <h2>Phases</h2>
          <p className={styles.pInfo}>
            Select Phases you want to include into the Project's structure
          </p>
          <div className={styles.selecBox}>
            <input
              type="checkbox"
              id="ceremonies"
              value="ceremonies"
              checked={selectedPhases.includes("ceremonies")}
              onChange={handlePhaseSelectionChange}
            />
            <label htmlFor="ceremonies">Ceremonies</label>
          </div>

          <div className={styles.selecBox}>
            <input
              type="checkbox"
              id="discovery"
              value="discovery"
              checked={selectedPhases.includes("discovery")}
              onChange={handlePhaseSelectionChange}
            />
            <label htmlFor="discovery">Discovery</label>
          </div>

          <div className={styles.selecBox}>
            <input
              type="checkbox"
              id="planning"
              value="planning"
              checked={selectedPhases.includes("planning")}
              onChange={handlePhaseSelectionChange}
            />
            <label htmlFor="planning">Planning</label>
          </div>

          <div className={styles.selecBox}>
            <input
              type="checkbox"
              id="development"
              value="development"
              checked={selectedPhases.includes("development")}
              onChange={handlePhaseSelectionChange}
            />
            <label htmlFor="development">Development</label>
          </div>

          <div className={styles.selecBox}>
            <input
              type="checkbox"
              id="training"
              value="training"
              checked={selectedPhases.includes("training")}
              onChange={handlePhaseSelectionChange}
            />
            <label htmlFor="training">Training</label>
          </div>
        </div>

        <div className={styles.people}>
          <h2>People</h2>
          <p className={styles.pInfo}>Add person's email to add them to the project</p>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.inputEmail}
              placeholder="Email"
            />
            <button type="button" onClick={handleAddPerson} className={styles.btnEmailAdd}>
              Add
            </button>
            
            <p className={styles.pInfo}>Registered:</p>

            <div className={styles.emailsDiv}>
              {people.map((person, index) => (
                <div><strong key={index}>{person}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInformation02;
