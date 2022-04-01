import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BorderRadiusProvider } from "./context/BorderRadiusContext";
import { SwitchBox3DProvider } from "./context/SwitchBox3DContext";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BorderRadiusProvider>
      <SwitchBox3DProvider>
        <App />
      </SwitchBox3DProvider>
    </BorderRadiusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
