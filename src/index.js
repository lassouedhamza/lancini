import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './Redux/store';
import * as serviceWorker from './serviceWorker';
//import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

//Kommunicate.init("291536662d07ed720dcf854876e864423",{appId:"291536662d07ed720dcf854876e864423"});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
