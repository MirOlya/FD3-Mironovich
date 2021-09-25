"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop3Shop from './components/Ishop3Shop';

const nameShop ='My shop';
const goodsArr=[ 
  {name:'Блюдо1',code:1,pict:'asian-1238668_640.jpg', rest:111,}, 
  {name:'Блюдо2',code:2,pict:'asparagus-2169305_1920.jpg', rest:222,}, 
  {name:'Блюдо3',code:3,pict:'berries-1869421_1920.jpg', rest:333,}, 
  {name:'Блюдо4',code:4,pict:'blueberries-919029_640 (1).jpg', rest:444,} 
];
  ReactDOM.render(
    React.createElement(Ishop3Shop,{companyName:nameShop,companyGoods:goodsArr}), 
    document.getElementById('container') 
  );

