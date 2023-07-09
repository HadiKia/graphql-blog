import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cljbii5462lgj01t67x2q2x1b/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
