import React, { useEffect, useState } from "react";
import PageMitData from "./PageMitData";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Page_Messages(props) {
  useEffect(() => {
    console.log("load SETNEWRECORD");
    props.dispatch({
      type: "SETNEWRECORD",
      beginRecord: 1,
    });
  }, []);

  return (
    <div className="page">
      <PageMitData
        strNavLink={"Message"}
        header={"Сообщения"}
        strFetch={"https://jsonplaceholder.typicode.com/comments"}
      />
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    beginRecord: state.beginRecorder.beginRecord,
  };
};

Page_Messages.propTypes = {
  beginRecord: PropTypes.number, // получено из Redux
};

Page_Messages = connect(mapStateToProps)(Page_Messages);

export default Page_Messages;
