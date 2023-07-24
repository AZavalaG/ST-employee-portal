import React, { useState } from "react";
import styles from "./projectForm.module.css";

const ProjectForm = () => {
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

            <label className={styles.container}>
            Ceremonies
              <input type="checkbox" 
              id="ceremonies"
              value="ceremonies"
              checked={selectedPhases.includes("ceremonies")}
              onChange={handlePhaseSelectionChange}/>
              <span className={styles.checkmark}></span>
            </label>
            
            <label className={styles.container}>
            Discovery
              <input type="checkbox" 
              id="discovery"
              value="discovery"
              checked={selectedPhases.includes("discovery")}
              onChange={handlePhaseSelectionChange}/>
              <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            Planning
              <input type="checkbox" 
              id="planning"
              value="planning"
              checked={selectedPhases.includes("planning")}
              onChange={handlePhaseSelectionChange}/>
              <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            Development
              <input type="checkbox" 
              id="development"
              value="development"
              checked={selectedPhases.includes("development")}
              onChange={handlePhaseSelectionChange}/>
              <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            Training
              <input type="checkbox" 
              id="training"
              value="training"
              checked={selectedPhases.includes("training")}
              onChange={handlePhaseSelectionChange}/>
              <span className={styles.checkmark}></span>
            </label>

          </div>


        </div>

        <div className={styles.people}>
          <h2>People</h2>
          <p className={styles.pInfo}>
            Add person's email to add them to the project
          </p>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.inputEmail}
              placeholder="Email"
            />
            <button
              type="button"
              onClick={handleAddPerson}
              className={styles.btnEmailAdd}
            >
              Add
            </button>

            <p className={styles.pInfo}>Registered:</p>

            <div className={styles.emailsDiv}>
              {people.map((person, index) => (
                <div>
                  <strong key={index}>{person}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
