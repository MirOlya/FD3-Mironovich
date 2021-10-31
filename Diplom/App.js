"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// import PagesRouter from './pages/PagesRouter';
// import PagesLinks from './pages/PagesLinks';
import FirstLogin from './pages/Page_Login';
import loginerReducer from "./loginerReducer";

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  loginer: loginerReducer, 
  // + другие редьюсеры
});

let store=createStore(combinedReducer);

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <FirstLogin userName={''} userPass={''} isCheckPass={false} isCheckName={false}/>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('container') );
