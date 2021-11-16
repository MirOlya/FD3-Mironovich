import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Employees from './Page_Employees';
import Page_Messages from './Page_Messages';
import Page_Todos from './Page_Todos';

import Page_Employee from './Page_Employee';
import Page_Message from './Page_Message';
import Page_Todo from './Page_Todo';

import './css/PagesRouter.css';

function PagesRouter () {
    return (
      <div className='PagesRouter'>
        <Route path="/" exact component={Page_Employees} />
        <Route path="/messages" component={Page_Messages} />
        <Route path="/todos" component={Page_Todos} />
        <Route path="/employee/:clid" component={Page_Employee} />
        <Route path="/message/:clid" component={Page_Message} />
        <Route path="/todo/:clid" component={Page_Todo} />
      </div>
    );
    

}
    
export default PagesRouter;
    