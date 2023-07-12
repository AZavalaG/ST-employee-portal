import React, { useEffect, useState } from "react";
import styles from "./TimeEntry.module.css";
import BackButton from "../../Assets/backCircule.jpg";
import FowardButton from "../../Assets/fowardCircule.jpg";
import { data } from "./dummyData";
import {
  formateador,
  formateadorShort,
  numeroDeSemana,
  semanasConDias,
} from "./functions";
const TimeEntry = (props) => {
  const { type } = props;
  const [renderData, setRenderData] = useState(data);
  const [week, setWeek] = useState(null);
  const [selectData, setselectData] = useState([]);
  useEffect(() => {
    const numeroDeSemanaActual = numeroDeSemana(new Date());
    setWeek(numeroDeSemanaActual);
    const today = new Date();
    const inicio = new Date(today.getFullYear(), 0, 1);
    const fin = new Date(today.getFullYear() + 1, 0, 1);
    setselectData(semanasConDias(inicio, fin));
  }, []);
  const addOrSubtractWeek = (element) => {
    setWeek(week + element);
  };
  const handleVisibility = (nameProyect) => {
    let newData = [...renderData];
    for (let index = 0; index < newData.length; index++) {
      const element = newData[index];
      if (element.proyectName === nameProyect) {
        let visible = !element.visible;
        element.visible = visible;
        break;
      }
    }
    setRenderData(newData);
  };

  return (
    <div className={styles.layout}>
      {type === "request" ? (
        <div className={styles.weekSelector}>
          <div className={styles.titleWeek}>Week ending</div>
          <div
            className={styles.arrowButtonBack}
            onClick={() => {
              addOrSubtractWeek(-1);
            }}
            disabled={week === 0}
          >
            <img src={BackButton} alt="" />
          </div>
          <select
            type="date"
            className={styles.calenderInput}
            value={week}
            onChange={(e) => {
              setWeek(e.target.value);
            }}
            
          >
            {selectData.length > 0
              ? selectData.map((date) => (
                  <option value={date.numSemana}>
                    {"Semana " +
                      date.numSemana +
                      ": Inicio " +
                      formateador(JSON.parse(date.inicio)) +
                      " al " +
                      formateador(JSON.parse(date.fin))}
                  </option>
                ))
              : null}
          </select>
          <div
            className={styles.arrowButtonFoward}
            onClick={() => {
              addOrSubtractWeek(1);
            }}
            disabled={week === 52}
          >
            <img src={FowardButton} alt="" />
          </div>
        </div>
      ) : null}
      <table className={styles.tableContainer}>
        {renderData.map((proyect) => (
          <>
            <tr className={styles.rowContain}>
              <td
                className={styles.longHeader}
                onClick={() => {
                  handleVisibility(proyect.proyectName);
                }}
              >
                {proyect.proyectName + (proyect.visible ? " V" : " >")}
              </td>
              <td className={styles.smallHeader}>
                Mon
                <br />
                {selectData.length > 0 &&
                  formateadorShort(selectData[week - 1]?.inicio, 0)}
              </td>
              <td className={styles.smallHeader}>
                Tue
                <br />
                {selectData.length > 0 &&
                  formateadorShort(selectData[week - 1]?.inicio, 1)}
              </td>
              <td className={styles.smallHeader}>
                Wed
                <br />
                {selectData.length > 0 &&
                  formateadorShort(selectData[week - 1].inicio, 2)}
              </td>
              <td className={styles.smallHeader}>
                Thu
                <br />
                {selectData.length > 0 &&
                  formateadorShort(selectData[week - 1]?.inicio, 3)}
              </td>
              <td className={styles.smallHeader}>
                Fri
                <br />
                {selectData.length > 0 &&
                  formateadorShort(selectData[week - 1].inicio, 4)}
              </td>
              <td className={styles.commentSectionHeader}>{"Comment"}</td>
            </tr>
            {proyect.phases.map((phase) => (
              <>
                <tr
                  className={styles.rowContain}
                  style={{ display: proyect.visible ? "inline-flex" : "none" }}
                >
                  <td className={styles.longHeaderPhase}>
                    <span style={{ width: "15%" }} />
                    {phase.phaseName}
                  </td>
                  <td className={styles.smallHeader}>{phase.calender[0]}</td>
                  <td className={styles.smallHeader}>{phase.calender[1]}</td>
                  <td className={styles.smallHeader}>{phase.calender[2]}</td>
                  <td className={styles.smallHeader}>{phase.calender[3]}</td>
                  <td className={styles.smallHeader}>{phase.calender[4]}</td>
                  <td className={styles.commentSection}>
                    <input
                      disabled={type !== "request"}
                      className={styles.inputComment}
                      defaultValue={phase.comment}
                    ></input>
                  </td>
                </tr>
                {phase.tasks.map((task) => (
                  <>
                    <tr
                      className={styles.rowContain}
                      style={{
                        display: proyect.visible ? "inline-flex" : "none",
                      }}
                    >
                      <td className={styles.longHeaderTask}>
                        <span style={{ width: "30%" }} />
                        {task.taskName}
                      </td>
                      <td className={styles.smallHeader}>
                        <input
                          type={type === "request" ? "number" : "text"}
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.calender[0]}
                        ></input>
                      </td>
                      <td className={styles.smallHeader}>
                        <input
                          type={type === "request" ? "number" : "text"}
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.calender[1]}
                        ></input>
                      </td>
                      <td className={styles.smallHeader}>
                        <input
                          type={type === "request" ? "number" : "text"}
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.calender[2]}
                        ></input>
                      </td>
                      <td className={styles.smallHeader}>
                        <input
                          type={type === "request" ? "number" : "text"}
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.calender[3]}
                        ></input>
                      </td>
                      <td className={styles.smallHeader}>
                        <input
                          type={type === "request" ? "number" : "text"}
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.calender[4]}
                        ></input>
                      </td>
                      <td className={styles.commentSection}>
                        <input
                          disabled={type !== "request"}
                          className={styles.inputComment}
                          defaultValue={task.comment}
                        ></input>
                      </td>
                    </tr>
                  </>
                ))}
              </>
            ))}
          </>
        ))}
      </table>
    </div>
  );
};
export default TimeEntry;
TimeEntry.defaultProps = {
  type: "request",
};
