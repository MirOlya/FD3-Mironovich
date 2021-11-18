"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// import PagesRouter from './pages/PagesRouter';
// import PagesLinks from './pages/PagesLinks';
import FirstLogin from './pages/Page_Login';
import loginerReducer from "./redusers/loginerReducer";
import showerReducer from "./redusers/showerReducer";
import beginRecorderReducer from "./redusers/beginRecorderReducer";
import lengthDataReduser from "./redusers/lengthDataReduser";
import './pages/css/PagesRouter.css';

let combinedReducer=combineReducers({
  // редьюсер loginerReducer отвечает за раздел state под именем loginer - имя и пароль пользователя
  loginer: loginerReducer, 
  // редьюсер showerReducer отвечает за раздел state под именем shower - сколько записей сразу показывать
  shower: showerReducer, 
  // редьюсер beginRecorderReducer отвечает за раздел state под именем beginRecorder - начальная запись, с которой показываем
  beginRecorder: beginRecorderReducer, 
  lengthData: lengthDataReduser,
  // + другие редьюсеры
});

let store=createStore(combinedReducer);

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <FirstLogin userName={''} userPass={''} beginShow={5} beginRecords={1}/>
    </BrowserRouter>
  </Provider>
, document.getElementById('container') );
