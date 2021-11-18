import React, { useEffect, useState } from "react";
import PageMitData from "./PageMitData";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Page_Todos(props) {
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
        strNavLink={"Todo"}
        header={"Задания"}
        strFetch={"https://jsonplaceholder.typicode.com/todos"}
      />
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    beginRecord: state.beginRecorder.beginRecord,
  };
};

Page_Todos.propTypes = {
  beginRecord: PropTypes.number, // получено из Redux
};

Page_Todos = connect(mapStateToProps)(Page_Todos);

export default Page_Todos;
