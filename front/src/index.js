import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvieder } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options ={
  setTimeout: 3000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvieder template={AlertTemplate} {...options}>
    <App />
    </AlertProvieder>
  </Provider>
);