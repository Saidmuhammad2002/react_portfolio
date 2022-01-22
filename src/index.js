import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dunyodagi eng boy odamning ikkinci</title>
      <link rel="canonical" href="https://saidmuhammadportfolio.netlify.app/" />
    </Helmet>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);
