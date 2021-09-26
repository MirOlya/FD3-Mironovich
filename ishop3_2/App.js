"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop3Shop from './components/Ishop3Shop';

let nameShop ='My shop';
let goodsArr=require('./goods.json');

  ReactDOM.render(
  <Ishop3Shop 
  companyName={nameShop}
  companyGoods={goodsArr}
  />
  ,document.getElementById('container') 
);

