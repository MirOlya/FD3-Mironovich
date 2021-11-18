import React, { useEffect, useState } from "react";
import PageMitData from "./PageMitData";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Page_Employees(props) {
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
        strNavLink={"Employee"}
        header={"Сотрудники"}
        strFetch={"https://jsonplaceholder.typicode.com/users"}
      />
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    beginRecord: state.beginRecorder.beginRecord,
  };
};

Page_Employees.propTypes = {
  beginRecord: PropTypes.number, // получено из Redux
};

Page_Employees = connect(mapStateToProps)(Page_Employees);

export default Page_Employees;
