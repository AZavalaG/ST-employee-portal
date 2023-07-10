//Autor: Christian A Laurian Reyes
//Fecha: 06/07/2023
//Ticket: E02H03 - Employee Directory

import React, { useState, useEffect } from "react";
import "./EmployeeDirectory.css";

/**
 * Componente EmployeeDirectory.
 * Muestra un directorio de empleados con información relevante.
 */
const EmployeeDirectory = () => {
  // Estado para almacenar los empleados
  const [employees, setEmployees] = useState([]);

  /**
   * Formatea una fecha en un formato amigable.
   * @param {string} date - La fecha a formatear.
   * @returns {string} La fecha formateada en un formato amigable.
   */
  const formatFriendlyDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  /**
   * Hook useEffect para cargar los empleados al montar el componente.
   */
  useEffect(() => {
    // Aquí puedes realizar una llamada a la API para obtener los datos de los empleados
    // y luego actualizar el estado de "employees" con los datos recibidos.
    fetch("URL_DE_TU_API")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.log(error));
  }, []);

  /**
   * Renderiza el componente EmployeeDirectory.
   */
  return (
    <div className="employee-directory-container">
  <h1>Employee Directory</h1>
  {/* Si no hay empleados, muestra un mensaje de carga */}
  {employees.length === 0 ? (
    <p>Loading employees...</p>
  ) : (
    <ul className="employee-list">
      {/* Itera sobre cada empleado */}
      {employees.map((employee) => (
        <li className="employee-item" key={employee.id}>
          {/* Enlace que redirige a la URL del empleado */}
          <a href={employee.snowURL} target="_blank" rel="noopener noreferrer">
            <div className="employee-info">
              {/* Muestra el nombre del empleado */}
              <h2 className="employee-name">{employee.nombre}</h2>
              {/* Muestra la fecha de creación del empleado */}
              <p>Creation date:<br/><p className="contentItem">{formatFriendlyDate(employee.created_at)}</p></p>
              {/* Enlace al perfil de Trailhead */}
              <p>
                <a
                  href={employee.trailheadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trailhead Link
                </a>
              </p>
              {/* Enlace al perfil de LinkedIn */}
              <p>
                <a
                  href={employee.linkedInURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
              {/* Enlace a la certificación EF Set */}
              <p>
                <a
                  href={employee.EFSetURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EF Set Certification
                </a>
              </p>
              {/* Muestra el nombre del gerente del empleado o "No asignado" */}
              <p>Manager: <br/><p className="contentItem">{employee.Manager ? employee.Manager : "No asignado"}</p></p>
              {/* Muestra la URL de Snow o "No disponible" */}
              <p>Snow URL: <br/><p className="contentItem">{employee.snowURL ? employee.snowURL : "No disponible"}</p></p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default EmployeeDirectory;
