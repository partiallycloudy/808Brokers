import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Auth0Provider
      domain="dev-htobs7e6.us.auth0.com"
      clientId="XuIvVTH3ULKKr3D4CLOAZn8xf3WQP9Hm"
      authorizationParams={{
        redirect_uri: window.location.origin,
        connection: "dropbox"
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
