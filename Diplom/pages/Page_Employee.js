import React from 'react';

import EmployeeInfo from '../components/EmployeeInfo';

import appData from '../appData';

export default function Page_Employees(props) {
    const clientId=parseInt(props.match.params.clid);

    const clientData=appData.clientsArr.find( c => c.id==clientId );

    return (
      <EmployeeInfo
        info={clientData}
      />
    );

}
