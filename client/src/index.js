import React from 'react';
import ReactDOM from 'react-dom';

// this code is from the Stripe exercise
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// This code is from the mini-project
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// this code was the same for both
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorker.register();
