"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Mobile from './components/Mobile';
import MobileControl from './components/MobileControl.js';

let companysArr =require('./companys.json');
let clientsArr=require('./clients.json');

  ReactDOM.render(
  <Mobile 
    companyNames={companysArr}
    companyClients={clientsArr}
  />
  ,document.getElementById('container') 
);

