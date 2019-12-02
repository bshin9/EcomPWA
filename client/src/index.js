import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./service-worker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
