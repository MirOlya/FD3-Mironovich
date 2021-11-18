import React from "react";

import RecordMitData from "../components/RecordMitData";

export default function Page_Todo(props) {
  const messageId = parseInt(props.match.params.clid);

  return (
    <div className="page">
      <RecordMitData
        strNavLink={"Message"}
        header={"Сообщение"}
        strFetch={
          "https://jsonplaceholder.typicode.com/comments/" + messageId + "/"
        }
      />
    </div>
  );
}
