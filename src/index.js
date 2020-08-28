import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CustomThemeProvider from "./Themes/customThemeProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
