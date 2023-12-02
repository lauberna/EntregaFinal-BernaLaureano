import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
