import React, { useState } from "react";
import styles from './requestLayout.module.css';


const RequestLayout = (props) => {

  const initialVariables = {
    numRequest: "75672",
    dateRequest : "22/06/2023",
    status: "Approved"
  };

  const [createRequest] = useState(initialVariables);

  return (
    <div>
      <h2>Request</h2>
      <div>
        <table>
          <tr>
            <th>Request #</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{createRequest.numRequest}</td>
            <td>{createRequest.dateRequest}</td>
            <td>{createRequest.status}</td>
          </tr>
        </table>
      </div>
    </div>
  );  
}

export default RequestLayout;
