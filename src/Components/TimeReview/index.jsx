import React, { useEffect, useState } from "react";
import styles from "./TimeReview.module.css";
import BackButton from "../../Assets/backCircule.jpg";
import FowardButton from "../../Assets/fowardCircule.jpg";
import { data } from "./dummyData";
import {
  formateadorShort,
  numeroDeSemana,
  semanasConDias,
} from "./functions";
const TimeReview = (props) => {
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
export default TimeReview;
TimeReview.defaultProps = {
  type: "review",
};
