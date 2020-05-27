import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './components/serviceWorker';


import App from "./components/App";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.css'

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
