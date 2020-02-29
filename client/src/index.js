import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./themeStyle";
import { ThemeProvider } from "styled-components";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

require("dotenv").config({
  path: "./.env"
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
