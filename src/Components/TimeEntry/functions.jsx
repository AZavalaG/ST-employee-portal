export const numeroDeSemana = (fecha) => {
  const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
    DIAS_QUE_TIENE_UNA_SEMANA = 7,
    JUEVES = 4;
  fecha = new Date(
    Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
  );
  let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
  if (diaDeLaSemana === 0) {
    diaDeLaSemana = 7;
  }
  fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
  const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
  const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
  return Math.ceil(
    (diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS + 1) /
      DIAS_QUE_TIENE_UNA_SEMANA
  );
};
export const semanasConDias = (inicio, fin) => {
  let semanas = [{ numSemana: 1, inicio: "", fin: "" }];
  let numSemana = 1;
  for (; inicio < fin; inicio.setDate(inicio.getDate() + 1)) {
    const diaSemana = new Date(inicio).getDay();
    if (diaSemana >= 1 && diaSemana <= 5) {
      if (semanas[numSemana - 1].inicio === "") {
        let sDate = JSON.stringify(inicio);
        semanas[numSemana - 1].inicio = sDate;
      } else {
        const numero = numeroDeSemana(inicio);
        if (numSemana === numero) {
          let sDate = JSON.stringify(inicio);

          semanas[numSemana - 1].fin = sDate;
        } else {
          numSemana = numero;
          let sDate = JSON.stringify(inicio);

          semanas.push({
            numSemana: numSemana,
            inicio: sDate,
            fin: "",
          });
        }
      }
    }
  }
  return semanas;
};
export const formateador = (date) => {
  const today = new Date(date);
  let day = today.getDate();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  const monthNameLong = day + "/" + month + "/" + year;
  return monthNameLong;
};
export const formateadorShort = (tableday, nunDay) => {
  let date = new Date(JSON.parse(tableday));
  date.setDate(date.getDate() + nunDay);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  const monthNameLong = day + "/" + month;
  return monthNameLong;
};
