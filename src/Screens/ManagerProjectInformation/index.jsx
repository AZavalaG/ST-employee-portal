import React, { useEffect, useState } from "react";
import ItemCard from "../../Components/ItemCard";
import styles from "./managerProjectInformation.module.css";

const ManagerProjectInformation = (props) => {
  const { user } = props;
  const [hoursLeft, sethoursLeft] = useState(0);
  const [hoursElapsed, setHoursElapsed] = useState(0);
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState("");
  useEffect(() => {
    var today = new Date();
    let day = today.getDate();
    let year = today.getFullYear();
    let month = today.getMonth();
    const numDias = new Date(year, month + 1, 0).getDate();
    const monthNameLong = today.toLocaleString("en-US", { month: "long" });
    let businessDays = 0;
    let daysElapsed = 0;
    for (let dia = 1; dia <= numDias; dia++) {
      const weekday = new Date(year, month, dia).getDay();

      // We check if it is a business day
      if (weekday >= 1 && weekday <= 5) {
        if (dia <= day) {
          daysElapsed++;
        }
        businessDays++;
      }
    }
    sethoursLeft((businessDays - daysElapsed) * 8);
    setHoursElapsed(daysElapsed * 8);
    setCurrentYear(year);
    setCurrentMonth(monthNameLong);
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
        <div className={styles.verticalLine}></div>
        <section className={styles.summarySectionTimeLeft}>
          <div className={styles.monthLabel}>{hoursLeft}</div>
          <div className={styles.hoursLabel}>{"hours left"}</div>
        </section>
        <div className={styles.verticalLine}></div>
        <section className={styles.summarySectionRegistered}>
          <div className={styles.monthLabel}>{hoursElapsed}</div>
          <div className={styles.hoursLabel}>{"hours registered"}</div>
        </section>
      </div>
      {user === "Dev" ? (
        <div className={styles.listContainer}>
          <div className={styles.subtitleList}>Timecards</div>
          <div className={styles.subtitleListRight}>Days Off Requests</div>
          <div className={styles.columnList}>
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />
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
              status={"Pending"}
              subtitle={"holyday"}
              title={"JUNE 2023"}
            />
          </div>
        </div>
      ) : (
        <div className={styles.listContainer}>
          <div className={styles.subtitleList}>Team's Timecards</div>
          <div className={styles.columnListManager}>
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />{" "}
            <ItemCard onClick={()=>{window.alert("click")}} status={"Rejected"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Approved"} title={"JUNE 2023"} />
            <ItemCard onClick={()=>{window.alert("click")}} status={"Pending"} title={"JUNE 2023"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerProjectInformation;

ManagerProjectInformation.defaultProps = {
  user: "Manager",
};