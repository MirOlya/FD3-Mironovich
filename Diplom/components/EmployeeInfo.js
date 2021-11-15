import React from 'react';
import PropTypes from 'prop-types';

export default function EmployeeInfo (props) {

    return (
      <h1>
        клиент &laquo;{props.info}&raquo;, баланс {props.info}
      </h1>
    )


}
