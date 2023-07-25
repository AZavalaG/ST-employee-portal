import React, {useEffect, useState} from 'react';
import styles from './timeSummary.module.css';

const TimeSummary = () => {

    const [hoursLeft, sethoursLeft] = useState(0);
    const [hourstrans, sethourstrans] = useState(0);
    const [currentYear, setcurrentYear] = useState(2023);
    const [currentMonth, setcurrentMonth] = useState("");

    useEffect(() => {
        var today = new Date();
        let day = today.getDate();
        let year = today.getFullYear();
        let month = today.getMonth();
        const dayNum = new Date(year, month + 1, 0).getDate();
        const monthNameLong = today.toLocaleString("en-US", { month: "long" });
        let diasLaborables = 0;
        let daystranscurridos = 0;
        for (let dia = 1; dia <= dayNum; dia++) {
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
        <div className={styles.timeSummary}>
            <h3>Monthly Summary</h3>
            <div className={styles.timeSummaryContainer}>
                <div className={styles.monthContainer}>
                    <h4>{currentMonth}</h4>
                    <span>{currentYear}</span>
                </div>
                <div className={styles.hoursContainer}>
                    <h4>{hoursLeft}</h4>
                    <span>Hours Left</span>
                </div>
                <div className={styles.hoursContainer}>
                    <h4>{hourstrans}</h4>
                    <span>Hours Recorded</span>
                </div>
            </div>
        </div>
     );
}
 
export default TimeSummary;