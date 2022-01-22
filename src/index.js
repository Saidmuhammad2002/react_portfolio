import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Saidmuhammads Best Portfolio ever</title>
      <link rel="canonical" href="https://saidmuhammadportfolio.netlify.app/")" />
    </Helmet>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);
