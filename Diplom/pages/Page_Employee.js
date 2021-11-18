import React from "react";

import RecordMitData from "../components/RecordMitData";

export default function Page_Employee(props) {
  const clientId = parseInt(props.match.params.clid);

  console.log("clientId = " + clientId);
  return (
    <div className="page">
      <RecordMitData
        strNavLink={"Employee"}
        header={"Сотрудник"}
        strFetch={
          "https://jsonplaceholder.typicode.com/users/" + clientId + "/"
        }
      />
    </div>
  );
}
