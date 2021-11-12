import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Employees from './Page_Employees';
import Page_Company from './Page_Company';
import Page_Clients from './Page_Clients';
import Page_Client from './Page_Client';

import './css/PagesRouter.css';

function PagesRouter () {
    return (
      <div className='PagesRouter'>
        <Route path="/" exact component={Page_Employees} />
        <Route path="/company" component={Page_Company} />
        <Route path="/clients" component={Page_Clients} />
        <Route path="/client/:clid" component={Page_Client} />
      </div>
    );
    

}
    
export default PagesRouter;
    