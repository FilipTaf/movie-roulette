import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import App from "../App";
import ReactDOM from "react-dom/client";
import "../index.css";
import store, { persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

export const Route = createFileRoute("/")({
  component: Index,
});
const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  return (
    root.render(
      <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      ,
    </React.StrictMode>
    )
  )
}


