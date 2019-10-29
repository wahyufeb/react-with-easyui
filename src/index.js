import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
// Component
import App from "./App";
import Personnel from "./component/Personnel/Personnel";

import { easyAccordion1, easyAccordion2 } from "./component/easyAccordion";
import LayoutHome from "./component/LayoutHome";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/accordion" component={easyAccordion2} />
    <Route path="/awc" component={LayoutHome} />
    <Route path="/personnel" component={Personnel} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
