import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import appstore from "../utils/appstore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appstore}>
    <App />
  </Provider>
);
