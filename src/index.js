import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </>,
  document.getElementById("root")
);
