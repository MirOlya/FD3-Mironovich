"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Mobile from '../components/Mobile.js';

test('работа Mobile', () => {

  // создаём тестовую версию компонента
  let companysArr =require('../companys.json');
  let clientsArr=require('../clients.json');
  
  const component = renderer.create(
    <Mobile 
    companyNames={companysArr}
    companyClients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find( el =>  el.props.id==='active' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});
