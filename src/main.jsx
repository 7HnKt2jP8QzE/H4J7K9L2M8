import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menu from "./components/Menu";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <App />
  </React.StrictMode>
)
