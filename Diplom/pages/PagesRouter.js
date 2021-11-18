import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Switch, useLocation } from "react-router-dom";

import Page_Employees from "./Page_Employees";
import Page_Messages from "./Page_Messages";
import Page_Todos from "./Page_Todos";

import Page_Employee from "./Page_Employee";
import Page_Message from "./Page_Message";
import Page_Todo from "./Page_Todo";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./css/PagesRouter.css";
// import { Switch } from '@mui/material';

function PagesRouter() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="PagesRouter">
      <TransitionGroup>
        <CSSTransition timeout={500} className="page" key={location.key}>
          <Switch location={location}>
            <Route path="/" exact>
              <Page_Employees />
            </Route>
            <Route path="/messages">
              <Page_Messages />
            </Route>
            <Route path="/todos">
              <Page_Todos />
            </Route>
            <Route path="/employee/:clid" component={Page_Employee}></Route>
            <Route path="/message/:clid" component={Page_Message}></Route>
            <Route path="/todo/:clid" component={Page_Todo}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default PagesRouter;
