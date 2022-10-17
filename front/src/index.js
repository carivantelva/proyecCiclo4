import React from 'react'; //importamos el react
import ReactDOM from 'react-dom/client'; //importamos el DOM necesario para 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);