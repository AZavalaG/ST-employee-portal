import React, { useEffect, useState } from "react";
import styles from "./timeManagement.module.css";
import ItemCard from "../ItemCard";

const TimeManagement = (props) => {
  const { user } = props;
  const [hoursLeft, sethoursLeft] = useState(0);
  const [hourstrans, sethourstrans] = useState(0);
  const [currentYear, setcurrentYear] = useState(2023);
  const [currentMonth, setcurrentMonth] = useState("");
  useEffect(() => {
    var today = new Date();
    let day = today.getDate();
    let year = today.getFullYear();
    let month = today.getMonth();
    const numDias = new Date(year, month + 1, 0).getDate();
    const monthNameLong = today.toLocaleString("en-US", { month: "long" });
    let diasLaborables = 0;
    let daystranscurridos = 0;
    for (let dia = 1; dia <= numDias; dia++) {
      const diaSemana = new Date(year, month, dia).getDay();

      // Comprobamos si es un día laborable (de lunes a viernes)
      if (diaSemana >= 1 && diaSemana <= 5) {
        if (dia <= day) {
          daystranscurridos++;
        }
        diasLaborables++;
      }
    }
    sethoursLeft((diasLaborables - daystranscurridos) * 8);
    sethourstrans(daystranscurridos * 8);
    setcurrentYear(year);
    setcurrentMonth(monthNameLong);
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.titleTimeManagement}>Time Management</div>
      <div className={styles.subtitleTimeManagement}>Monthly Summary</div>
      <div className={styles.summaryDashboard}>
        <section className={styles.summarySectionMonth}>
          <div className={styles.monthLabel}>{currentMonth}</div>
          <div className={styles.yearLabel}>{currentYear}</div>
        </section>
        <section className={styles.summarySectionTimeLeft}>
          <div className={styles.monthLabel}>{hoursLeft}</div>
          <div className={styles.hoursLabel}>{"hours left"}</div>
        </section>
        <section className={styles.summarySectionRegistered}>
          <div className={styles.monthLabel}>{hourstrans}</div>
          <div className={styles.hoursLabel}>{"hours registered"}</div>
        </section>
      </div>
      {user === "Dev" ? (
        <div className={styles.listContainer}>
          <div className={styles.subtitleList}>Timecards</div>
          <div className={styles.subtitleListRigth}>Days Off Requests</div>
          <div className={styles.columnList}>
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />
          </div>
          <div className={styles.columnListRight}>
            <ItemCard
              status={"Rejected"}
              subtitle={"holyday"}
              title={"JUNE 2023"}
            />
            <ItemCard
              status={"Approved"}
              subtitle={"holyday"}
              title={"JUNE 2023"}
            />
            <ItemCard
              status={"Pendig"}
              subtitle={"holyday"}
              title={"JUNE 2023"}
            />
          </div>
        </div>
      ) : (
        <div className={styles.listContainer}>
          <div className={styles.subtitleList}>Team´s Timecards</div>
          <div className={styles.columnListManager}>
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pendig"} title={"JUNE 2023"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeManagement;

TimeManagement.defaultProps = {
  user: "Dev",
};
